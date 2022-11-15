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
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"
import { onBeforeRender, onPreprocess, onUpdate, updatePerSecond } from './hooks'
import { bounties, enemyNames, getState, subscribe } from './saveData'
import { ephemeralDOMStore } from './dom'
import { call } from './util'
import * as webgl from "./webgl"
import createStageTransitionPass from './webgl/createStageTransitionPass'
import { getRenderingOption, init3DModelDebugger } from './debug'

const scene = new THREE.Scene()
const show = <T extends THREE.Object3D>(obj: T, renderingOptionLabel?: string): T => {
    if (renderingOptionLabel && !getRenderingOption(renderingOptionLabel)) { return obj }
    scene.add(obj)
    return obj
}

// Airplane
const airplane = show(!getRenderingOption("airplane") ? new THREE.Object3D() : await webgl.loadGLTF("models/low-poly_airplane.glb", 0.05))
let airplaneVelocity = new THREE.Vector2(0.0, 0.0)
{
    const rotationNoise = new SimplexNoise()
    onBeforeRender.add((time) => {
        airplane.rotation.set(
            airplaneVelocity.x * 0.3 + rotationNoise.noise(0, time * 0.0003) * (4 / 180 * Math.PI),
            Math.PI * 0.5 + rotationNoise.noise(1, time * 0.0003) * (4 / 180 * Math.PI),
            rotationNoise.noise(2, time * 0.0003) * (4 / 180 * Math.PI),
        )
    })
}
const xMax = 0.5   // z
const xMin = -0.5  // z
const yMax = 0.3   // x
const yMin = -0.3  // x

if (getRenderingOption("contrail")) { show(webgl.createContrail(airplane)) }
if (getRenderingOption("skybox")) { show(webgl.createStages()) }
if (getRenderingOption("laser")) { show(webgl.laser(airplane)) }
if (getRenderingOption("axis")) { show(new THREE.AxesHelper()) }

// Camera
const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: [-0.5, 0.6, 0] } })

// News
{
    const startNewspaperAnimation = !getRenderingOption("newspaper") ? null : webgl.newsAnimation(scene)
    subscribe((s, prev) => {
        if (s.availableNews === prev.availableNews) { return }
        const addedNews = [...s.availableNews].filter((n) => !prev.availableNews.has(n))[0]
        if (!addedNews) { return }
        startNewspaperAnimation?.then((play) => play(addedNews))
    })
}

