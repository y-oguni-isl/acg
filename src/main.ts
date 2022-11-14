import 'typed-query-selector'
import "./webgl/lib.glsl"
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { smoothstep } from 'three/src/math/MathUtils'
import * as Stats from "stats.js"
import { onBeforeRender, onUpdate } from './hooks'
import { getState, newsList, subscribe } from './save_data'
import { domStore, getRenderingOption } from './dom'
import createRainPass from './webgl/rain'
import createSelectiveBloomPass, { bloomLayer } from './webgl/selective_bloom'
import createLaser from './webgl/laser'
import { loadGLTF } from './webgl/gltf'
import createNewspaperPlayer from './webgl/news_animation'
import ObjectPool from './webgl/object_pool'
import createFog from './webgl/fog'
import { call } from './util'
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"
import { buildUFOPool } from './webgl/ufo'

const airplane = !getRenderingOption("airplane") ? new THREE.Object3D() : await loadGLTF("models/low-poly_airplane.glb", 0.05)
{
    const rotationNoise = new SimplexNoise()
    onBeforeRender.add((time) => {
        airplane.rotation.set(
            rotationNoise.noise(0, time * 0.0003) * (4 / 180 * Math.PI),
            Math.PI * 0.5 + rotationNoise.noise(1, time * 0.0003) * (4 / 180 * Math.PI),
            rotationNoise.noise(2, time * 0.0003) * (4 / 180 * Math.PI),
        )
    })
}

const skybox = !getRenderingOption("skybox") ? new THREE.Object3D() : call(await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4), { rotateX: -Math.PI / 2, position: { setY: -0.5 } })
{
    onBeforeRender.add((time) => {
        skybox.rotation.y = time * 0.0001
    })
}

const scene = new THREE.Scene().add(
    new THREE.AmbientLight(0xffffff, 0.025),
    call(new THREE.DirectionalLight(0xf5eeba, 1.6), { position: { set: [0.3, 1, -1] } }),
    airplane,
    skybox,
    !getRenderingOption("fog") ? new THREE.Object3D() : createFog(),
    !getRenderingOption("laser") ? new THREE.Object3D() : createLaser(airplane),
    !getRenderingOption("axis") ? new THREE.Object3D() : new THREE.AxesHelper(),
)

const camera = call(new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10), { position: { set: [-0.5, 0.6, 0] } })

// News
{
    const startNewspaperAnimation = !getRenderingOption("newspaper") ? null : await createNewspaperPlayer(scene)
    subscribe((s, prev) => {
        if (s.availableNews === prev.availableNews) { return }
        const addedNews = [...s.availableNews].filter((n) => !prev.availableNews.has(n))[0]
        if (!addedNews) { return }
        domStore.setState({ news: newsList[addedNews] })
        startNewspaperAnimation?.(addedNews)
    })
}

