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
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { document.querySelector<HTMLDivElement>("#message")!.innerText = `Loading ${filepath} (${xhr.loaded}/${xhr.total})` }, reject)))
        .scene.children[0].children[0]
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

const option = (name: string, defaultValue: boolean = true) => {
    const label = document.querySelector<HTMLTemplateElement>("#optionTemplate")!.content.children[0].cloneNode(true) as HTMLLabelElement
    const input = label.querySelector("input")!
    input.checked = defaultValue ?
        localStorage.getItem(`option.${name}`) !== "false" :
        localStorage.getItem(`option.${name}`) === "true"
    input.addEventListener("click", () => {
        localStorage.setItem(`option.${name}`, input.checked + "")
        location.reload()
    })
    label.querySelector("span")!.innerText = name
    document.querySelector<HTMLDivElement>("#options")!.append(label)
    return input.checked
}

const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff, 0.025))
const directionalLight = new THREE.DirectionalLight(0xf5eeba, 1.6)
directionalLight.position.set(0.3, 1, -1)
scene.add(directionalLight)

const airplane = !option("airplane") ? new THREE.Object3D() : await loadGLTF("models/low-poly_airplane.glb", 0.05)
scene.add(airplane)

const skybox = !option("skybox") ? new THREE.Object3D() : await loadGLTF("models/sky_pano_-_grand_canyon_yuma_point_lowres.glb", 4)
skybox.rotateX(-Math.PI / 2)
skybox.position.setY(-0.5)
scene.add(skybox)

document.querySelector<HTMLDivElement>("#message")!.innerText = `Loading models...`
await new Promise((resolve) => setTimeout(resolve, 0)) // Render DOM

const timeUniform = {
    time: { value: 0.0 },
}

const fog = !option("fog") ? new THREE.Object3D() : new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
    transparent: true,
    uniforms: timeUniform,
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

const laser = !option("laser", false) ? new THREE.Object3D() : new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    transparent: true,
    uniforms: timeUniform,
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

