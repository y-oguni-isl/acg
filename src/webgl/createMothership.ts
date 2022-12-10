import { onBeforeRender } from "../hooks"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import { extendMaterial, ObjectPool } from "./webglUtil"
import fragmentShader from "./createMothership.frag"
import models from "../models"

/** Creates an {@link ObjectPool} for the enemy's mothership. */
export default () => {
    const m = models["planet_megatropolis.glb"](2)
    extendMaterial(m, { fragmentShader })
    return new ObjectPool("mothership", enableSelectiveBloom(m))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.set(0, time * 0.0001, 0)
            })
        })
}
