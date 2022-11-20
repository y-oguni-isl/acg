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

import 'typed-query-selector'
import * as Stats from "stats.js"
import * as THREE from 'three'
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { onBeforeRender, onPreprocess, onUpdate } from './hooks'
import { getAtk, getState, isVerticalMoveUnlocked, subscribe } from './saveData'
import { ephemeralDOMStore } from './dom'
import { call, entries, fromEntries, PromiseAll } from './util'
import * as webgl from "./webgl"
import { getRenderingOption, init3DModelDebugger } from './debug'
import stages from "./stages"
import { updatePerSecond, xMax, xMin, yMax, yMin } from './constants'

/** The scene object, that contains all visible Three.js objects. */
const scene = new THREE.Scene()

/** An utility function to add the `obj` to the `scene`. */
const show = <T extends Omit<THREE.Object3D, "userData">>(obj: T): T => { scene.add(obj as any as THREE.Object3D); return obj }

// Airplane
const airplane = show(await webgl.createAirplane())

// Contrail and laser
scene.add(webgl.createContrail(airplane), webgl.createLaser(airplane))

// Stages
for (const [name, stage] of entries(stages)) {
    const obj = show(stage.createModel())
    obj.visible = getState().stage === name
    subscribe((state, prev) => { if (state.stage !== prev.stage) { obj.visible = state.stage === name } })
}

// Camera
const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: [-0.5, 0.6, 0] } })

// Enemies
{
    // Parallel download
    const pools = await PromiseAll({
        hammers: webgl.createHammerPool(airplane).then(show),
        enemies: PromiseAll(fromEntries(entries(stages)
            .map(([k, v]) => [
                k,
                v.createEnemyPools().then((m) => {
                    for (const [_, v] of entries(m)) {
                        if (v instanceof THREE.Object3D) {
                            show(v)
                        }
                    }
                    return m
                }),
            ]))),
    })

    const enemiesAlive = entries(pools.enemies).flatMap(([k, v]) => v.weatherAlive ? [v.alive, v.weatherAlive] : [v.alive])
    const enemiesDead = entries(pools.enemies).flatMap(([k, v]) => v.weatherDead ? [v.dead, v.weatherDead] : [v.dead])

    // hit effect
    const laserHitEffects = show(new webgl.ObjectPool(webgl.enableSelectiveBloom(new THREE.Mesh(new THREE.IcosahedronGeometry(0.006), new THREE.MeshBasicMaterial({ color: 0xff66ff })))))
    const laserHitEffectsSource = new WeakMap<ReturnType<typeof pools.enemies.Earth.alive.allocate>, ReturnType<typeof laserHitEffects.allocate>>()

    // Delete everything when switching to another stage
    subscribe((state, prev) => {
        if (state.stage === prev.stage && state.transcendence === prev.transcendence) { return }
        for (const enemy of enemiesAlive.flatMap((o) => o.children)) {
            laserHitEffectsSource.get(enemy)?.free()
        }
        for (const enemy of [...enemiesAlive.flatMap((o) => o.children), ...enemiesDead.flatMap((o) => o.children)]) {
            enemy.free()
        }
    })

    // The enemy that the autopilot algorithm is currently targeting.
    let autopilotTarget: ReturnType<typeof pools.enemies.Earth.alive.allocate> | null = null

    // Keyboard events
    const pressedKeys = new Set<string>()
    window.addEventListener("keydown", (ev) => { pressedKeys.add(ev.code) })
    window.addEventListener("keyup", (ev) => { pressedKeys.delete(ev.code) })
    window.addEventListener("blur", () => { pressedKeys.clear() })

    // Main game loop
    onUpdate.add((t) => {
        // Spawn enemies
        pools.enemies[getState().stage].spawn(t)

        for (const enemy of enemiesAlive.flatMap((o) => o.children)) {
            // Move enemies
            enemy.userData.update()

            // Collisions between the enemy and the player's attacks
            for (const hammer of pools.hammers?.children ?? []) {
                if (hammer.position.distanceTo(enemy.position) < enemy.userData.radius + 0.02) {
                    enemy.userData.hp -= getAtk().Hammer ?? 0
                    hammer.free()
                }
            }
            if (Math.abs(enemy.position.z - airplane.position.z) < enemy.userData.radius && Math.abs(enemy.position.y - airplane.position.y) < enemy.userData.radius && enemy.position.x > airplane.position.x) {
                // Show a hit effect
                if (!laserHitEffectsSource.has(enemy)) {
                    laserHitEffectsSource.set(enemy, laserHitEffects.allocate())
                }
                laserHitEffectsSource.get(enemy)!.position.copy(enemy.position).setZ(airplane.position.z)

                // Damage
                enemy.userData.hp -= getAtk().Laser
                ephemeralDOMStore.getState().setEnemyStatus({ hp: enemy.userData.hp, name: enemy.userData.name, money: enemy.userData.money })
            } else { // No collisions
                if (laserHitEffectsSource.has(enemy)) {
                    // Delete a hit effect
                    if (laserHitEffectsSource.has(enemy)) {
                        laserHitEffectsSource.get(enemy)!.free()
                        laserHitEffectsSource.delete(enemy)
                    }
                }
            }

            // Delete the enemy if it is outside screen or is killed
            if (enemy.position.x < -1 || enemy.userData.hp <= 0) {
                if (enemy.userData.hp <= 0) {
                    enemy.userData.onKilled()
                    getState().addMoney(enemy.userData.money)
                }
                enemy.free()
                laserHitEffectsSource.get(enemy)?.free()
                laserHitEffectsSource.delete(enemy)
            }
            enemy.userData.time++
        }

        // Animate dead enemies
        for (const body of enemiesDead.flatMap((o) => o.children)) {
            body.position.y -= 0.001 * body.userData.time
            body.rotateZ(0.1 * (Math.random() - 0.5)) // free fall
            body.userData.time++
            if (body.userData.time > 100) {
                body.free()
            }
        }

        if (getState().stageTransitingTo !== null) {
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
        } else {
            // Move the airplane by WASD keys
            if (pressedKeys.has("KeyD") && !pressedKeys.has("KeyA")) { airplane.userData.velocity.x = Math.min(1, Math.max(0, airplane.userData.velocity.x) + 0.3) }
            if (pressedKeys.has("KeyA") && !pressedKeys.has("KeyD")) { airplane.userData.velocity.x = Math.max(-1, Math.min(0, airplane.userData.velocity.x) - 0.3) }
            if (pressedKeys.has("KeyW") && !pressedKeys.has("KeyS")) { airplane.userData.velocity.y = Math.min(1, Math.max(0, airplane.userData.velocity.y) + 0.3) }
            if (pressedKeys.has("KeyS") && !pressedKeys.has("KeyW")) { airplane.userData.velocity.y = Math.max(-1, Math.min(0, airplane.userData.velocity.y) - 0.3) }
            if (pressedKeys.has("Space") && isVerticalMoveUnlocked()) {
                airplane.position.y = Math.min(0.5, airplane.position.y + 0.005)
            } else {
                airplane.position.y = Math.max(0, airplane.position.y - 0.005)
            }

            if (pressedKeys.size === 0 ||
                pressedKeys.has("KeyA") && pressedKeys.has("KeyD") ||
                pressedKeys.has("KeyW") && pressedKeys.has("KeyS")) {
                airplane.userData.velocity.multiplyScalar(0.8)
            }
            if (airplane.userData.velocity.length() > 1) { airplane.userData.velocity.normalize() }
            airplane.position.setZ(Math.min(xMax, Math.max(xMin, airplane.position.z + airplane.userData.velocity.x * 0.015)))
            airplane.position.setX(Math.min(yMax, Math.max(yMin, airplane.position.x + airplane.userData.velocity.y * 0.01)))

            // Autopilot
            if ((getState().getWeather()?.enabled ? getState().upgrades.Autopilot - 5 : getState().upgrades.Autopilot) > 0 && pressedKeys.size === 0) { // TODO: add a switch to disable autopilot
                const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? null : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
                if (!autopilotTarget || !enemiesAlive.flatMap((o) => o.children).includes(autopilotTarget) || autopilotTarget.position.x < airplane.position.x) {
                    autopilotTarget = findMin(enemiesAlive.flatMap((o) => o.children).filter((e) => e.position.x > airplane.position.x + 0.3 && e.userData.name !== "Weather Effect UFO"), (e) => e.position.x)
                }
                if (autopilotTarget) {
                    const autopilotSpeed = 0.1 * getState().upgrades.Autopilot
                    if (Math.abs(autopilotTarget.position.z - airplane.position.z) > 0.02) {
                        airplane.userData.velocity.x = Math.min(1.0, Math.max(-1.0, airplane.userData.velocity.x + Math.sign(autopilotTarget.position.z - airplane.position.z) * autopilotSpeed))
                    }
                }
            }
        }

        // Weather
        getState().countdown()
    })
}

