import * as THREE from "three"
import { ShaderMaterial } from "three"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import createSkyboxFrag from "./createStage2.frag"
import createSkyboxVert from "./createStage2.vert"

export default () => {
    const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })
    window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })

    return new THREE.Object3D().add(
        new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new ShaderMaterial({
            uniforms,
            side: THREE.BackSide,
            vertexShader: createSkyboxVert,
            fragmentShader: createSkyboxFrag,
        })),
        new THREE.AmbientLight(0xaaaaff, 0.2),
        call(new THREE.DirectionalLight(0xf5eeba, 0.4), { position: { set: [0.3, 1, -1] } }),
    )
}
