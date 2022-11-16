import * as THREE from "three"
import { getRenderingOption } from "../debug"
import { onBeforeRender } from "../hooks"
import { call } from "../util"
import createFog from "./createFog"
import loadGLTF from "./loadGLTF"

export default () => {
    const stage = new THREE.Object3D()
    loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4)
        .then((m) => {
            onBeforeRender.add((time) => { m.rotation.y = time * 0.0001 })
            stage.add(
                call(m, { rotateX: -Math.PI / 2, position: { setY: -0.5 } }),
                new THREE.AmbientLight(0xffffff, 0.025),
                call(new THREE.DirectionalLight(0xf5eeba, 1.6), { position: { set: [0.3, 1, -1] } }),
                !getRenderingOption("fog") ? new THREE.Object3D() : createFog(),
            )
        })
        .catch(console.error)
    return stage
}
