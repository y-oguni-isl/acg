import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import type { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { onPreprocess } from "../hooks"
import fragmentShader from "./createSelectiveBloomPass.frag"
import vertexShader from "./createSelectiveBloomPass.vert"

const bloomLayer = 1
const bloomOnlyLayer = 2
export const enableSelectiveBloom = <T extends THREE.Object3D>(obj: T, opts: { noDiffusion?: boolean } = {}): T => {
    obj.traverse((child) => {
        child.layers.set(bloomLayer)
        if (opts.noDiffusion) { child.layers.set(bloomOnlyLayer) }
    })
    return obj
}

/**
 * Creates a shader pass that applies bloom effects to objects marked with `enableSelectiveBloom(obj)`.
 * Based on three.js/examples/webgl_postprocessing_unreal_bloom_selective
 * https://threejs.org/examples/?q=bloom#webgl_postprocessing_unreal_bloom_selective
 * 
 * @example
 * ```
 * import { enableSelectiveBloom } from "./shader/selective_bloom"
 * 
 * const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1), new THREE.MeshBasicMaterial({ color: "purple" }))
 * enableSelectiveBloom(ball)
 * ball.position.set(0.4, 0, 0)
 * scene.add(ball)
 * ```
 */
export default (renderer: THREE.WebGLRenderer, camera: THREE.Camera, renderPass: RenderPass) => {
    const effectComposer = new EffectComposer(renderer)
    effectComposer.renderToScreen = false
    effectComposer.addPass(renderPass)
    effectComposer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), 3, 0, 0))
    const additiveBlendingPass = new ShaderPass(
        new THREE.ShaderMaterial({
            uniforms: {
                texture1: { value: null },
                texture2: { value: effectComposer.renderTarget2.texture }
            },
            vertexShader,
            fragmentShader,
            defines: {},
        }),
        "texture1",
    )
    additiveBlendingPass.needsSwap = true
    onPreprocess.add(() => {
        camera.layers.disableAll()
        camera.layers.enable(bloomLayer)
        camera.layers.enable(bloomOnlyLayer)
        effectComposer.render()
        camera.layers.enableAll()
        camera.layers.disable(bloomOnlyLayer)
    })
    window.addEventListener("resize", () => { effectComposer.setSize(window.innerWidth, window.innerHeight) })
    return additiveBlendingPass
}
