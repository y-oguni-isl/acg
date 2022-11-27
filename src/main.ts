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

import "typed-query-selector"
import "core-js/proposals/map-upsert-stage-2"
import "core-js/proposals/set-methods"
import Stats from "stats.js"
import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { onBeforeRender, onCollisionDetection, onEnemyRemoved, onPreprocess, onUpdate } from "./hooks"
import { getState, subscribe } from "./saveData"
import { ephemeralDOMStore } from "./dom"
import { call, ObjectEntries, fromEntries, PromiseAll, ObjectValues } from "./util"
import * as webgl from "./webgl"
import { getRenderingOption, init3DModelDebugger } from "./debug"
import stages from "./stages"
import { updatePerSecond } from "./constants"
import weapons from "./weapons"
import { setAutoFreeze } from "immer"

setAutoFreeze(false) // Disable auto freeze because it'll make immer 2.7x faster https://immerjs.github.io/immer/performance/#pre-freeze-data

/** The scene object, that contains all visible Three.js objects. */
const scene = new THREE.Scene()

/** The utility function to add the `obj` to the `scene`. */
const show = <T extends Omit<THREE.Object3D, "userData">>(obj: T): T => { scene.add(obj as any as THREE.Object3D); return obj }

// Airplane
const airplane = show(await webgl.createAirplane())

// Contrail
scene.add(webgl.createContrail(airplane))

// Stages
for (const [name, stage] of ObjectEntries(stages)) {
    const obj = show(stage.createModel())
    obj.visible = getState().stage === name
    subscribe((state, prev) => { if (state.stage !== prev.stage) { obj.visible = state.stage === name } })
}

// Camera
const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: [-0.5, 0.6, 0] } })

// Parallel download
const { enemies } = await PromiseAll({
    enemies: PromiseAll(fromEntries(ObjectEntries(stages)
        .map(([k, v]) => [
            k,
            v.createEnemyPools().then((m) => {
                for (const v of ObjectValues(m)) {
                    if (v instanceof THREE.Object3D) {
                        show(v)
                    }
                }
                return m
            }),
        ]))),
    weapons: Promise.all(weapons.map((weapon) => weapon(airplane).then(show))),
})

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

// Update the loading message
ephemeralDOMStore.getState().setLoadingMessage("loadingModels", `Loading models...`)
await new Promise((resolve) => setTimeout(resolve, 0)) // Let the browser to render the changes in the DOM

// Download the 3D model for newspapers after every other 3D models is downloaded because it should not be prioritized.
show(webgl.createNewspaperAnimationPlayer())

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Post processing
const effectComposer = new EffectComposer(renderer)
const stageTransitionPass = webgl.createStageTransitionPass()
{
    const renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    if (getRenderingOption("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }
    if (getRenderingOption("selective unrealbloom")) { effectComposer.addPass(webgl.createSelectiveBloomPass(renderer, scene, camera, renderPass)) }
    if (getRenderingOption("rain")) { effectComposer.addPass(webgl.createRainPass(camera, getRenderingOption("rain.blur"))) }
    effectComposer.addPass(stageTransitionPass.pass)
}

// Stage transition animation
onUpdate.add(() => {
    if (getState().stageTransitingTo === null) { return }

    // Play the animation to move to another stage
    airplane.position.x += 0.01 + Math.max(0, airplane.position.x) * 0.08
    scene.rotateY(0.02)
    scene.rotateZ(-0.003)
    if (airplane.position.x > 2) {
        stageTransitionPass.play(() => {
            airplane.position.x = 0
            scene.rotation.set(0, 0, 0)
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
    effectComposer.setSize(window.innerWidth, window.innerHeight)
})

// FPS monitor
const stats = import.meta.env.DEV ? new Stats() : null
if (stats) {
    stats.showPanel(0)
    stats.dom.style.bottom = "50px"
    stats.dom.style.top = ""
    document.body.append(stats.dom)
}

// Main game loop
{
    const isPaused = init3DModelDebugger(camera, renderer, scene)

    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    let renderCount = 0
    renderer.setAnimationLoop((time: number): void => {
        const render = !ephemeralDOMStore.getState().powerSaveMode // || renderCount % 120 === 0
        renderCount++

        // FPS monitor
        stats?.update()

        if (isPaused() || getState().transcending) {  // if the game is paused
            prevTime.update = prevTime.render = Date.now()  // do nothing and update the prevTimes
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

            // Fire the onBeforeRender hook
            const deltaTime = time - prevTime.render
            prevTime.render = time
            if (render) { onBeforeRender.forEach((f) => f(time, deltaTime)) }

            // Move and rotate the camera
            if (render) {
                camera.position.z = airplane.position.z
                camera.lookAt(getState().stage === "Final" ? new THREE.Vector3(0.5, 0, airplane.position.z) : new THREE.Vector3(0, 0, airplane.position.z))
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

TODO: Audio
const playAudio = () => {
    const audio = document.querySelector("audio#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)
window.addEventListener("keydown", playAudio)
playAudio()

// Clear the loading message
ephemeralDOMStore.getState().removeLoadingMessage("loadingModels")

// The first tutorial message
getState().addTutorial("wasd")
window.addEventListener("keyup", (ev) => {
    if (["KeyW", "KeyS", "KeyA", "KeyD"].includes(ev.code) &&
        getState().availableTutorials.wasd) {
        getState().completeTutorial("wasd")
    }
})

// Without this, code that awaits between the instantiation of a Three.js object and addEventlistener("resize",) goes wrong if the window is resized while awaiting.
window.dispatchEvent(new UIEvent("resize"))
