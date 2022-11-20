import * as THREE from "three"
import { getRenderingOption } from "../debug"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { PromiseAll, call } from "../util"
import * as webgl from "../webgl"
import type { EnemyPools, EnemyUserData } from "./types"
import { xMax, xMin } from "../constants"

export default {
    createModel: () => {
        const stage = new THREE.Object3D()
        webgl.loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4)
            .then((m) => {
                onBeforeRender.add((time) => { m.rotation.y = time * 0.0001 })
                stage.add(
                    call(m, { rotateX: -Math.PI / 2, position: { setY: -0.5 } }),
                    new THREE.AmbientLight(0xffffff, 0.025),
                    call(new THREE.DirectionalLight(0xf5eeba, 1.6), { position: { set: [0.3, 1, -1] } }),
                    !getRenderingOption("fog") ? new THREE.Object3D() : webgl.createFog(),
                )
            })
            .catch(console.error)
        return stage
    },
    visible: () => getState().availableNews.has("aliensComing"),
    createEnemyPools: async (): Promise<EnemyPools> => {
        const pools = await PromiseAll({
            alive: webgl.createBirdPool(true).then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "Bird",
                time: 0,
                hp: 15 * (1 + Math.random()) * (500 ** getState().transcendence),
                update: () => { copy.position.x -= 0.01 },
                onKilled: () => { pools.dead.allocate().position.copy(copy.position) },
                radius: 0.03,
                money: 1 * (500 ** getState().transcendence),
            }))),
            dead: webgl.createBirdPool(false).then((m) => m.onAllocate(() => ({ time: 0 }))),
            weatherAlive: webgl.createUFOPool().then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "Weather Effect UFO",
                time: 0,
                hp: 1500 * (500 ** getState().transcendence),
                update: () => { /* skip*/ },
                onKilled: () => {
                    pools.weatherDead.allocate().position.copy(copy.position)
                    getState().stopWeatherEffect()
                    getState().completeTutorial("weatherEffect")
                },
                radius: 0.03,
                money: 1000 * (500 ** getState().transcendence),
            }))),
            weatherDead: webgl.createUFOPool().then((m) => m.onAllocate(() => ({ time: 0 }))),
            spawn: (t: number) => {
                if (t % 5 === 0) {
                    pools.alive.allocate().position.set(2, 0, ((t * 0.06) % 1) * (xMax - xMin) + xMin)
                }
                if (getState().getWeather()?.enabled && pools.weatherAlive.children.length === 0) {
                    pools.weatherAlive.allocate().position.set(1, 0, Math.random() * (xMax - xMin) + xMin)
                }
            }
        })
        return pools
    },
}
