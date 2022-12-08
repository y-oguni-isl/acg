import * as THREE from "three"
import { Collidable, onBeforeRender, onCollisionDetection, onEnemyRemoved } from "../hooks"
import { getState } from "../saveData"
import { call } from "../util"
import fragmentShader from "./laser.frag"
import vertexShader from "./laser.vert"
import * as constants from "../constants"
import { ephemeralDOMStore } from "../dom"
import * as webgl from "../webgl"

/** Creates and moves 3D models of lasers, and performs collision detections against enemies. */
export default async (source: THREE.Object3D) => {
    const uniforms = {
        time: { value: 0.0 },
        count: { value: 0.0 },
    }

    const model = call(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
        blending: THREE.AdditiveBlending,
        transparent: true,
        uniforms,
        vertexShader,
        fragmentShader,
    })), {
        rotateY: -Math.PI / 2,
        rotateX: -Math.PI / 2,
        scale: { set: [0.25, 2, 0] },
        position: { set: [1, 0.01, 0] },
    })
    webgl.enableSelectiveBloom(model)
    model.renderOrder = 1

    // Move the laser to match the player's position
    onBeforeRender.add((time) => {
        uniforms.time.value = time
        uniforms.count.value = getState().upgrades.Laser
        call(model, { position: { setX: source.position.x + 1, setY: source.position.y + 0.01, setZ: source.position.z } })
    })

    // Hit effects: Hit effects are managed per enemy and are only displayed when the laser is hitting an enemy.
    const laserHitEffects = new webgl.ObjectPool("hitEffect", webgl.enableSelectiveBloom(new THREE.Mesh(new THREE.IcosahedronGeometry(0.006), new THREE.MeshBasicMaterial({ color: 0xff66ff }))))
    const laserHitEffectTargetMap = new WeakMap<Collidable, ReturnType<typeof laserHitEffects.allocate>>()

    // Collision detection
    onCollisionDetection.add((enemies) => {
        for (const enemy of enemies) {
            if (Math.abs(enemy.position.z - source.position.z) < enemy.userData.radius && Math.abs(enemy.position.y - source.position.y) < enemy.userData.radius && enemy.position.x > source.position.x) {
                // Show a hit effect
                laserHitEffectTargetMap.emplace(enemy, { insert: () => laserHitEffects.allocate() })
                    .position.copy(enemy.position.clone()).setZ(source.position.z)

                // Damage
                enemy.userData.hp -= constants.getAtk(getState()).Laser
                ephemeralDOMStore.getState().setEnemyStatus({ hp: enemy.userData.hp, name: enemy.userData.name, money: enemy.userData.money, items: enemy.userData.items })
            } else { // No collisions
                // Delete the hit effect when
                if (laserHitEffectTargetMap.has(enemy)) {
                    laserHitEffectTargetMap.get(enemy)!.free()
                    laserHitEffectTargetMap.delete(enemy)
                }
            }
        }
    })
    onEnemyRemoved.add((obj) => {
        laserHitEffectTargetMap.get(obj)?.free()
        laserHitEffectTargetMap.delete(obj)
    })

    return new THREE.Group().add(model, laserHitEffects)
}