// Update the loading message
ephemeralDOMStore.getState().setLoadingMessage("loadingModels", `Loading models...`)
await new Promise((resolve) => setTimeout(resolve, 0)) // Let the browser to render the changes in the DOM

// Download the 3D model for newspaper after every other 3D models is downloaded because it should not be prioritized.
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
    if (getRenderingOption("selective unrealbloom")) { effectComposer.addPass(webgl.createSelectiveBloomPass(renderer, camera, renderPass)) }
    if (getRenderingOption("rain")) { effectComposer.addPass(webgl.createRainPass(camera, getRenderingOption("rain.blur"))) }
    effectComposer.addPass(stageTransitionPass.pass)
}

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
{
    const isPaused = init3DModelDebugger(camera, renderer, scene)

    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        // Rotate the camera
        camera.lookAt(getState().stage === "Final" ? new THREE.Vector3(0.5, 0, 0) : new THREE.Vector3(0, 0, 0))

        // FPS monitor
        stats?.update()

        if (isPaused() || getState().transcending) {  // if the game is paused
            prevTime.update = prevTime.render = Date.now()  // do nothing and update the prevTimes
        } else {
            // Fire the onUpdate hook
            const numUpdates = Math.floor((time - prevTime.update) / (1000 / updatePerSecond))
            prevTime.update += numUpdates * (1000 / updatePerSecond)
            for (let i = 0; i < numUpdates; i++) {
                onUpdate.forEach((f) => f(updateCount))
                updateCount++
            }

            // Fire the onBeforeRender hook
            const deltaTime = time - prevTime.render
            prevTime.render = time
            onBeforeRender.forEach((f) => f(time, deltaTime))
        }

        // Fire the onPreprocess hook
        onPreprocess.forEach((f) => f())

        // Render the scene to the canvas
        effectComposer.render()
    })
}

// Audio
const playAudio = () => {
    const audio = document.querySelector("audio#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)
playAudio()

// Clear the loading message
ephemeralDOMStore.getState().removeLoadingMessage("loadingModels")

getState().addTutorial("wasd")

window.addEventListener("keyup", (ev) => {
    if (["KeyW", "KeyS", "KeyA", "KeyD"].includes(ev.code) &&
        getState().availableTutorials.has("wasd")) {
        getState().completeTutorial("wasd")
    }
})

// Without this, code that awaits between the instantiation of an Three.js object and addEventlistener("resize",) goes wrong if the window is resized while awaiting.
window.dispatchEvent(new UIEvent("resize"))