// Enemies
{
    // Create a object pool for the 3D model of a bird
    const buildBirdModel = async () => call(await loadGLTF("models/low_polygon_art__white_eagle_bird.glb", 0.1), { rotateX: -Math.PI / 2, rotateZ: -Math.PI / 2, scale: { multiplyScalar: 0.3 } })
    const birds = new ObjectPool(await buildBirdModel())
        .withVertexAnimation((positions, originalPositions) => {
            for (let i = 0; i < positions.count; i++) {
                const dy = smoothstep(Math.abs(positions.getX(i)), 3.5, 17) * 10 * Math.sin(Date.now() * 0.01) * 0.8
                positions.setY(i, originalPositions.getY(i) + dy * 0.7)
                positions.setZ(i, originalPositions.getZ(i) + dy)
            }
        })
    if (getRenderingOption("birds")) { scene.add(birds) }
    const deadBirds = new ObjectPool(await buildBirdModel())
    if (getRenderingOption("deadBirds")) { scene.add(deadBirds) }

    // Create a object pool for the 3D model of a hit effect.
    // TODO: shader
    const hitEffects = await ObjectPool.fromBuilder(async () => call(new THREE.Mesh(new THREE.IcosahedronGeometry(0.006), new THREE.MeshBasicMaterial({ color: 0xff66ff })), { layers: { enable: bloomLayer } }))
    if (getRenderingOption("hitEffects")) { scene.add(hitEffects) }

    // Create a object pool for the 3D model of a UFO.
    const ufos = await buildUFOPool()
    if (getRenderingOption("UFO")) { scene.add(ufos) }

    // A set to store the state of each enemy.
    type EnemyName = "Bird" | "UFO"
    const enemies = new Set<{
        readonly name: EnemyName
        time: number
        hp: number
        model: ReturnType<typeof birds.allocate>,
        hitEffectModel?: ReturnType<typeof hitEffects.allocate>,
        onKilled: () => void
    }>()

    // A set to store the state of dead enemy.
    const deadEnemies = new Set<{
        time: number  // time since it was killed
        model: ReturnType<typeof deadBirds.allocate>
    }>()

    // The enemy that the autopilot algorithm is currently targeting.
    let autopilotTarget: (typeof enemies extends Set<infer R> ? R : never) | null = null

    // Keyboard events
    const pressedKeys = new Set<string>()
    window.addEventListener("keydown", (ev) => { pressedKeys.add(ev.code) })
    window.addEventListener("keyup", (ev) => { pressedKeys.delete(ev.code) })
    window.addEventListener("blur", () => { pressedKeys.clear() })

    // Main game loop
    onUpdate.add((t) => {
        // Spawn enemies
        if (t % 5 === 0) {
            const model = call(birds.allocate(), { position: { set: [2, 0, (t * 0.06) % 1 - 0.5] } })
            enemies.add({
                name: "Bird", time: 0, hp: 15 * (1 + Math.random()), model, onKilled: () => {
                    getState().addMoney(1)
                    deadEnemies.add({ time: 0, model: call(deadBirds.allocate(), { position: { copy: model.position } }) })
                }
            })
        } else if (t % 31 === 0 && getState().availableNews.has("aliensComing")) {
            const model = call(ufos.allocate(), { position: { set: [2, 0, (t * 0.06) % 1 - 0.5] } })
            enemies.add({
                name: "UFO", time: 0, hp: 300 * (1 + Math.random()), model, onKilled: () => {
                    getState().addMoney(10)
                    deadEnemies.add({ time: 0, model: call(ufos.allocate(), { position: { copy: model.position } }) })
                }
            })
        }

        for (const enemy of [...enemies]) {
            // Move enemies
            if (enemy.name === "Bird") {
                enemy.model.position.x -= 0.01
            } else { // UFO
                if (enemy.time % 80 <= 3) {
                    enemy.model.scale.copy(enemy.model.getOriginalScale().multiply(new THREE.Vector3(1, 1 - (enemy.time % 80) / 3, 1)))
                } else if (enemy.time % 80 === 3 + 1) {
                    enemy.model.position.x -= 0.35 + Math.random() * 0.2
                    enemy.model.position.z -= (Math.random() - 0.3) * 0.2
                } else if (enemy.time % 80 <= 3 + 1 + 3) {
                    enemy.model.scale.copy(enemy.model.getOriginalScale().multiply(new THREE.Vector3(1, (enemy.time % 80 - (3 + 1)) / 3, 1)))
                }
            }

            // Collision detection between the enemy and the player's attack
            if (Math.abs(enemy.model.position.z - airplane.position.z) < 0.03 && enemy.model.position.x > airplane.position.x) {
                // Show a hit effect
                if (!enemy.hitEffectModel) {
                    enemy.hitEffectModel = hitEffects.allocate()
                }
                enemy.hitEffectModel.position.copy(enemy.model.position).setZ(airplane.position.z)

                // Damage
                enemy.hp -= getState().upgrades.Laser + 1
            } else { // No collisions
                if (enemy.hitEffectModel) {
                    // Delete a hit effect
                    enemy.hitEffectModel.free()
                    enemy.hitEffectModel = undefined
                }
            }

            // Delete the enemy if it is outside screen or is killed
            if (enemy.model.position.x < -1 || enemy.hp <= 0) {
                if (enemy.hp <= 0) { enemy.onKilled() }
                enemy.model.free()
                enemy.hitEffectModel?.free()
                enemies.delete(enemy)
            }
            enemy.time++
        }

        // Animate dead enemies
        for (const body of deadEnemies) {
            body.model.position.y -= 0.001 * body.time
            body.model.rotateZ(0.1 * (Math.random() - 0.5)) // free fall
            body.time++
            if (body.time > 100) {
                body.model.free()
                deadEnemies.delete(body)
            }
        }

        // Move the airplane by WASD keys
        if (pressedKeys.has("KeyD")) { airplane.position.setZ(Math.min(0.5, Math.max(-0.5, airplane.position.z + 0.015))) }
        if (pressedKeys.has("KeyA")) { airplane.position.setZ(Math.min(0.5, Math.max(-0.5, airplane.position.z - 0.015))) }
        if (pressedKeys.has("KeyW")) { airplane.position.setX(Math.min(0.3, Math.max(-0.3, airplane.position.x + 0.015))) }
        if (pressedKeys.has("KeyS")) { airplane.position.setX(Math.min(0.3, Math.max(-0.3, airplane.position.x - 0.015))) }

        // Autopilot
        if (getState().upgrades.Autopilot > 0 && pressedKeys.size === 0) { // TODO: add a switch to disable autopilot
            const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? null : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
            if (!autopilotTarget || !enemies.has(autopilotTarget) || autopilotTarget.model.position.x < airplane.position.x) {
                autopilotTarget = findMin([...enemies].filter((e) => e.model.position.x > airplane.position.x + 0.3), (e) => e.model.position.x)
            }
            if (autopilotTarget) {
                airplane.position.setZ(airplane.position.z * (1 - 0.01 * getState().upgrades.Autopilot) + autopilotTarget.model.position.z * 0.01 * getState().upgrades.Autopilot)
            }
        }
    })
}

// Update the loading message
domStore.setState({ loadingMessage: `Loading models...` })
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Post processing
const effectComposer = new EffectComposer(renderer)
{
    const renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)
    if (getRenderingOption("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }
    if (getRenderingOption("selective unrealbloom")) { effectComposer.addPass(createSelectiveBloomPass(renderer, camera, renderPass)) }
    if (getRenderingOption("rain")) { effectComposer.addPass(createRainPass(camera, getRenderingOption("rain.blur", false))) }
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
    const prevTime = { render: 0, update: 0 }
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        // FPS monitor
        stats?.update()

        // onUpdate
        const numUpdates = Math.floor((time - prevTime.update) / (1000 / 30))
        prevTime.update += numUpdates * (1000 / 30)
        for (let i = 0; i < numUpdates; i++) {
            onUpdate.forEach((f) => f(updateCount))
            updateCount++
        }

        // onBeforeRender
        const deltaTime = time - prevTime.render
        prevTime.render = time
        onBeforeRender.forEach((f) => f(time, deltaTime))

        effectComposer.render()
    })
}

// Allow the user to control the camera by dragging
new OrbitControls(camera, renderer.domElement).listenToKeyEvents(window)

// Audio
const playAudio = () => {
    const audio = document.querySelector("audio#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)
playAudio()

// Clear the loading message
domStore.setState({ loadingMessage: `` })
