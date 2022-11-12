import * as THREE from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import type { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

export const bloomLayer = 1

/**
 * Add bloom effects to objects marked with `obj.layers.enable(bloomLayer)`.
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
const createSelectiveBloomPass = (renderer: THREE.WebGLRenderer, renderPass: RenderPass) => {
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
            vertexShader: /* glsl */`
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
            fragmentShader: /* glsl */`
uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;
void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = pow(gl_FragColor.rgb + color2.rgb * color2.a, /* TODO: I don't know why but using this filter makes the display darker, so I've corrected it here. */vec3(1.0 / 1.9));
}`,
            defines: {},
        }),
        'texture1',
    )
    additiveBlendingPass.needsSwap = true
    return {
        setSize: (width: number, height: number) => effectComposer.setSize(width, height),
        render: (camera: THREE.Camera) => {
            camera.layers.disableAll()
            camera.layers.enable(bloomLayer)
            effectComposer.render()
            camera.layers.enableAll()
        },
        pass: additiveBlendingPass,
    }
}

export default createSelectiveBloomPass
