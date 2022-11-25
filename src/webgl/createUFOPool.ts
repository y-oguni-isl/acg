import { onBeforeRender } from "../hooks"
import { call } from "../util"
import { extendMaterial, loadGLTF, ObjectPool } from "./webglUtil"
import ufoFrag from "./createUFOPool.frag"
import ufoVert from "./createUFOPool.vert"

export default async () => {
    const uniforms = { time: { value: 0 }, distortion: { value: 0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })
    const model = call(await loadGLTF("models/ufo.glb", 0.2), { rotateX: -Math.PI / 2, position: { set: [0.5, 0, 0] } })
    extendMaterial(model, { uniforms, vertexShader: ufoVert, fragmentShader: ufoFrag })

    return new ObjectPool("ufo", model).onClone((copy) => {
        onBeforeRender.add((time) => {
            copy.rotation.set(-Math.PI / 2 + Math.sin(time * 0.01) * 0.05, Math.cos(time * 0.01) * 0.05, 0)
        })
    })
}
