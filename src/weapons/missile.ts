import * as THREE from "three"
import { onUpdate } from "../hooks"
import { getState, subscribe } from "../saveData"
import * as constants from "../constants"
import * as webgl from "../webgl"
import fragmentShader from "./missile.frag"
import models from "../models"
import { Weapon } from "./type"

/** Creates and moves 3D models of missiles, and performs collision detections against enemies. */
export default (source: THREE.Object3D) => {
    const model = models["ballistic_missile.glb"](0.03)
    model.position.set(-0.01, 0, -0.06)  // move the center of the mass to the origin
    const uniforms = { daytime: { value: getState().stage === "Earth" } }
    subscribe((state) => { uniforms.daytime.value = state.stage === "Earth" })
    webgl.extendMaterial(model, { uniforms, fragmentShader })
    webgl.enableSelectiveBloom(model)

    const pool = new webgl.ObjectPool("missile", new THREE.Object3D().add(model))
        .onAllocate(() => {
            const theta = (Math.random() - 0.5) * 2 * Math.PI / 4
            return { time: 0, velocity: new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0) }
        })
    webgl.enableSelectiveBloom(pool)

    onUpdate.add((t) => {
        // Create missiles
        const interval = constants.getInterval(getState()).Missile
        if (interval && t % interval === 0 && (getState().items.Scrap ?? 0) >= 1000) {
            getState().addItems({ Scrap: -1000 })
            const model = pool.allocate()
            model.position.copy(source.position)
        }

        // Move missiles
        for (const m of pool.children) {
            m.userData.time++
            m.position.x += m.userData.velocity.x * 0.02
            m.position.z += m.userData.velocity.y * 0.02
            m.lookAt(m.position.clone().add(new THREE.Vector3(m.userData.velocity.x, 0, m.userData.velocity.y)))
            if (m.position.x > 4 || Math.abs(m.position.z) > 1) {
                m.free()
            }
        }
    })

    // Collision detection
    return {
        obj: pool,
        doDamage: (enemies) => {
            for (const enemy of enemies) {
                for (const missile of pool.children) {
                    if (enemy.position.distanceTo(missile.position) < enemy.userData.radius + 0.02) {
                        enemy.userData.hp -= constants.getAtk(getState()).Missile ?? 0
                        missile.free()
                    }
                }
            }
        },
    } satisfies Weapon
}
