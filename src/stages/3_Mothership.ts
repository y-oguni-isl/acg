import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { call } from "../util"
import * as webgl from "../webgl"
import fragmentShader from "./3_Mothership.frag"
import vertexShader from "./3_Mothership.vert"
import type { EnemyUserData, StageDefinition } from "./types"

const Mothership: StageDefinition = {
    createModel: () => {
        const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
        onBeforeRender.add((time) => { uniforms.time.value = time })
        window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })

        return webgl.enableSelectiveBloom(new THREE.Object3D().add(
            new THREE.Mesh(new THREE.BoxGeometry(8, 8, 8), new THREE.ShaderMaterial({ uniforms, side: THREE.BackSide, vertexShader, fragmentShader })),
            webgl.enableSelectiveBloom(new THREE.AmbientLight(0xaaaaff, 0.2)),
            call(webgl.enableSelectiveBloom(new THREE.DirectionalLight(0xf5eeba, 0.4)), { position: { set: [0.3, 1, -1] } }),
        ))
    },
    visible: () => (getState().availableNews.aliensComing ?? false) && getState().upgrades["ATK×2"] > 0,
    createEnemyPools: () => {
        const alive = webgl.createMothership().onAllocate((copy): EnemyUserData => ({
            name: "Mothership",
            time: 0,
            hp: 1200000 * getState().getExplorationLv() * (500 ** getState().transcendence),
            update: () => { /* skip */ },
            onKilled: () => {
                dead.allocate().position.copy(copy.position)
                getState().defeatedMothership()
            },
            radius: 1,
            money: 10000 * getState().getExplorationLv() * (500 ** getState().transcendence),
            items: {},
        }))
        const dead = webgl.createMothership().onAllocate(() => ({ time: 0 }))

        return Object.assign(new THREE.Object3D().add(alive, dead), {
            alive: () => [...alive.children],
            dead: () => [...dead.children],
            spawn: (t: number) => {
                if (alive.children.length === 0 && !getState().canTranscend) {
                    alive.allocate().position.set(4, 0, 0)
                }
            }
        })
    }
}

export default Mothership
