/**
 * This file is the entry point of the web page.
 */

{
    // Close other browser tabs
    const broadcastChannel = new BroadcastChannel("acg")
    broadcastChannel.addEventListener("message", (ev) => {
        if (ev.data === "hello") {
            location.href = "./tab_already_open.html"
        }
    })
    broadcastChannel.postMessage("hello")
}

import "typed-query-selector"                  // Replaces document.querySelector(All)'s type with better ones.
import "core-js/proposals/map-upsert-stage-2"  // Adds Map.emplace() https://github.com/tc39/proposal-upsert
import "core-js/proposals/set-methods"         // Adds Set.intersection(), Set.union(), Set.difference(), etc. https://github.com/tc39/proposal-set-methods
import { loaded } from "./models"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { onBeforeRender, onUpdate } from "./hooks"
import { getState, subscribe } from "./saveData"
import { settingsStore, nonpersistentDOMStore } from "./dom"
import { call, ObjectEntries, ObjectFromEntries, ObjectValues, ObjectKeys } from "./util"
import * as webgl from "./webgl"
import { init3DModelDebugger, renderingOptionsStore } from "./debug"
import stages from "./stages"
import { StageDefinition } from "./stages/types"
import { StageName, updatePerSecond } from "./constants"
import weapons from "./weapons"

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio * settingsStore.getState().resolutionMultiplier)
document.querySelector("div#game")!.appendChild(renderer.domElement)

// Camera
const cameraInitialPosition = [-0.5, 0.6, 0] as const
const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: cameraInitialPosition } })

let airplane: ReturnType<typeof webgl.createAirplane>
let weaponPools: ReturnType<typeof weapons[number]>[]
let enemies: Record<StageName, ReturnType<StageDefinition["createEnemyPools"]>>

/** The scene object, which contains all visible Three.js objects. */
const scene = new THREE.Scene().add(
    // Airplane
    airplane = webgl.createAirplane(renderer.domElement),

    // Contrail
    webgl.createContrail(airplane),

    // Newspapers
    webgl.createNewspaperAnimationPlayer(),

    // Stages
    // NOTE: To add a stage, create a file `src/stages/[id]_[name].ts` while running `corepack yarn start`, which runs codegen.js everytime you edit the files, and fix all type errors.
    ...ObjectEntries(stages).map(([name, { createModel }]) => {
        const obj = createModel()

        // Visible when the current stage `getState().stage` is equal to `name`
        obj.visible = getState().stage === name
        subscribe((state, prev) => { if (state.stage !== prev.stage) { obj.visible = state.stage === name } })

        return obj
    }),

    // Weapons
    // NOTE: To add a weapon, create a file `src/weapons/[name].ts` while running `corepack yarn start`, which runs codegen.js everytime you edit the files, and fix all type errors. You can also add an entry in `upgradeNames`, `basePrice` etc. in `constants.tsx` to add a new upgrade and reference the number of upgrades the player purchased by `getState().upgrades.[name]`.
    ...(weaponPools = weapons.map((weapon) => weapon(airplane))).map(({ obj }) => obj),

    // Enemies
    ...ObjectValues(enemies = ObjectFromEntries(ObjectEntries(stages).map(([k, v]) => [k, v.createEnemyPools()]))),

    // Particle systems
    await webgl.createLevelupAnimation(airplane),
)

// Postprocessing
const effectComposer = new EffectComposer(renderer)
const stageTransitionPass = webgl.createStageTransitionPass()
let selectiveBloomPass: ReturnType<typeof webgl.createSelectiveBloomPass>
{
    let renderPass: RenderPass
    for (const pass of [
        renderPass = new RenderPass(scene, camera),
        new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0),
        selectiveBloomPass = webgl.createSelectiveBloomPass(renderer, scene, camera, renderPass),
        webgl.createRainPass(renderingOptionsStore.getState().getRenderingOption("rain.blur")),
        webgl.createJammingPass(),
        stageTransitionPass.pass,
    ]) {
        effectComposer.addPass(pass)
    }
}

