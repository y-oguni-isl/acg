import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import fragmentShader from "./createFog.frag"
import vertexShader from "./createFog.vert"

export default () => {
    const uniforms = { time: { value: 0.0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })

    return call(new THREE.Mesh(
        new THREE.PlaneGeometry(),
        new THREE.ShaderMaterial({ transparent: true, uniforms, vertexShader, fragmentShader })
    ), { rotateX: -Math.PI / 2, scale: { setScalar: 4 }, position: { setY: -0.13 } })
}
