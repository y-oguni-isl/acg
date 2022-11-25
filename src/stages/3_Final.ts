import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { call, PromiseAll } from "../util"
import * as webgl from "../webgl"
import createSkyboxFrag from "./3_Final.frag"
import createSkyboxVert from "./3_Final.vert"
import type { EnemyPools, EnemyUserData } from "./types"

export default {
    createModel: () => {
        const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
        onBeforeRender.add((time) => { uniforms.time.value = time })
        window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })

        return webgl.enableSelectiveBloom(new THREE.Object3D().add(
            new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), new THREE.ShaderMaterial({
                uniforms,
                side: THREE.BackSide,
                vertexShader: createSkyboxVert,
                fragmentShader: createSkyboxFrag,
            })),
            webgl.enableSelectiveBloom(new THREE.AmbientLight(0xaaaaff, 0.2)),
            call(webgl.enableSelectiveBloom(new THREE.DirectionalLight(0xf5eeba, 0.4)), { position: { set: [0.3, 1, -1] } }),
        ))
    },
    visible: () => (getState().availableNews.aliensComing ?? false) && getState().upgrades["ATK×2"] > 0,
    createEnemyPools: async (): Promise<EnemyPools> => {
        const pools = await PromiseAll({
            alive: webgl.createEnemyPlanet().then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "Planet",
                time: 0,
                hp: 150000 * getState().getExplorationLv() * (500 ** getState().transcendence),
                update: () => { /* skip */ },
                onKilled: () => {
                    pools.dead.allocate().position.copy(copy.position)
                    getState().defeatedFinalBoss()
                },
                radius: 1,
                money: 10000 * getState().getExplorationLv() * (500 ** getState().transcendence),
                items: {},
            }))),
            dead: webgl.createEnemyPlanet().then((m) => m.onAllocate(() => ({ time: 0 }))),
            spawn: (t: number) => {
                if (pools.alive.children.length === 0 && !getState().canTranscend) {
                    pools.alive.allocate().position.set(4, 0, 0)
                }
            },
        }) satisfies EnemyPools
        return pools
    }
}