void main() {
    float opacityY = (sin(pos.y * 30.0 - time * 0.08) + 1.0) / 2.0;
    float opacityX = max(0.0, 1.0 - abs(pos.x + cos(time * 0.08) * 0.02) * 100.0);
    gl_FragColor = vec4(0.0, 1.0, 1.0, opacityY * opacityX);
}
`
}))
laser.name = "laser"
laser.renderOrder = 1
laser.rotateY(-Math.PI / 2)
laser.rotateX(-Math.PI / 2)
laser.scale.set(0.25, 2, 0)
laser.position.set(1, 0.01, 0)
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
effectComposer.addPass(new RenderPass(scene, camera))
if (option("unrealbloom")) { effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 0.2, 0, 0)) }

const numMouseTrails = 10
const declareMouseUniform = Array.from(Array(numMouseTrails).keys(), (i) => `uniform vec2 mouse${i};`).join("\n")
let rainPass: ShaderPass | null = null
if (option("rain")) {
    const rainBlur = !option("rain.blur", false) ? "" : /* glsl */`gl_FragColor = vec4(
        texture2D(tDiffuse, vUv + vec2(-0.0028,  0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2(-0.0040,  0.0000) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2(-0.0028, -0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0000,  0.0040) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv) +
        texture2D(tDiffuse, vUv + vec2( 0.0000, -0.0040) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0028,  0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0040,  0.0000) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0028, -0.0028) / vec2(aspect, 1.0))
    ) / 9.0;`
    rainPass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            aspect: { value: window.innerWidth / window.innerHeight },
            time: { value: 0.0 },
            ...Object.fromEntries(Array.from(Array(numMouseTrails).keys(), (i) => [`mouse${i}`, { value: new THREE.Vector2(0.5, 0.5) }])),
        },
        vertexShader: /* glsl */`
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
        fragmentShader: /* glsl */`
uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
${declareMouseUniform}

in vec2 vUv;

${snoise}

#define scale 1.4

// https://www.desmos.com/calculator/ejrfpu9pyi
float dropletY(float x, float a) {
    return mod(x, a) < 1.0 ? sqrt(mod(x, a)) + floor(x/a) : floor(x/a) + 1.0;
}

// https://iquilezles.org/articles/distfunctions2d/
float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

#define PI 3.1415926535897932384626433832795

#define horizontalDropletDistributionCycle (2.0 * PI / 300.0)

float horizontalDropletDistribution(float x) {
    return max(0.0, (cos(x * 300.0) - 0.5) * 2.0);
}

float movingDropletVolume(vec2 p, float i) {
    float prob = horizontalDropletDistribution(p.x);
    if (prob == 0.0) { return 0.0; }
    p = vec2(p.x + i * horizontalDropletDistributionCycle / 4.0, p.y);
    float y = dropletY(time * 0.001 + 3.9 * floor(vUv.x / horizontalDropletDistributionCycle - 0.5) + p.y * 2.0, /* cycle of dripping */15.0 + i) * 0.25;
    float noise = snoise(vec3((p + vec2(0.0, y)) * vec2(aspect, 1.0) * 10.0 / scale, i * 1000.0));
    return smoothstep(0.01, 1.0, prob * pow(noise, /* higher = sparser droplets */ 10.0));
}

float fixedDropletVolume(vec2 p) {
    float noise = snoise(p * vec2(aspect, 1.0) * 60.0 / scale) + snoise((p * vec2(aspect, 1.0) + vec2(100.0, 0.0)) * 60.0 / scale);
    return smoothstep(0.01, 1.0, pow(noise, /* higher = sparser droplets */ 6.0));
}

float dropletVolume(vec2 p) {
    float vol = 0.0;
    for (float i = 0.0; i < 4.0; i += 1.0) {
        vol += movingDropletVolume(p + snoise(p) * 0.05, i);
    }
    return vol + fixedDropletVolume(p)
        // splash
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 100.0)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 200.0)), 8.0)) * 0.05;
}

vec2 dropletGradient(vec2 p) {
    float base = dropletVolume(p);
    if (base == 0.0) { return vec2(0.0); }
    return vec2(
        base - dropletVolume(p + vec2(0.0005 * scale, 0.0)),
        base - dropletVolume(p + vec2(0.0, 0.0005 * scale))
    );
}

void main() {
    if (dropletVolume(vUv) > 0.01) {
        gl_FragColor = pow(texture2D(tDiffuse, vUv + dropletGradient(vUv) * /* lower = transparent */9.0), vec4(vec3(/* lower = brighter */ 0.9), 1.0));
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);

        // blur
        ${rainBlur}

        gl_FragColor = pow(gl_FragColor, vec4(vec3(0.7), 1.0));

        float opacity = 1.0;

        if (mouse8.x >= 0.0 && mouse9.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0), mouse9 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse7.x >= 0.0 && mouse8.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse6.x >= 0.0 && mouse7.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse5.x >= 0.0 && mouse6.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse4.x >= 0.0 && mouse5.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse3.x >= 0.0 && mouse4.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.7; }
        if (mouse2.x >= 0.0 && mouse3.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.5; }
        if (mouse1.x >= 0.0 && mouse2.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.3; }
        if (mouse0.x >= 0.0 && mouse1.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse0 * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.1; }
    
        opacity = max(0.0, opacity);
    
        gl_FragColor = mix(texture2D(tDiffuse, vUv), gl_FragColor, opacity);
    }
}`
    });
    effectComposer.addPass(rainPass)
    const rotateMouseTrail = () => {
        for (let i = numMouseTrails - 2; i >= 0; i--) {
            rainPass!.uniforms[`mouse${i + 1}`].value.copy(rainPass!.uniforms[`mouse${i}`].value)
        }
        rainPass!.uniforms.mouse0.value.set(-1.0, -1.0, -1.0)
    }

    window.addEventListener("mousemove", (ev) => {
        (rainPass!.uniforms.mouse0.value as THREE.Vector2).set(ev.pageX / window.innerWidth, 1 - ev.pageY / window.innerHeight)
        if ((rainPass!.uniforms.mouse0.value as THREE.Vector2).distanceTo(rainPass!.uniforms.mouse1.value as THREE.Vector2) > 0.1) {
            rotateMouseTrail()
        }
    })

    setInterval(() => { rotateMouseTrail() }, 100)
}

// Main loop
const rotationNoise = createNoise2D()
renderer.setAnimationLoop((time: number): void => {
    timeUniform.time.value = time
    if (rainPass !== null) {
        rainPass.uniforms.aspect.value = camera.aspect
        rainPass.uniforms.time.value = time;
    }
    airplane.rotation.x = rotationNoise(0, time * 0.0003) * (4 / 180 * Math.PI)
    airplane.rotation.y = Math.PI * 0.5 + rotationNoise(1, time * 0.0003) * (4 / 180 * Math.PI)
    airplane.rotation.z = rotationNoise(2, time * 0.0003) * (4 / 180 * Math.PI)

    effectComposer.render()
})

new OrbitControls(camera, renderer.domElement).listenToKeyEvents(window)

document.body.appendChild(renderer.domElement)

// Audio
const playAudio = () => {
    const audio = document.querySelector<HTMLAudioElement>("#rainAudio")!
    audio.loop = true
    audio.play()
}
window.addEventListener("click", playAudio)
playAudio()

document.querySelector<HTMLDivElement>("#message")!.style.display = "none"
