import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import type { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { onBeforeRender } from "../hooks"
import selective_bloomFrag from "./createSelectiveBloomPass.frag"
import selective_bloomVert from "./createSelectiveBloomPass.vert"

export const bloomLayer = 1

/**
 * Creates a shader pass that applies bloom effects to objects marked with `obj.layers.enable(bloomLayer)`.
 * Based on three.js/examples/webgl_postprocessing_unreal_bloom_selective
 * https://threejs.org/examples/?q=bloom#webgl_postprocessing_unreal_bloom_selective
 * 
 * @example
 * ```
 * import { bloomLayer } from './shader/selective_bloom'
 * 
 * const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1), new THREE.MeshBasicMaterial({ color: "purple" }))
 * ball.layers.enable(bloomLayer)
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
            vertexShader: selective_bloomVert,
            fragmentShader: selective_bloomFrag,
            defines: {},
        }),
        'texture1',
    )
    additiveBlendingPass.needsSwap = true
    onBeforeRender.add(() => {
        camera.layers.disableAll()
        camera.layers.enable(bloomLayer)
        effectComposer.render()
        camera.layers.enableAll()
    })
    window.addEventListener("resize", () => { effectComposer.setSize(window.innerWidth, window.innerHeight) })
    return additiveBlendingPass
}
