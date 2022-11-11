import 'typed-query-selector'
import * as THREE from 'three'
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { createNoise2D } from "simplex-noise"
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import "./dom/credit"
import createRainPass from './shader/rain'
import upgrades from './dom/upgrades'
import createSelectiveBloomPass from './shader/selective_bloom'
import renderingOption from './dom/rendering_option'
import snoise from './shader/snoise'
import createLaser from './shader/projectiles'

const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { document.querySelector("div#message")!.innerText = `Loading ${filepath} (${xhr.loaded}/${xhr.total})` }, reject)))
        .scene.children[0].children[0]
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff, 0.025))
const directionalLight = new THREE.DirectionalLight(0xf5eeba, 1.6)
directionalLight.position.set(0.3, 1, -1)
scene.add(directionalLight)

const airplane = !renderingOption("airplane") ? new THREE.Object3D() : await loadGLTF("models/low-poly_airplane.glb", 0.05)
scene.add(airplane)

let controlled = false
window.addEventListener("keydown", (ev) => { controlled = ev.shiftKey || ev.ctrlKey })
window.addEventListener("keyup", (ev) => { controlled = ev.shiftKey || ev.ctrlKey })
window.addEventListener("mousemove", (ev) => {
    if (controlled) {
        airplane.position.setZ(Math.min(0.3, Math.max(-0.3, ev.pageX / (window.innerWidth / 2) - 1)))
        airplane.position.setX(Math.min(0.3, Math.max(-0.3, 1 - ev.pageY / (window.innerHeight / 2))))
    }
})

const skybox = !renderingOption("skybox") ? new THREE.Object3D() : await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point_lowres.glb", 4)
skybox.rotateX(-Math.PI / 2)
skybox.position.setY(-0.5)
scene.add(skybox)

document.querySelector("div#message")!.innerText = `Loading models...`
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

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

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
camera.position.set(-0.5, 0.6, 0)

// Fit canvas to the window
renderer.setSize(window.innerWidth, window.innerHeight)
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

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

// Main loop
const rotationNoise = createNoise2D()
let targetZ = 0.0

renderer.setAnimationLoop((time: number): void => {
    fogUniform.time.value = time

    if (Math.abs(targetZ - airplane.position.z) < 0.01) {
        targetZ = Math.cos(Math.random() * Math.PI) * 0.3
    }
    if (!controlled) {
        airplane.position.setZ(airplane.position.z * (1 - 0.01 * upgrades.autopilot.value) + targetZ * 0.01 * upgrades.autopilot.value)
    }

    airplane.rotation.set(
        rotationNoise(0, time * 0.0003) * (4 / 180 * Math.PI),
        Math.PI * 0.5 + rotationNoise(1, time * 0.0003) * (4 / 180 * Math.PI),
        rotationNoise(2, time * 0.0003) * (4 / 180 * Math.PI),
    )

    laser?.render(time, upgrades.laser.value, airplane.position.x, airplane.position.z)

    if (rainPass !== null) {
        rainPass.uniforms.aspect.value = camera.aspect
        rainPass.uniforms.time.value = time;
    }

    selectiveBloomComposer?.render(camera)
    effectComposer.render()
})

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
