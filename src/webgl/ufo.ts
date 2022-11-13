import { onBeforeRender } from "../hooks"
import { call } from "../util"
import extendShader from "./extend_material"
import { loadGLTF } from "./gltf"
import ObjectPool from "./object_pool"
import ufoFrag from "./ufo.frag"
import ufoVert from "./ufo.vert"

let i = 0
export const buildUFOPool = async () => {
    const uniforms = { time: { value: 0 }, distortion: { value: 0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })

    return (await ObjectPool.fromBuilder(async () => {
        const model = call(await loadGLTF("models/ufo.glb", 0.2), { rotateX: -Math.PI / 2, position: { set: [0.5, 0, 0] } })
        extendShader(model, { uniforms, vertexShader: ufoVert, fragmentShader: ufoFrag })
        return model
    })).onClone((copy) => {
        onBeforeRender.add((time) => {
            copy.rotation.set(-Math.PI / 2 + Math.sin(time * 0.01) * 0.05, Math.cos(time * 0.01) * 0.05, 0)
        })
    })
}
