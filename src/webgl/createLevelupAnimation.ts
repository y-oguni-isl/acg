import * as THREE from "three"
import * as Quarks from "three.quarks"
import { onBeforeRender } from "../hooks"
import { subscribe } from "../saveData"
import { forEachSystem } from "./webglUtil"

export default async (source: THREE.Object3D) => {
    const batchSystem = new Quarks.BatchedParticleRenderer()
    const loader = new Quarks.QuarksLoader(batchSystem)
    loader.setCrossOrigin("")
    const emitter = await loader.loadAsync("vfx/upgrade.json") // This is the same as loader.load() except it is easier to use
    onBeforeRender.add((_, deltaTime) => {
        emitter.position.copy(source.position).y -= 0.07
        batchSystem.update(deltaTime * 0.001)
    })

    forEachSystem(emitter, (obj) => { obj.system.pause() })

    // subscribe() is called whne the game state is changed, with the current state `state` and the previous state `prev`.
    subscribe((state, prev) => {
        if (state.upgrades === prev.upgrades) { return }
        forEachSystem(emitter, (obj) => {
            if (obj.system.time === 0 || obj.system.time >= obj.system.duration) {
                obj.system.restart()
            }
        })
    })

    return new THREE.Group().add(batchSystem, emitter)
}