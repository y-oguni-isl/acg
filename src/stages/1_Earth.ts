import * as THREE from "three"
import { getRenderingOption } from "../debug"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { PromiseAll, call, ObjectValues } from "../util"
import * as webgl from "../webgl"
import type { EnemyPools, EnemyUserData, StageDefinition } from "./types"
import * as constants from "../constants"

const Earth: StageDefinition = {
    createModel: () => {
        const stage = new THREE.Object3D()
        webgl.loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4)
            .then((m) => {
                onBeforeRender.add((time) => { m.rotation.y = time * 0.0001 })
                stage.add(
                    call(m, { rotateX: -Math.PI / 2, position: { setY: -0.5 } }),
                    webgl.enableSelectiveBloom(new THREE.AmbientLight(0xffffff, 0.025)),
                    call(webgl.enableSelectiveBloom(new THREE.DirectionalLight(0xf5eeba, 1.6)), { position: { set: [0.3, 1, -1] } }),
                    !getRenderingOption("fog") ? new THREE.Object3D() : webgl.createCloud(),
                )
            })
            .catch(console.error)
        return stage
    },
    visible: () => getState().availableNews.aliensComing ?? false,
    createEnemyPools: async (): Promise<THREE.Object3D & EnemyPools> => {
        const pools = await PromiseAll({
            alive: webgl.createBirdPool(true).then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "Bird",
                time: 0,
                hp: 15 * (1 + Math.random()) * getState().getExplorationLv() * (500 ** getState().transcendence),
                update: () => { copy.position.x -= 0.01 },
                onKilled: () => { pools.dead.allocate().position.copy(copy.position) },
                radius: 0.03,
                money: 1 * getState().getExplorationLv() * (500 ** getState().transcendence),
                items: { Food: Math.floor(1 * constants.getVacuumGain(getState()) * getState().getExplorationLv() * (500 ** getState().transcendence)) },
            }))),
            dead: webgl.createBirdPool(false).then((m) => m.onAllocate(() => ({ time: 0 }))),
            weatherAlive: webgl.createUFOPool().then((m) => m.onAllocate((copy): EnemyUserData => ({
                name: "Weather Effect UFO",
                time: 0,
                hp: 1500 * getState().getExplorationLv() * getState().upgrades.Laser,
                update: () => { /* skip*/ },
                onKilled: () => {
                    pools.weatherDead.allocate().position.copy(copy.position)
                    getState().stopWeatherEffect()
                    getState().completeTutorial("weatherEffect")
                },
                radius: 0.03,
                money: 400 * getState().getExplorationLv() * getState().upgrades.Laser,
                items: { Scrap: Math.floor(1 * constants.getVacuumGain(getState()) * getState().getExplorationLv() * (500 ** getState().transcendence)) },
            }))),
            weatherDead: webgl.createUFOPool().then((m) => m.onAllocate(() => ({ time: 0 }))),
        }) satisfies Omit<EnemyPools, "spawn">
        return Object.assign(new THREE.Object3D().add(...ObjectValues(pools)), pools, {
            spawn: (t: number) => {
                if (t % 5 === 0) {
                    pools.alive.allocate().position.set(2, 0, ((t * 0.06) % 1) * (constants.xMax - constants.xMin) + constants.xMin)
                }
                if (getState().getWeather() && pools.weatherAlive.children.length === 0) {
                    pools.weatherAlive.allocate().position.set(1, 0, Math.random() * (constants.xMax - constants.xMin) + constants.xMin)
                }
            }
        })
    },
}

export default Earth
