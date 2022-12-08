import * as THREE from "three"
import { onBeforeRender, onCollisionDetection, onUpdate } from "../hooks"
import { getState, subscribe } from "../saveData"
import fragmentShader from "./hammer.frag"
import * as constants from "../constants"
import * as webgl from "../webgl"

/** Creates and moves 3D models of hammers, and performs collision detections against enemies. */
export default async (source: THREE.Object3D) => {
    const model = await webgl.loadGLTF("models/hammer_notexture.glb", 0.03)
    model.position.set(-0.01, 0, -0.06)  // move the center of the mass to the origin
    const uniforms = { daytime: { value: getState().stage === "Earth" } }
    subscribe((state) => { uniforms.daytime.value = state.stage === "Earth" })
    webgl.extendMaterial(model, { uniforms, fragmentShader })
    webgl.enableSelectiveBloom(model, { noDiffusion: true })

    const pool = new webgl.ObjectPool("hammer", new THREE.Object3D().add(model))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.x += Math.random() * 0.03 // FIXME: deltaTime
                copy.rotation.y = time * 0.01
                copy.rotation.z = Math.PI / 2
            })
        })
        .onAllocate(() => {
            const theta = (Math.random() - 0.5) * 2 * Math.PI / 4
            return { time: 0, velocity: new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0) }
        })
    webgl.enableSelectiveBloom(pool, { noDiffusion: true })

    onUpdate.add((t) => {
        // Create hammers
        const interval = constants.getInterval(getState()).Hammer
        if (interval && t % interval === 0) {
            const model = pool.allocate()
            model.position.copy(source.position)
        }

        // Move hammers
        for (const m of pool.children) {
            m.userData.time++
            m.position.x += m.userData.velocity.x * 0.01
            m.position.y = Math.sin(m.userData.time * 0.15) * 0.03
            m.position.z += m.userData.velocity.y * 0.01
            if (m.position.x > 4 || Math.abs(m.position.z) > 1) {
                m.free()
            }
        }
    })

    // Collision detection
    onCollisionDetection.add((enemies) => {
        for (const enemy of enemies) {
            for (const hammer of pool.children) {
                if (enemy.position.distanceTo(hammer.position) < enemy.userData.radius + 0.02) {
                    enemy.userData.hp -= constants.getAtk(getState()).Hammer ?? 0
                    hammer.free()
                }
            }
        }
    })

    return pool
}
