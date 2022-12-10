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

import { setAutoFreeze } from "immer"
setAutoFreeze(false) // Disable auto freezing because it'll make immer 2.7x faster https://immerjs.github.io/immer/performance/#pre-freeze-data

import "typed-query-selector"                  // Replaces document.querySelector(All)'s type with better ones.
import "core-js/proposals/map-upsert-stage-2"  // Adds Map.emplace() https://github.com/tc39/proposal-upsert
import "core-js/proposals/set-methods"         // Adds Set.intersection(), Set.union(), Set.difference(), etc. https://github.com/tc39/proposal-set-methods
import { loaded } from "./models"
import Stats from "stats.js"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { onBeforeRender, onCollisionDetection, onEnemyRemoved, onPreprocess, onUpdate } from "./hooks"
import { getState, subscribe } from "./saveData"
import { domStore, ephemeralDOMStore } from "./dom"
import { call, ObjectEntries, ObjectFromEntries, ObjectValues, ObjectKeys } from "./util"
import * as webgl from "./webgl"
import { getRenderingOption, init3DModelDebugger } from "./debug"
import stages from "./stages"
import { updatePerSecond } from "./constants"
import weapons from "./weapons"

setAutoFreeze(false) // Disable auto freeze because it'll make immer 2.7x faster https://immerjs.github.io/immer/performance/#pre-freeze-data

/** The scene object, which contains all visible Three.js objects. */
const scene = new THREE.Scene()

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio * domStore.getState().resolutionMultiplier)
document.body.appendChild(renderer.domElement)

/** The utility function to add the `obj` to the `scene`. */
const show = <T extends Omit<THREE.Object3D, "userData">>(obj: T): T => { scene.add(obj as any as THREE.Object3D); return obj }

// Airplane
const airplane = show(webgl.createAirplane(renderer.domElement))

// Contrail
scene.add(webgl.createContrail(airplane))

// Stages
// NOTE: To add a stage, create a file `src/stages/[id]_[name].ts` while running `corepack yarn start`, which runs codegen.js everytime you edit the files, and fix all type errors.
for (const [name, stage] of ObjectEntries(stages)) {
    const obj = show(stage.createModel())
    obj.visible = getState().stage === name
    subscribe((state, prev) => { if (state.stage !== prev.stage) { obj.visible = state.stage === name } })
}

// Camera
const cameraInitialPosition = [-0.5, 0.6, 0] as const
const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: cameraInitialPosition } })

// Weapons
// NOTE: To add a weapon, create a file `src/weapons/[name].ts` while running `corepack yarn start`, which runs codegen.js everytime you edit the files, and fix all type errors. You can also add an entry in `upgradeNames`, `basePrice` etc. in `constants.tsx` to add a new upgrade and reference the number of upgrades the player purchased by `getState().upgrades.[name]`.
weapons.map((weapon) => show(weapon(airplane)))

// Enemies
const enemies = ObjectFromEntries(ObjectEntries(stages).map(([k, v]) => [k, show(v.createEnemyPools())]))

const listAliveEnemies = () => ObjectValues(enemies).flatMap((v) => v.weatherAlive ? [...v.alive.children, ...v.weatherAlive.children] : [...v.alive.children])
const listDeadEnemies = () => ObjectValues(enemies).flatMap((v) => v.weatherDead ? [...v.dead.children, ...v.weatherDead.children] : [...v.dead.children])

// Delete all enemies when switching to another stage
subscribe((state, prev) => {
    if (state.stage === prev.stage && state.transcendence === prev.transcendence) { return }
    for (const enemy of listAliveEnemies()) {
        enemy.free()
        onEnemyRemoved.forEach((f) => f(enemy))
    }
    for (const enemy of listDeadEnemies()) {
        enemy.free()
    }
})

// Download the 3D model for newspapers after every other 3D models is downloaded because it should not be prioritized.
show(webgl.createNewspaperAnimationPlayer())

