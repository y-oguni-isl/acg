import * as THREE from 'three'
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import { createNoise2D } from "simplex-noise"
// @ts-ignore
import snoise2DURL from "../node_modules/webgl-noise/src/noise2D.glsl?url"
const snoise2D = await fetch(snoise2DURL).then((r) => r.text())

const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, () => { }, reject)))
        .scene.children[0]
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
camera.position.z = 1

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff, 0.025))
const directionalLight = new THREE.DirectionalLight(0xf5eeba, 1.6)
directionalLight.position.set(0.3, 1, -1)
scene.add(directionalLight)

const balloon = await loadGLTF("models/balloon.glb", 0.5)
scene.add(balloon)

const skybox = await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point_lowres.glb", 4)
skybox.position.setY(-0.5)
scene.add(skybox)

const uniforms = {
    time: { value: 0.0 },
}

const ground = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
    transparent: true,
    uniforms,
    vertexShader: `\
out vec2 pos;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,
    fragmentShader: `\
${snoise2D}

in vec2 pos;
uniform float time;
void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`
}))

ground.rotateX(-Math.PI / 2)
ground.scale.setScalar(4)
ground.position.setY(-0.13)
scene.add(ground)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.outputEncoding = THREE.sRGBEncoding

// Fit canvas to the window
renderer.setSize(window.innerWidth, window.innerHeight)
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

const effectComposer = new EffectComposer(renderer)
effectComposer.addPass(new RenderPass(scene, camera))
effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0))

// Main loop
const rotationNoise = createNoise2D()
renderer.setAnimationLoop((time: number): void => {
    uniforms.time.value = time
    balloon.rotation.x = rotationNoise(0, time * 0.0003) * (1.5 / 180 * Math.PI)
    balloon.rotation.y = rotationNoise(1, time * 0.0003) * (1.5 / 180 * Math.PI)
    balloon.rotation.z = rotationNoise(2, time * 0.0003) * (1.5 / 180 * Math.PI)
    effectComposer.render()
})

new OrbitControls(camera, renderer.domElement).listenToKeyEvents(window)

document.body.appendChild(renderer.domElement)
