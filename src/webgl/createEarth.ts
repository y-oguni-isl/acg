import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import fragmentShader from "./createEarth.frag"
import vertexShader from "./createEarth.vert"

/** Creates a 3D model for Earth that is shown in stage 2. */
export default (
    opts: {
        seaColor: THREE.Vector3,
        continentsColor: THREE.Vector3,
        hasCloud: boolean,
        coastline: boolean,
    } = {
            seaColor: new THREE.Vector3(73.0, 300.0, 800.0).divideScalar(255).multiplyScalar(0.2),
            continentsColor: new THREE.Vector3(74.0, 53.0, 24.0).divideScalar(255).multiplyScalar(0.1),
            hasCloud: true,
            coastline: true,
        },
) => {
    const uniforms = {
        time: { value: 0 },
        seaColor: { value: opts.seaColor },
        continentsColor: { value: opts.continentsColor },
        hasCloud: { value: opts.hasCloud },
        coastline: { value: opts.coastline },
    }

    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 6), new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader }))

    onBeforeRender.add((t, deltaTime) => {
        uniforms.time.value = t * 0.0001
        // mesh.rotateX(deltaTime * 0.0001)
        mesh.rotateZ(deltaTime * 0.0001)
    })

    return mesh
}