// Post processing
const effectComposer = new EffectComposer(renderer)
const stageTransitionPass = webgl.createStageTransitionPass()
{
    const renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    if (getRenderingOption("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }
    if (getRenderingOption("selective unrealbloom")) { effectComposer.addPass(webgl.createSelectiveBloomPass(renderer, scene, camera, renderPass)) }
    if (getRenderingOption("rain")) { effectComposer.addPass(webgl.createRainPass(getRenderingOption("rain.blur"))) }
    if (getRenderingOption("jamming")) { effectComposer.addPass(webgl.createJammingPass()) }
    effectComposer.addPass(stageTransitionPass.pass)
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

// Resize the canvas to fit to the window
window.addEventListener("resize", () => {
    // https://stackoverflow.com/a/20434960/10710682 and
    // https://stackoverflow.com/a/20641695/10710682
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio * domStore.getState().resolutionMultiplier)
    effectComposer.setSize(window.innerWidth, window.innerHeight)
    effectComposer.setPixelRatio(window.devicePixelRatio * domStore.getState().resolutionMultiplier)
})

// Update the renderer and effect composer when the screen resolution option is changed.
domStore.subscribe((state, prev) => {
    if (state.resolutionMultiplier === prev.resolutionMultiplier) { return }
    renderer.setPixelRatio(window.devicePixelRatio * state.resolutionMultiplier)
    effectComposer.setPixelRatio(window.devicePixelRatio * state.resolutionMultiplier)
})

// FPS monitor https://github.com/mrdoob/stats.js/
const stats = import.meta.env.DEV ? new Stats() : null
if (stats) {
    Object.assign(stats.dom.style, { bottom: "50px", top: "" })
    document.body.append(stats.dom)
}

// Main game loop:
// 1. Repeat a number of times proportional to the time elapsed since the previous frame:
//    1. Spawn enemies
//    2. Move enemies
//    3. `onUpdate` event
//    4. `onCollisionDetection` event
//    5. Delete enemies
//    6. Animate dead enemies
//    7. Update the autopilot algorithm
//    8. Tick the weather system
// 2. if not `powerSaveMode`:
//    1. `onBeforeRender` event
//    2. Move camera
//    3. `onPreprocess` event
//    4. render()
{
    const isPaused = init3DModelDebugger(camera, renderer, scene)

    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        const update = !getState().transcending && !isPaused()
        const render = !getState().transcending && !ephemeralDOMStore.getState().powerSaveMode

        // FPS monitor
        stats?.update()

        if (!update) {
            prevTime.update = Date.now()
        } else {
            // Update
            const numUpdates = Math.floor((time - prevTime.update) / (1000 / updatePerSecond))
            prevTime.update += numUpdates * (1000 / updatePerSecond)
            for (let _ = 0; _ < numUpdates; _++) {
                // Spawn enemies
                enemies[getState().stage].spawn(updateCount)

                // Move enemies
                listAliveEnemies().forEach((e) => e.userData.update())

                // Fire the onUpdate hook
                onUpdate.forEach((f) => f(updateCount))

                // Collisions between the enemy and the player's attacks
                {
                    const aliveEnemies = listAliveEnemies()
                    onCollisionDetection.forEach((f) => f(aliveEnemies))
                }

                // Delete the enemy if it is outside screen or is killed
                for (const enemy of listAliveEnemies()) {
                    if (enemy.position.x < -1 || enemy.userData.hp <= 0) {
                        if (enemy.userData.hp <= 0) {
                            enemy.userData.onKilled()
                            getState().incrementKillCount(enemy.userData.name)
                            getState().addMoney(enemy.userData.money)
                            getState().addItems(enemy.userData.items)
                        }
                        enemy.free()
                        onEnemyRemoved.forEach((f) => f(enemy))
                    }
                    enemy.userData.time++
                }

                // Animate dead enemies
                for (const body of listDeadEnemies()) {
                    body.position.y -= 0.001 * body.userData.time
                    body.rotateZ(0.1 * (Math.random() - 0.5)) // free fall
                    body.userData.time++
                    if (body.userData.time > 100) {
                        body.free()
                    }
                }

                // Update the autopilot algorithm's target
                const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? undefined : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
                if (!airplane.userData.autopilotTarget || !(listAliveEnemies() as { position: THREE.Vector3 }[]).includes(airplane.userData.autopilotTarget) || airplane.userData.autopilotTarget.position.x < airplane.position.x) {
                    airplane.userData.autopilotTarget = findMin(listAliveEnemies().filter((e) => e.position.x > airplane.position.x + 0.3 && e.userData.name !== "Weather Effect UFO"), (e) => e.position.x)
                }

                // Weather
                getState().countdown()

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
            // Fire the onPreprocess hook
            onPreprocess.forEach((f) => f())

            // Render the scene to the canvas
            effectComposer.render()
        }
    })
}

// Play the BGM
const playAudio = () => {
    const audio = document.querySelector("audio#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)  // We need this because of the autoplay policy https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
window.addEventListener("keydown", playAudio)
playAudio()

// The first tutorial message
getState().addTutorial("wasd")

// Without this, the code that awaits between the instantiation of a Three.js object and addEventlistener("resize",) goes wrong if the window is resized while awaiting.
window.dispatchEvent(new UIEvent("resize"))

loaded()