// Resize the canvas to fit to the window
window.addEventListener("resize", () => {
    // https://stackoverflow.com/a/20434960/10710682 and
    // https://stackoverflow.com/a/20641695/10710682
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio * settingsStore.getState().resolutionMultiplier)
    effectComposer.setSize(window.innerWidth, window.innerHeight)
    effectComposer.setPixelRatio(window.devicePixelRatio * settingsStore.getState().resolutionMultiplier)
})

// Update the renderer and effect composer when the screen resolution option is changed.
settingsStore.subscribe((state, prev) => {
    if (state.resolutionMultiplier === prev.resolutionMultiplier) { return }
    renderer.setPixelRatio(window.devicePixelRatio * state.resolutionMultiplier)
    effectComposer.setPixelRatio(window.devicePixelRatio * state.resolutionMultiplier)
})

// Update weather
onUpdate.add((t) => { if (t % updatePerSecond === 0) { getState().countdown() } })

// Update enemies
{
    const listAliveEnemies = () => ObjectValues(enemies).flatMap((v) => v.alive())
    const listDeadEnemies = () => ObjectValues(enemies).flatMap((v) => v.dead())

    onUpdate.add((t) => {
        // Spawn enemies
        enemies[getState().stage].spawn(t)

        // Move enemies
        const aliveEnemies = listAliveEnemies()
        aliveEnemies.forEach((e) => e.userData.update())

        // Animate dead enemies
        for (const body of listDeadEnemies()) {
            body.position.y -= 0.001 * body.userData.time
            body.rotateZ(0.1 * (Math.random() - 0.5)) // free fall
            body.userData.time++
            if (body.userData.time > 100) {
                body.free()
            }
        }

        // Collisions between the enemy and the player's attacks
        weaponPools.forEach((w) => w.doDamage(aliveEnemies))

        // Update the autopilot algorithm's target
        const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? undefined : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
        if (!airplane.userData.autopilotTarget || !(aliveEnemies as { position: THREE.Vector3 }[]).includes(airplane.userData.autopilotTarget) || airplane.userData.autopilotTarget.position.x < airplane.position.x) {
            airplane.userData.autopilotTarget = findMin(aliveEnemies.filter((e) => e.position.x > airplane.position.x + 0.3 && e.userData.name !== "Weather Effect UFO"), (e) => e.position.x)
        }

        // Delete enemies outside of the screen or that are dead
        for (const enemy of aliveEnemies) {
            if (enemy.position.x < -1 || enemy.userData.hp <= 0) {
                if (enemy.userData.hp <= 0) {
                    enemy.userData.onKilled()
                    getState().incrementKillCount(enemy.userData.name)
                    getState().addMoney(enemy.userData.money)
                    getState().addItems(enemy.userData.items)
                }
                enemy.free()
                weaponPools.forEach((w) => "onEnemyRemoved" in w && w.onEnemyRemoved(enemy))
            }
            enemy.userData.time++
        }
    })

    // Delete all enemies when switching to another stage
    subscribe((state, prev) => {
        if (state.stage === prev.stage && state.transcendence === prev.transcendence) { return }
        for (const enemy of listAliveEnemies()) {
            enemy.free()
            weaponPools.forEach((w) => "onEnemyRemoved" in w && w.onEnemyRemoved(enemy))
        }
        for (const enemy of listDeadEnemies()) {
            enemy.free()
        }
    })
}

// Stage transition animation
onUpdate.add(() => {
    const { stageTransitingTo } = getState()
    if (stageTransitingTo === null) { return }

    // true if going forward, false if going backward
    const forward = ObjectKeys(stages).indexOf(stageTransitingTo) >= ObjectKeys(stages).indexOf(getState().stage)

    // Gradually move the airplane and rotate the camera
    if (forward) {
        airplane.position.x += 0.01 + Math.max(0, airplane.position.x) * 0.08
        camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -0.02)
        camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.003)
        camera.position.z -= 0.01
    }

    // When the airplane went far away or the player is going backward
    if (airplane.position.x > 2 || !forward) {
        // Play the shader animation
        stageTransitionPass.play(() => {
            airplane.position.x = 0
            camera.position.set(...cameraInitialPosition)
        })
    }
})