// Enemies
{
    type Enemy = {
        name: typeof enemyNames[number]
        time: number
        hp: number
        laserHitEffect: ReturnType<typeof laserHitEffects.allocate> | null
        update: () => void
        onKilled: () => void
    }

    // Parallel download
    const [
        hammers,
        birds,
        ufos,
        weatherEffectUfos,
        deadBirds,
        deadUfos,
        deadWeatherEffectUfos,
    ] = await Promise.all([
        !getRenderingOption("hammer") ? null : webgl.createHammerPool(airplane).then(show),
        webgl.createBirdPool(true).then((m) => show(m.onAllocate((copy): Enemy => ({
            name: "Bird",
            time: 0,
            hp: 15 * (1 + Math.random()),
            laserHitEffect: null,
            update: () => { copy.position.x -= 0.01 },
            onKilled: () => { deadBirds.allocate().position.copy(copy.position) },
        })), "birds")),
        webgl.createUFOPool().then((m) => show(m.onAllocate((copy): Enemy => ({
            name: "UFO",
            time: 0,
            hp: 300 * (1 + Math.random()),
            laserHitEffect: null,
            update: () => {
                if (copy.userData.time % 80 <= 3) { // before teleportation
                    copy.scale.copy(copy.getOriginalScale().multiply(new THREE.Vector3(1, 1 - (copy.userData.time % 80) / 3, 1)))
                } else if (copy.userData.time % 80 === 3 + 1) {  // teleportation
                    copy.position.x -= 0.35 + Math.random() * 0.2
                    copy.position.z = Math.max(xMin, Math.min(xMax, copy.position.z + (Math.random() - 0.5) * 0.2))
                } else if (copy.userData.time % 80 <= 3 + 1 + 3) { // after teleportation
                    copy.scale.copy(copy.getOriginalScale().multiply(new THREE.Vector3(1, (copy.userData.time % 80 - (3 + 1)) / 3, 1)))
                }
            },
            onKilled: () => { ufos.allocate().position.copy(copy.position) },
        })), "UFO")),
        webgl.createUFOPool().then((m) => show(m.onAllocate((copy): Enemy => ({
            name: "Weather Effect UFO",
            time: 0,
            hp: 1500,
            laserHitEffect: null,
            update: () => { },  // this enemy doesn't move
            onKilled: () => {
                deadWeatherEffectUfos.allocate().position.copy(copy.position)

                getState().stopWeatherEffect()
                getState().completeTutorial("weatherEffect")
            },
        })), "weatherEffectUFO")),
        webgl.createBirdPool(false).then((m) => show(m.onAllocate(() => ({ time: 0 })), "deadBirds")),
        webgl.createUFOPool().then((m) => show(m.onAllocate(() => ({ time: 0 })), "deadUFO")),
        webgl.createUFOPool().then((m) => show(m.onAllocate(() => ({ time: 0 })), "deadWeatherEffectUFO")),
    ])

    const enemiesAlive = [birds, ufos, weatherEffectUfos]
    const enemiesDead = [deadBirds, deadUfos, deadWeatherEffectUfos]

    // hit effect
    const laserHitEffects = show(new webgl.ObjectPool(webgl.enableSelectiveBloom(new THREE.Mesh(new THREE.IcosahedronGeometry(0.006), new THREE.MeshBasicMaterial({ color: 0xff66ff })))), "hitEffects")

    // Delete everything when switching to another stage
    subscribe((state, prev) => {
        if (state.stage === prev.stage) { return }
        for (const obj of [...enemiesAlive.flatMap((o) => o.children), ...enemiesDead.flatMap((o) => o.children)]) {
            obj.free()
        }
    })

    // The enemy that the autopilot algorithm is currently targeting.
    let autopilotTarget: ReturnType<typeof birds.allocate> | null = null

    // Keyboard events
    const pressedKeys = new Set<string>()
    window.addEventListener("keydown", (ev) => { pressedKeys.add(ev.code) })
    window.addEventListener("keyup", (ev) => { pressedKeys.delete(ev.code) })
    window.addEventListener("blur", () => { pressedKeys.clear() })

    // Main game loop
    onUpdate.add((t) => {
        // Spawn enemies
        if (getState().stage === 0 && t % 5 === 0) {
            birds.allocate().position.set(2, 0, ((t * 0.06) % 1) * (xMax - xMin) + xMin)
        }
        if (getState().stage === 1 && t % 31 === 0 && getState().availableNews.has("aliensComing")) {
            ufos.allocate().position.set(2, 0, ((t * 0.06) % 1) * (xMax - xMin) + xMin)
        }
        if (getState().stage === 0 && getState().getWeather()?.enabled && weatherEffectUfos.children.length === 0) {
            weatherEffectUfos.allocate().position.set(1, 0, Math.random() * (xMax - xMin) + xMin)
        }

        for (const enemy of enemiesAlive.flatMap((o) => o.children)) {
            // Move enemies
            enemy.userData.update()

            // Collisions between the enemy and the player's attacks
            for (const hammer of hammers?.children ?? []) {
                if (hammer.position.distanceTo(enemy.position) < 0.05) {
                    enemy.userData.hp -= 600
                    hammer.free()
                }
            }
            if (Math.abs(enemy.position.z - airplane.position.z) < 0.03 && enemy.position.x > airplane.position.x) {
                // Show a hit effect
                if (!enemy.userData.laserHitEffect) {
                    enemy.userData.laserHitEffect = laserHitEffects.allocate()
                }
                enemy.userData.laserHitEffect.position.copy(enemy.position).setZ(airplane.position.z)

                // Damage
                enemy.userData.hp -= getState().upgrades.Laser + 1
                ephemeralDOMStore.getState().setEnemyStatus({ hp: enemy.userData.hp, name: enemy.userData.name })
            } else { // No collisions
                if (enemy.userData.laserHitEffect) {
                    // Delete a hit effect
                    enemy.userData.laserHitEffect.free()
                    enemy.userData.laserHitEffect = null
                }
            }

            // Delete the enemy if it is outside screen or is killed
            if (enemy.position.x < -1 || enemy.userData.hp <= 0) {
                if (enemy.userData.hp <= 0) {
                    enemy.userData.onKilled()
                    getState().addMoney(bounties[enemy.userData.name])
                }
                enemy.free()
                enemy.userData.laserHitEffect?.free()
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
                    camera.lookAt(new THREE.Vector3(0, 0, 0))
                })
            }
        } else {
            // Move the airplane by WASD keys
            if (pressedKeys.has("KeyD")) { airplaneVelocity.x = Math.min(1, Math.max(0, airplaneVelocity.x) + 0.3) }
            if (pressedKeys.has("KeyA")) { airplaneVelocity.x = Math.max(-1, Math.min(0, airplaneVelocity.x) - 0.3) }
            if (pressedKeys.has("KeyW")) { airplaneVelocity.y = Math.min(1, Math.max(0, airplaneVelocity.y) + 0.3) }
            if (pressedKeys.has("KeyS")) { airplaneVelocity.y = Math.max(-1, Math.min(0, airplaneVelocity.y) - 0.3) }
            if (pressedKeys.size === 0) { airplaneVelocity.multiplyScalar(0.5) }
            if (airplaneVelocity.length() > 1) { airplaneVelocity.normalize() }
            airplane.position.setZ(Math.min(xMax, Math.max(xMin, airplane.position.z + airplaneVelocity.x * 0.015)))
            airplane.position.setX(Math.min(yMax, Math.max(yMin, airplane.position.x + airplaneVelocity.y * 0.01)))

            // Autopilot
            if ((getState().getWeather()?.enabled ? getState().upgrades.Autopilot - 5 : getState().upgrades.Autopilot) > 0 && pressedKeys.size === 0) { // TODO: add a switch to disable autopilot
                const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? null : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
                if (!autopilotTarget || !enemiesAlive.flatMap((o) => o.children).includes(autopilotTarget) || autopilotTarget.position.x < airplane.position.x) {
                    autopilotTarget = findMin(enemiesAlive.flatMap((o) => o.children).filter((e) => e.position.x > airplane.position.x + 0.3), (e) => e.position.x)
                }
                if (autopilotTarget) {
                    const autopilotSpeed = 0.1 * getState().upgrades.Autopilot
                    if (Math.abs(autopilotTarget.position.z - airplane.position.z) > 0.02) {
                        airplaneVelocity.x = Math.min(1.0, Math.max(-1.0, airplaneVelocity.x + Math.sign(autopilotTarget.position.z - airplane.position.z) * autopilotSpeed))
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
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Post processing
const effectComposer = new EffectComposer(renderer)
const stageTransitionPass = createStageTransitionPass()
{
    const renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    if (getRenderingOption("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }
    if (getRenderingOption("selective unrealbloom")) { effectComposer.addPass(webgl.createSelectiveBloomPass(renderer, camera, renderPass)) }
    if (getRenderingOption("rain")) { effectComposer.addPass(webgl.createRainPass(camera, getRenderingOption("rain.blur", false))) }
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
    const isStopped = init3DModelDebugger(camera, renderer, scene)

    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        // FPS monitor
        stats?.update()

        if (isStopped()) {
            prevTime.update = prevTime.render = Date.now()
        } else {
            // onUpdate
            const numUpdates = Math.floor((time - prevTime.update) / (1000 / updatePerSecond))
            prevTime.update += numUpdates * (1000 / updatePerSecond)
            for (let i = 0; i < numUpdates; i++) {
                onUpdate.forEach((f) => f(updateCount))
                updateCount++
            }

            // onBeforeRender
            const deltaTime = time - prevTime.render
            prevTime.render = time
            onBeforeRender.forEach((f) => f(time, deltaTime))
        }

        onPreprocess.forEach((f) => f())
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
