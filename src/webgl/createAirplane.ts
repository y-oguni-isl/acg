import * as THREE from "three"
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"
import { xMax, xMin, yMax, yMin } from "../constants"
import { onBeforeRender, onUpdate } from "../hooks"
import { getState } from "../saveData"
import * as constants from "../constants"
import { loadGLTF } from "./webglUtil"

export default async () => {
    const airplane = (await loadGLTF("models/low-poly_airplane.glb", 0.05)) as Omit<THREE.Object3D, "userData"> & {
        userData: {
            velocity: THREE.Vector2
            /** The enemy that the autopilot algorithm is currently targeting. */
            autopilotTarget: { position: THREE.Vector3 } | undefined
        }
    }
    airplane.userData.velocity = new THREE.Vector2(0.0, 0.0)

    // Set the rotation of the airplane to (rotationX, rotationY, rotationZ) = (velocityX + simplexNoise(t), simplexNoise(t), simplexNoise(t))
    const rotationNoise = new SimplexNoise()
    onBeforeRender.add((time) => {
        airplane.rotation.set(
            airplane.userData.velocity.x * 0.3 + rotationNoise.noise(0, time * 0.0003) * (4 / 180 * Math.PI),
            Math.PI * 0.5 + rotationNoise.noise(1, time * 0.0003) * (4 / 180 * Math.PI),
            rotationNoise.noise(2, time * 0.0003) * (4 / 180 * Math.PI),
        )
    })

    // Keyboard events
    const pressedKeys = new Set<string>()
    window.addEventListener("keydown", (ev) => { pressedKeys.add(ev.code) })
    window.addEventListener("keyup", (ev) => { pressedKeys.delete(ev.code) })
    window.addEventListener("blur", () => { pressedKeys.clear() })
    onUpdate.add(() => {
        if (getState().stageTransitingTo !== null) { return }

        // Move the airplane by WASD keys (velocity += force)
        if (pressedKeys.has("KeyD") && !pressedKeys.has("KeyA")) { airplane.userData.velocity.x = Math.min(1, Math.max(-0.2, airplane.userData.velocity.x) + 0.05) }
        if (pressedKeys.has("KeyA") && !pressedKeys.has("KeyD")) { airplane.userData.velocity.x = Math.max(-1, Math.min(0.2, airplane.userData.velocity.x) - 0.05) }
        if (pressedKeys.has("KeyW") && !pressedKeys.has("KeyS")) { airplane.userData.velocity.y = Math.min(1, Math.max(-0.2, airplane.userData.velocity.y) + 0.05) }
        if (pressedKeys.has("KeyS") && !pressedKeys.has("KeyW")) { airplane.userData.velocity.y = Math.max(-1, Math.min(0.2, airplane.userData.velocity.y) - 0.05) }

        // Friction (velocity *= 0.8)
        if (pressedKeys.size === 0 ||
            pressedKeys.has("KeyA") && pressedKeys.has("KeyD") ||
            pressedKeys.has("KeyW") && pressedKeys.has("KeyS")) {
            airplane.userData.velocity.multiplyScalar(0.8)
        }

        // Limit the speed of the airplane
        if (airplane.userData.velocity.length() > 1) { airplane.userData.velocity.normalize() }

        // Update the position of the airplane (position += velocity)
        airplane.position.setZ(Math.min(xMax, Math.max(xMin, airplane.position.z + airplane.userData.velocity.x * 0.015)))
        airplane.position.setX(Math.min(yMax, Math.max(yMin, airplane.position.x + airplane.userData.velocity.y * 0.01)))
        if (pressedKeys.has("Space") && constants.isVerticalMoveUnlocked()) {
            airplane.position.y = Math.min(0.5, airplane.position.y + 0.005)
        } else {
            airplane.position.y = Math.max(0, airplane.position.y - 0.005)
        }

        // Autopilot
        if ((getState().getWeather()?.enabled ? getState().upgrades.Autopilot - 5 : getState().upgrades.Autopilot) > 0 &&
            pressedKeys.size === 0 &&
            airplane.userData.autopilotTarget) { // TODO: add a switch to disable the autopilot
            const autopilotSpeed = 0.1 * getState().upgrades.Autopilot
            if (Math.abs(airplane.userData.autopilotTarget.position.z - airplane.position.z) > 0.02) {
                airplane.userData.velocity.x = Math.min(1.0, Math.max(-1.0, airplane.userData.velocity.x + Math.sign(airplane.userData.autopilotTarget.position.z - airplane.position.z) * autopilotSpeed))
            }
        }
    })

    return airplane
}
