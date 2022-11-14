import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import fogFrag from "./createFog.frag"
import fogVert from "./createFog.vert"

export default () => {
    const uniforms = { time: { value: 0.0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })

    return call(new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
        transparent: true,
        uniforms,
        vertexShader: fogVert,
        fragmentShader: fogFrag,
    })), { rotateX: -Math.PI / 2, scale: { setScalar: 4 }, position: { setY: -0.13 } })
}
