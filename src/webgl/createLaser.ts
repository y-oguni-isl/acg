import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { call } from "../util"
import laserFrag from "./createLaser.frag"
import laserVert from "./createLaser.vert"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"

/** Creates a 3D model of a laser. */
export default (source: THREE.Object3D) => {
    const uniforms = {
        time: { value: 0.0 },
        count: { value: 0.0 },
    }

    onBeforeRender.add((time) => {
        uniforms.time.value = time
        uniforms.count.value = getState().upgrades.Laser
        call(mesh, { position: { setX: source.position.x + 1, setZ: source.position.z } })
    })

    const mesh = call(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
        blending: THREE.AdditiveBlending,
        transparent: true,
        uniforms,
        vertexShader: laserVert,
        fragmentShader: laserFrag,
    })), {
        rotateY: -Math.PI / 2,
        rotateX: -Math.PI / 2,
        scale: { set: [0.25, 2, 0] },
        position: { set: [1, 0.01, 0] },
    })
    enableSelectiveBloom(mesh)
    mesh.renderOrder = 1

    return mesh
}
