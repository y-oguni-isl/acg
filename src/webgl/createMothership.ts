import { onBeforeRender } from "../hooks"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import { extendMaterial, loadGLTF, ObjectPool } from "./webglUtil"
import fragmentShader from "./createMothership.frag"

/** Creates a {@link ObjectPool} for the enemy's mothership. */
export default async () => {
    const m = await loadGLTF("models/planet_megatropolis.glb", 2)
    extendMaterial(m, { fragmentShader })
    return new ObjectPool("mothership", enableSelectiveBloom(m))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.set(0, time * 0.0001, 0)
            })
        })
}
