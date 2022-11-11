import 'typed-query-selector'
import * as THREE from 'three'
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { createNoise2D } from "simplex-noise"
// @ts-ignore
import snoise3DURL from "../node_modules/webgl-noise/src/noise3D.glsl?url"
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import "./credit"
import { createRainPass } from './rain'
import { upgrades } from './upgrades'
import { bloomLayer, createSelectiveBloomPass } from './selective_bloom'

// FIXME: Use a faster snoise(vec1) and snoise(vec2) implementation
//        It might be better to sample the noise function as a texture beforehand.
//        https://stackoverflow.com/questions/52176463/threejs-how-to-render-a-texture-with-custom-shaders-including-the-textures-uv-o
//        https://threejs.org/docs/#api/en/textures/Texture
const snoise = (await fetch(snoise3DURL).then((r) => r.text())) + `
float snoise(vec2 v) {
    return snoise(vec3(v, 0.0));
}
`

const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { document.querySelector("div#message")!.innerText = `Loading ${filepath} (${xhr.loaded}/${xhr.total})` }, reject)))
        .scene.children[0].children[0]
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

const option = (name: string, defaultValue: boolean = true) => {
    const label = document.querySelector("template#optionTemplate")!.content.children[0].cloneNode(true) as HTMLLabelElement
    const input = label.querySelector("input")!
    input.checked = defaultValue ?
        localStorage.getItem(`option.${name}`) !== "false" :
        localStorage.getItem(`option.${name}`) === "true"
    input.addEventListener("click", () => {
        localStorage.setItem(`option.${name}`, input.checked + "")
        location.reload()
    })
    label.querySelector("span")!.innerText = name
    document.querySelector("div#options")!.append(label)
    return input.checked
}

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff, 0.025))
const directionalLight = new THREE.DirectionalLight(0xf5eeba, 1.6)
directionalLight.position.set(0.3, 1, -1)
scene.add(directionalLight)

const airplane = !option("airplane") ? new THREE.Object3D() : await loadGLTF("models/low-poly_airplane.glb", 0.05)
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

const skybox = !option("skybox") ? new THREE.Object3D() : await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point_lowres.glb", 4)
skybox.rotateX(-Math.PI / 2)
skybox.position.setY(-0.5)
scene.add(skybox)

document.querySelector("div#message")!.innerText = `Loading models...`
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

const fogUniform = {
    time: { value: 0.0 },
}

const fog = !option("fog") ? new THREE.Object3D() : new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
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

const laserUniform = {
    time: { value: 0.0 },
    upgrade: { value: 0.0 },
}
const laser = !option("laser", false) ? new THREE.Object3D() : new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    transparent: true,
    uniforms: laserUniform,
    vertexShader: /* glsl */`\
out vec2 pos;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,
    fragmentShader: /* glsl */`\
in vec2 pos;
uniform float time;
uniform float upgrade;

void main() {
    float opacityY = (sin(pos.y * 30.0 - time * 0.08) + 1.0) / 2.0;
    float opacityX;
    opacityX = smoothstep(0.005, 0.0, abs(pos.x));
    if (upgrade >= 1.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.1)); }
    if (upgrade >= 2.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.1)); }
    if (upgrade >= 3.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.05)); }
    if (upgrade >= 4.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.05)); }
    gl_FragColor = vec4(1.0, 0.3, 1.0, opacityY * opacityX);
    if (upgrade >= 5.0) {
        float clippedUpgrade = min(upgrade, 25.0);
        float opacityX2 = smoothstep(0.005 * (clippedUpgrade - 4.0), 0.005 * (clippedUpgrade - 5.0), abs(pos.x + cos(time * 0.08) * 0.02));
        gl_FragColor += opacityX2 * vec4(1.0, 1.0, 1.0, opacityY);
    }
}
`
}))
laser.renderOrder = 1
laser.rotateY(-Math.PI / 2)
laser.rotateX(-Math.PI / 2)
laser.scale.set(0.25, 2, 0)
laser.position.set(1, 0.01, 0)
laser.layers.enable(bloomLayer)
scene.add(laser)

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
if (option("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }

const selectiveBloomComposer = !option("selective unrealbloom") ? null : createSelectiveBloomPass(renderer, renderPass)
if (selectiveBloomComposer) { effectComposer.addPass(selectiveBloomComposer.pass) }

let rainPass: ShaderPass | null = null
if (option("rain")) {
    effectComposer.addPass(rainPass = createRainPass(option("rain.blur", false), snoise))
}

// Main loop
const rotationNoise = createNoise2D()
let targetZ = 0.0

renderer.setAnimationLoop((time: number): void => {
    fogUniform.time.value = time
    laserUniform.time.value = time
    laserUniform.upgrade.value = upgrades.laser.value

    if (Math.abs(targetZ - airplane.position.z) < 0.01) {
        targetZ = Math.cos(Math.random() * Math.PI) * 0.3
    }
    if (!controlled) {
        airplane.position.setZ(airplane.position.z * (1 - 0.01 * upgrades.autopilot.value) + targetZ * 0.01 * upgrades.autopilot.value)
    }
    laser.position.setX(airplane.position.x + 1)
    laser.position.setZ(airplane.position.z)

    if (rainPass !== null) {
        rainPass.uniforms.aspect.value = camera.aspect
        rainPass.uniforms.time.value = time;
    }
    airplane.rotation.x = rotationNoise(0, time * 0.0003) * (4 / 180 * Math.PI)
    airplane.rotation.y = Math.PI * 0.5 + rotationNoise(1, time * 0.0003) * (4 / 180 * Math.PI)
    airplane.rotation.z = rotationNoise(2, time * 0.0003) * (4 / 180 * Math.PI)

    selectiveBloomComposer?.render(camera)
    effectComposer.render()
})

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
