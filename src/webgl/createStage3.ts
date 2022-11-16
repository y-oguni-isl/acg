import * as THREE from "three"
import { Object3D, ShaderMaterial } from "three"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import createSkyboxFrag from "./createStage3.frag"
import createSkyboxVert from "./createStage3.vert"
import { extendMaterial } from "./extendMaterial"
import loadGLTF from "./loadGLTF"

export default () => {
    const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })
    window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })

    const group = new THREE.Object3D()
    loadGLTF("models/planet_megatropolis.glb", 2)
        .then((m) => {
            extendMaterial(m, {
                fragmentShader: /* glsl */`
uniform float time;

void main() {
    super();
    // gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}`
            })
            const rot = new Object3D().add(call(m, { position: { setX: 4 } }))
            group.add(enableSelectiveBloom(rot))
            onBeforeRender.add((time) => {
                m.rotation.set(0, time * 0.0001, 0)
            })
        })
        .catch(console.error)

    return enableSelectiveBloom(group.add(
        new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), new ShaderMaterial({
            uniforms,
            side: THREE.BackSide,
            vertexShader: createSkyboxVert,
            fragmentShader: createSkyboxFrag,
        })),
        new THREE.AmbientLight(0xaaaaff, 0.2),
        call(new THREE.DirectionalLight(0xf5eeba, 0.4), { position: { set: [0.3, 1, -1] } }),
    ))
}
