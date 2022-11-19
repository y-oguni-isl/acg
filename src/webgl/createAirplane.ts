import * as THREE from "three"
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"
import { onBeforeRender } from "../hooks"
import loadGLTF from "./loadGLTF"

export default async () => {
    const airplane = (await loadGLTF("models/low-poly_airplane.glb", 0.05)) as Omit<THREE.Object3D, "userData"> & { userData: { velocity: THREE.Vector2 } }
    airplane.userData.velocity = new THREE.Vector2(0.0, 0.0)
    {
        const rotationNoise = new SimplexNoise()
        onBeforeRender.add((time) => {
            // Set the rotation of the airplane to (rotationX, rotationY, rotationZ) = (velocityX + simplexNoise(t), simplexNoise(t), simplexNoise(t))
            airplane.rotation.set(
                airplane.userData.velocity.x * 0.3 + rotationNoise.noise(0, time * 0.0003) * (4 / 180 * Math.PI),
                Math.PI * 0.5 + rotationNoise.noise(1, time * 0.0003) * (4 / 180 * Math.PI),
                rotationNoise.noise(2, time * 0.0003) * (4 / 180 * Math.PI),
            )
        })
    }
    return airplane
}
