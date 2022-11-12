import 'typed-query-selector'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { createNoise2D } from "simplex-noise"
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import "./dom/credit"
import createRainPass from './webgl/rain'
import upgrades, { addMoney } from './dom/upgrades'
import createSelectiveBloomPass, { bloomLayer } from './webgl/selective_bloom'
import renderingOption from './dom/rendering_option'
import snoise from './webgl/snoise'
import createLaser from './webgl/projectiles'
import * as Stats from "stats.js"
import { loadGLTF } from './webgl/gltf'
import createNewspaperPlayer from './webgl/news'
import "./dom/tutorial"
import ObjectPool from './webgl/object_pool'
import { onBeforeRender, onUpdate, onUpgrade } from './hooks'

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff, 0.025))
const directionalLight = new THREE.DirectionalLight(0xf5eeba, 1.6)
directionalLight.position.set(0.3, 1, -1)
scene.add(directionalLight)

const airplane = !renderingOption("airplane") ? new THREE.Object3D() : await loadGLTF("models/low-poly_airplane.glb", 0.05)
scene.add(airplane)

const pressedKeys = new Set<string>()
window.addEventListener("keydown", (ev) => { pressedKeys.add(ev.code) })
window.addEventListener("keyup", (ev) => { pressedKeys.delete(ev.code) })
window.addEventListener("blur", () => { pressedKeys.clear() })

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
camera.position.set(-0.5, 0.6, 0)

const skybox = !renderingOption("skybox") ? new THREE.Object3D() : await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4)
skybox.rotateX(-Math.PI / 2)
skybox.position.setY(-0.5)
scene.add(skybox)

const showNewspaper = !renderingOption("newspaper") ? null : await createNewspaperPlayer(scene)
onUpgrade.add((name, prevCount) => {
    if (name === "Autopilot" && prevCount === 0) {
        showNewspaper?.(0)
    }
})

const fogUniform = {
    time: { value: 0.0 },
}

const fog = !renderingOption("fog") ? new THREE.Object3D() : new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
    transparent: true,
    uniforms: fogUniform,
    vertexShader: /* glsl */`\
out vec2 pos;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,
    fragmentShader: /* glsl */`\
${snoise}

