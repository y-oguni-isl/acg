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

    const models = new ObjectPool(new THREE.Object3D().add(model))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.x += Math.random() * 0.05
                copy.rotation.y = time * 0.01
                copy.rotation.z = Math.PI / 2
            })
        })
        .onAllocate(() => ({ time: 0 }))

    onUpdate.add((t) => {
        const level = getState().upgrades.Hammer
        if (level === 0) { return }
        if (t % Math.ceil(60 / level) === 0) {
            const model = models.allocate()
            model.position.copy(source.position)
        }
        for (const m of models.children) {
            m.userData.time++
            m.position.x += 0.01
            m.position.y = Math.sin(m.userData.time * 0.15) * 0.03
            m.position.z += (Math.random() - 0.5) * 0.01
            if (m.position.x > 2) {
                m.free()
            }
        }
    })

    return models
}