// Main game loop:
// 1. Repeat a number of times proportional to the time elapsed since the previous frame:
//    1. `onUpdate` event
// 2. if not `powerSaveMode`:
//    1. `onBeforeRender` event
//    2. Move the camera
//    3. Preprocess the selective bloom pass
//    4. render()
{
    const isPaused = init3DModelDebugger(camera, renderer, scene)

    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        const update = !isPaused()
        const render = !nonpersistentDOMStore.getState().powerSaveMode

        // FPS counter
        nonpersistentDOMStore.getState().updateFPSCounter()

        if (!update) {
            prevTime.update = Date.now()
        } else {
            // Update
            const numUpdates = Math.floor((time - prevTime.update) / (1000 / updatePerSecond))
            prevTime.update += numUpdates * (1000 / updatePerSecond)
            for (let _ = 0; _ < numUpdates; _++) {
                onUpdate.forEach((f) => f(updateCount))  // Fire the onUpdate hook
                updateCount++
            }
        }

        if (!render) {
            prevTime.render = Date.now()
        } else {
            // Fire the onBeforeRender hook
            const deltaTime = time - prevTime.render
            prevTime.render = time
            if (render) { onBeforeRender.forEach((f) => f(time, deltaTime, camera)) }
        }

        if (update && render) {
            // Move and rotate the camera
            if (getState().stageTransitingTo === null) {
                camera.position.z = airplane.position.z
                camera.lookAt(getState().stage === "Mothership" ? new THREE.Vector3(0.5, 0, airplane.position.z) : new THREE.Vector3(0, 0, airplane.position.z))
                camera.rotation.x += airplane.userData.velocity.x * 0.05
                camera.rotation.y -= Math.abs(airplane.userData.velocity.y * 0.02)
            }
        }

        if (render) {
            // Preprocess the selective bloom pass
            selectiveBloomPass.preprocess()

            // Render the scene to the canvas
            effectComposer.render()
        }
    })
}

// The first tutorial message
getState().addTutorial("wasd")

// Without this, the code that awaits between the instantiation of a Three.js object and addEventlistener("resize",) goes wrong if the window is resized while awaiting.
window.dispatchEvent(new UIEvent("resize"))

loaded()

// Disable right-clicking
window.addEventListener("contextmenu", (ev) => { ev.preventDefault() }, { capture: true })

// Play the BGM
{
    const audio = new Audio()
    audio.src = "./audio/Anttis instrumentals - Coming back home instrumental.mp3"  // Download the audio file after the game is started to improve startup time
    audio.loop = true
    const audioContext = new AudioContext()
    let fadeInGain: GainNode
    let volumeGain: GainNode
    audioContext.createMediaElementSource(audio)
        .connect(fadeInGain = new GainNode(audioContext, { gain: 0 }))
        .connect(volumeGain = new GainNode(audioContext, { gain: settingsStore.getState().bgmVolume }))
        .connect(audioContext.destination)

    let scheduled = false
    const playAudio = () => {
        audio.play()
        if (audioContext.state === "suspended") {
            audioContext.resume()
        }
        if (!scheduled) {
            scheduled = true
            // Fade in
            const { currentTime } = audioContext
            fadeInGain.gain.cancelScheduledValues(currentTime)
            fadeInGain.gain.setValueAtTime(fadeInGain.gain.value, currentTime)
            fadeInGain.gain.linearRampToValueAtTime(1, currentTime + 8)
        }
    }
    playAudio()
    settingsStore.subscribe((state, prev) => {
        if (state.bgmVolume === prev.bgmVolume) { return }
        volumeGain.gain.value = state.bgmVolume
    })
    window.addEventListener("click", playAudio)  // We need this because of the autoplay policy https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
    window.addEventListener("keydown", playAudio)
    audio.addEventListener("load", () => { playAudio() })
}

document.querySelector("div#game")!.style.opacity = "1"