in vec2 pos;
uniform float time;
void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`
}))
fog.name = "fog"
fog.rotateX(-Math.PI / 2)
fog.scale.setScalar(4)
fog.position.setY(-0.13)
scene.add(fog)

const laser = !renderingOption("laser") ? null : createLaser()
if (laser) { scene.add(laser.mesh) }

const smoothstep = (a: number, b: number, x: number) => x < a ? 0 : x > b ? 1 : (x - a) / (b - a)

{
    const buildBirdModel = async () => {
        const model = await loadGLTF("models/low_polygon_art__white_eagle_bird.glb", 0.1)
        model.rotateX(-Math.PI / 2)
        model.rotateZ(-Math.PI / 2)
        model.scale.multiplyScalar(0.3)
        return model
    }
    const birds = new ObjectPool(await buildBirdModel()).withAnimation((positions, originalPositions) => {
        for (let i = 0; i < positions.count; i++) {
            const dy = smoothstep(3.5, 17, Math.abs(positions.getX(i))) * 10 * Math.sin(Date.now() * 0.01) * 0.8
            positions.setY(i, originalPositions.getY(i) + dy * 0.7)
            positions.setZ(i, originalPositions.getZ(i) + dy)
        }
    })
    scene.add(birds)

    const deadBirds = new ObjectPool(await buildBirdModel())
    scene.add(deadBirds)

    const hitEffects = await ObjectPool.fromBuilder(async () => {
        // TODO: shader
        const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.006), new THREE.MeshBasicMaterial({ color: 0xff66ff }))
        mesh.layers.enable(bloomLayer)
        return mesh
    })
    scene.add(hitEffects)

    const enemies = new Set<{
        hp: number
        hitEffectZ?: number
        model: ReturnType<typeof birds.allocate>,
        hitEffectModel?: ReturnType<typeof hitEffects.allocate>,
    }>()
    const deadEnemies = new Set<{
        time: number
        model: ReturnType<typeof deadBirds.allocate>
    }>()

    let autopilotTarget: (typeof enemies extends Set<infer R> ? R : never) | null = null
    onUpdate.add((t) => {
        // Spawn enemies
        if (t % 5 === 0) {
            const model = birds.allocate()
            model.position.set(2, 0, (t * 0.06) % 1 - 0.5)
            enemies.add({ hp: 30, model })
        }

        // Move enemies
        for (const enemy of [...enemies]) {
            enemy.model.position.x -= 0.01

            if (Math.abs(enemy.model.position.z - airplane.position.z) < 0.03 && enemy.model.position.x > airplane.position.x) {
                // Show a hit effect
                if (!enemy.hitEffectModel) {
                    enemy.hitEffectModel = hitEffects.allocate()
                }
                enemy.hitEffectModel.position.copy(enemy.model.position).setZ(airplane.position.z)

                // Damage
                enemy.hp -= upgrades.Laser.value + 1
            } else if (enemy.hitEffectModel) {
                // Delete a hit effect
                enemy.hitEffectModel.free()
                enemy.hitEffectModel = undefined
            }

            // Delete the enemy if it is outside screen
            if (enemy.model.position.x < -1 || enemy.hp <= 0) {
                if (enemy.hp <= 0) {
                    addMoney(1)
                    const body = deadBirds.allocate()
                    body.position.copy(enemy.model.position)
                    deadEnemies.add({ time: 0, model: body })
                }

                enemy.model.free()
                enemy.hitEffectModel?.free()
                enemies.delete(enemy)
            }
        }

        // Animate dead enemies
        for (const body of deadEnemies) {
            body.model.position.y -= 0.001 * body.time
            body.model.rotateZ(0.1 * (Math.random() - 0.5))
            body.time++
            if (body.time > 100) {
                body.model.free()
                deadEnemies.delete(body)
            }
        }

        // Move the airplane
        if (pressedKeys.has("KeyD")) { airplane.position.setZ(Math.min(0.5, Math.max(-0.5, airplane.position.z + 0.015))) }
        if (pressedKeys.has("KeyA")) { airplane.position.setZ(Math.min(0.5, Math.max(-0.5, airplane.position.z - 0.015))) }
        if (pressedKeys.has("KeyW")) { airplane.position.setX(Math.min(0.3, Math.max(-0.3, airplane.position.x + 0.015))) }
        if (pressedKeys.has("KeyS")) { airplane.position.setX(Math.min(0.3, Math.max(-0.3, airplane.position.x - 0.015))) }

        if (upgrades.Autopilot.value > 0 && pressedKeys.size === 0) { // TODO: add a switch to disable autopilot
            const findMin = <T>(arr: readonly T[], key: (v: T) => void) => arr.length === 0 ? null : arr.reduce((p, c) => key(p) < key(c) ? p : c, arr[0]!)
            if (!autopilotTarget || !enemies.has(autopilotTarget) || autopilotTarget.model.position.x < airplane.position.x) {
                autopilotTarget = findMin([...enemies].filter((e) => e.model.position.x > airplane.position.x + 0.3), (e) => e.model.position.x)
            }
            if (autopilotTarget) {
                airplane.position.setZ(airplane.position.z * (1 - 0.01 * upgrades.Autopilot.value) + autopilotTarget.model.position.z * 0.01 * upgrades.Autopilot.value)
            }
        }
    })
    onBeforeRender.add((time, deltaTime) => {
        laser?.render(time, upgrades.Laser.value, airplane.position.x, airplane.position.z)
    })
}

document.querySelector("div#message")!.innerText = `Loading models...`
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)

const effectComposer = new EffectComposer(renderer)
const renderPass = new RenderPass(scene, camera)

effectComposer.addPass(renderPass)
if (renderingOption("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }

const selectiveBloomComposer = !renderingOption("selective unrealbloom") ? null : createSelectiveBloomPass(renderer, renderPass)
if (selectiveBloomComposer) { effectComposer.addPass(selectiveBloomComposer.pass) }

let rainPass: ShaderPass | null = null
if (renderingOption("rain")) {
    effectComposer.addPass(rainPass = createRainPass(renderingOption("rain.blur", false), snoise))
}

// Fit canvas to the window
window.addEventListener("resize", () => {
    // https://stackoverflow.com/a/20434960/10710682 and
    // https://stackoverflow.com/a/20641695/10710682
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    effectComposer.setSize(window.innerWidth, window.innerHeight)
    selectiveBloomComposer?.setSize(window.innerWidth, window.innerHeight)
})

// Main loop
const rotationNoise = createNoise2D()
const stats = import.meta.env.DEV ? new Stats() : null
if (stats) {
    stats.showPanel(0)
    stats.dom.style.bottom = "50px"
    stats.dom.style.top = ""
    document.body.append(stats.dom)
}

{
    let prevTime = 0
    let prevUpdateTime = 0
    let updateCount = 0
    renderer.setAnimationLoop((time: number): void => {
        stats?.update()
        fogUniform.time.value = time

        // onUpdate
        {
            const deltaTime = time - prevUpdateTime
            const numUpdates = Math.floor(deltaTime / (1000 / 30))
            prevUpdateTime += numUpdates * (1000 / 30)
            for (let i = 0; i < numUpdates; i++) {
                onUpdate.forEach((f) => f(updateCount))
                updateCount++
            }
        }

        // onBeforeRender
        {
            const deltaTime = time - prevTime
            prevTime = time
            onBeforeRender.forEach((f) => f(time, deltaTime))
        }

        airplane.rotation.set(
            rotationNoise(0, time * 0.0003) * (4 / 180 * Math.PI),
            Math.PI * 0.5 + rotationNoise(1, time * 0.0003) * (4 / 180 * Math.PI),
            rotationNoise(2, time * 0.0003) * (4 / 180 * Math.PI),
        )

        if (rainPass !== null) {
            rainPass.uniforms.aspect!.value = camera.aspect
            rainPass.uniforms.time!.value = time;
        }

        selectiveBloomComposer?.render(camera)
        effectComposer.render()
    })
}

document.querySelector("button#newspaper")!.addEventListener("click", () => { showNewspaper?.(0) })

// Allow the user to control the camera by dragging
new OrbitControls(camera, renderer.domElement).listenToKeyEvents(window)

document.body.appendChild(renderer.domElement)

// Audio
const playAudio = () => {
    const audio = document.querySelector("audio#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)
playAudio()

document.querySelector("div#message")!.style.display = "none"

document.querySelector("span#random-text")!.innerText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

if (renderingOption("axis")) { scene.add(new THREE.AxesHelper()) }
