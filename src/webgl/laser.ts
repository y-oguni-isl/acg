import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../save_data"
import { call } from "../util"
import laserFrag from "./laser.frag"
import laserVert from "./laser.vert"
import { bloomLayer } from "./selective_bloom"

/** Creates a 3D model of a laser. */
const createLaser = (source: THREE.Object3D) => {
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
        layers: { enable: bloomLayer },
    })
    mesh.renderOrder = 1

    return mesh
}

export default createLaser
