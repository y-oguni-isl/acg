import * as THREE from "three"
import { domStore } from "../dom"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import fragmentShader from "./createCloud.frag"
import vertexShader from "./createCloud.vert"

export default () => {
    const uniforms = {
        time: { value: 0.0 },
        matrixWorld: { value: new THREE.Matrix4() },
        cameraPos: { value: new THREE.Vector3() },
        highQuality: { value: false },
    }

    const mesh = call(new THREE.Mesh(
        new THREE.PlaneGeometry(),
        new THREE.ShaderMaterial({ transparent: true, uniforms, vertexShader, fragmentShader })
    ), { rotateX: -Math.PI / 2, scale: { setScalar: 4 }, position: { setY: -0.13 } })

    onBeforeRender.add((time, _, camera) => {
        uniforms.highQuality.value = domStore.getState().quality === "high"
        uniforms.time.value = time
        uniforms.matrixWorld.value.copy(mesh.matrixWorld)
        uniforms.cameraPos.value.copy(camera.position)
    })

    return mesh
}
