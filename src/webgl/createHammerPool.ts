import * as THREE from "three"
import { onBeforeRender, onUpdate } from "../hooks"
import { getState, subscribe } from "../saveData"
import createHammerPoolFrag from "./createHammerPool.frag"
import createHammerPoolVert from "./createHammerPool.vert"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import { overrideMaterial } from "./extendMaterial"
import loadGLTF from "./loadGLTF"
import ObjectPool from "./ObjectPool"

export default async (source: THREE.Object3D) => {
    const model = await loadGLTF("models/hammer.glb", 0.03)
    model.position.set(-0.01, 0, -0.06)  // move the center of the mass to the origin
    const uniforms = { stage: { value: getState().stage } }
    subscribe((state) => { uniforms.stage.value = state.stage })
    overrideMaterial(model, new THREE.ShaderMaterial({
        uniforms,
        vertexShader: createHammerPoolVert,
        fragmentShader: createHammerPoolFrag
    }))
    enableSelectiveBloom(model)

    const pool = new ObjectPool(new THREE.Object3D().add(model))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.x += Math.random() * 0.05
                copy.rotation.y = time * 0.01
                copy.rotation.z = Math.PI / 2
            })
        })

    const models = new Set<{
        time: number
        model: ReturnType<typeof pool.allocate>
    }>()

    onUpdate.add((t) => {
        const level = getState().upgrades.Hammer
        if (level === 0) { return }
        if (t % Math.ceil(60 / level) === 0) {
            const model = pool.allocate()
            model.position.copy(source.position)
            models.add({ time: 0, model })
        }
        for (const m of models) {
            m.time++
            m.model.position.x += 0.01
            m.model.position.y = Math.sin(m.time * 0.15) * 0.03
            m.model.position.z += (Math.random() - 0.5) * 0.01
            if (m.model.position.x > 2) {
                m.model.free()
                models.delete(m)
            }
        }
    })

    return pool
}
