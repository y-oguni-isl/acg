import * as THREE from "three"
import { ShaderMaterial } from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { call, PromiseAll } from "../util"
import fragmentShader from "./2_Universe.frag"
import vertexShader from "./2_Universe.vert"
import * as webgl from "../webgl"
import type { EnemyPools, EnemyUserData, StageDefinition } from "./types"
import * as constants from "../constants"

const Universe: StageDefinition = {
    createModel: () => {
        const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
        onBeforeRender.add((time) => { uniforms.time.value = time })
        window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })

        return new THREE.Object3D().add(
            new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6), new ShaderMaterial({ uniforms, side: THREE.BackSide, vertexShader, fragmentShader })),
            webgl.enableSelectiveBloom(call(webgl.createEarth(), { position: { set: [0.5, -2, 0] }, scale: { multiplyScalar: 2 } })),
            webgl.enableSelectiveBloom(new THREE.AmbientLight(0xaaaaff, 0.2)),
            call(webgl.enableSelectiveBloom(new THREE.DirectionalLight(0xf5eeba, 0.4)), { position: { set: [0.3, 1, -1] } }),
        )
    },
    visible: () => getState().availableNews.aliensComing ?? false,
    createEnemyPools: async (): Promise<EnemyPools> => {
        const pools = await PromiseAll({
            alive: webgl.createUFOPool().then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "UFO",
                time: 0,
                hp: 1000 * (1 + Math.random()) * getState().getExplorationLv() * (500 ** getState().transcendence),
                update: () => {
                    if (copy.userData.time % 80 <= 3) { // before teleportation
                        copy.scale.copy(copy.getOriginalScale().multiply(new THREE.Vector3(1, 1 - (copy.userData.time % 80) / 3, 1)))
                    } else if (copy.userData.time % 80 === 3 + 1) {  // teleportation
                        copy.position.x -= 0.35 + Math.random() * 0.2
                        copy.position.z = Math.max(constants.xMin, Math.min(constants.xMax, copy.position.z + (Math.random() - 0.5) * 0.2))
                    } else if (copy.userData.time % 80 <= 3 + 1 + 3) { // after teleportation
                        copy.scale.copy(copy.getOriginalScale().multiply(new THREE.Vector3(1, (copy.userData.time % 80 - (3 + 1)) / 3, 1)))
                    } else {
                        copy.position.x -= 0.005
                    }
                },
                onKilled: () => { pools.dead.allocate().position.copy(copy.position) },
                radius: 0.03,
                money: 500 * getState().getExplorationLv() * (500 ** getState().transcendence),
                items: { Scrap: Math.floor(1 * constants.getVacuumGain(getState()) * getState().getExplorationLv() * (500 ** getState().transcendence)) }
            }))),
            dead: webgl.createUFOPool().then((m) => m.onAllocate(() => ({ time: 0 }))),
            spawn: (t: number) => {
                if (t % 31 === 0 && (getState().availableNews.aliensComing ?? false)) {
                    pools.alive.allocate().position.set(2, 0, ((t * 0.06) % 1) * (constants.xMax - constants.xMin) + constants.xMin)
                }
            },
        }) satisfies EnemyPools
        return pools
    },
}

export default Universe
