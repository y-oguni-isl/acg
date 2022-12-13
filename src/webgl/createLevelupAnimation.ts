import * as THREE from "three"
import * as Quarks from "three.quarks"
import { onBeforeRender } from "../hooks"
import { subscribe } from "../saveData"

export default async (source: THREE.Object3D) => {
    const batchSystem = new Quarks.BatchedParticleRenderer()
    const loader = new Quarks.QuarksLoader(batchSystem)
    loader.setCrossOrigin("")
    const emitter = await loader.loadAsync("vfx/upgrade.json")
    onBeforeRender.add((_, deltaTime) => {
        emitter.position.copy(source.position).y -= 0.07
        batchSystem.update(deltaTime * 0.001)
    })
    const forEachSystem = (f: (obj: Quarks.ParticleEmitter<THREE.Event>) => void) => {
        emitter.traverse((obj) => {
            if (obj instanceof Quarks.ParticleEmitter) {
                f(obj)
            }
        })
    }
    forEachSystem((obj) => { obj.system.pause() })
    subscribe((state, prev) => {
        if (state.upgrades === prev.upgrades) { return }
        forEachSystem((obj) => {
            if (obj.system.time === 0 || obj.system.time >= obj.system.duration) {
                obj.system.restart()
            }
        })
    })
    return new THREE.Group().add(batchSystem, emitter)
}