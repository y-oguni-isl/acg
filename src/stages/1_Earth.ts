import * as THREE from "three"
import { renderingOptionsStore } from "../debug"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import { call } from "../util"
import * as webgl from "../webgl"
import type { EnemyUserData, StageDefinition } from "./types"
import * as constants from "../constants"
import models from "../models"

const Earth: StageDefinition = {
    createModel: () => {
        const stage = new THREE.Object3D()
        const m = models["sky_pano_-_grand_canyon_yuma_point.glb"](4)
        onBeforeRender.add((time) => { m.rotation.y = time * 0.0001 })
        stage.add(
            call(m, { rotateX: -Math.PI / 2, position: { setY: -0.5 } }),
            webgl.enableSelectiveBloom(new THREE.AmbientLight(0xffffff, 0.025)),
            call(webgl.enableSelectiveBloom(new THREE.DirectionalLight(0xf5eeba, 1.6)), { position: { set: [0.3, 1, -1] } }),
            !renderingOptionsStore.getState().getRenderingOption("fog") ? new THREE.Object3D() : webgl.createCloud(),
        )
        return stage
    },
    visible: () => getState().availableNews.aliensComing ?? false,
    createEnemyPools: () => {
        const birdAlive = webgl.createBirdPool(true).onAllocate((copy): EnemyUserData => ({
            name: "Bird",
            time: 0,
            hp: 15 * (1 + Math.random()) * getState().getExplorationLv() * (500 ** getState().transcendence),
            update: () => { copy.position.x -= 0.01 },
            onKilled: () => { birdDead.allocate().position.copy(copy.position) },
            radius: 0.03,
            money: 1 * getState().getExplorationLv() * (500 ** getState().transcendence),
            items: { Food: Math.floor(1 * constants.getVacuumGain(getState()) * getState().getExplorationLv() * (500 ** getState().transcendence)) },
        }))
        const birdDead = webgl.createBirdPool(false).onAllocate(() => ({ time: 0 }))
        const weatherAlive = webgl.createUFOPool().onAllocate((copy): EnemyUserData => ({
            name: "Weather Effect UFO",
            time: 0,
            hp: 300 * getState().upgrades.Laser,
            update: () => { /* skip*/ },
            onKilled: () => {
                weatherDead.allocate().position.copy(copy.position)
                getState().stopWeatherEffect()
                getState().completeTutorial("weatherEffect")
            },
            radius: 0.03,
            money: 400 * getState().upgrades.Laser,
            items: { Scrap: Math.floor(1 * constants.getVacuumGain(getState()) * getState().getExplorationLv() * (500 ** getState().transcendence)) },
        }))
        const weatherDead = webgl.createUFOPool().onAllocate(() => ({ time: 0 }))

        return Object.assign(new THREE.Object3D().add(birdAlive, birdDead, weatherAlive, weatherDead), {
            alive: () => [...birdAlive.children, ...weatherAlive.children],
            dead: () => [...birdDead.children, ...weatherDead.children],
            spawn: (t: number) => {
                if (t % 5 === 0) {
                    birdAlive.allocate().position.set(2, 0, ((t * 0.06) % 1) * (constants.xMax - constants.xMin) + constants.xMin)
                }
                if (getState().getWeather() && weatherAlive.children.length === 0) {
                    weatherAlive.allocate().position.set(1, 0, Math.random() * (constants.xMax - constants.xMin) + constants.xMin)
                }
            }
        })
    },
}

export default Earth
