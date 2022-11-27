import { onBeforeRender } from "../hooks"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import { extendMaterial, loadGLTF, ObjectPool } from "./webglUtil"
import fragmentShader from "./createEnemyPlanet.frag"

export default async () => {
    const m = await loadGLTF("models/planet_megatropolis.glb", 2)
    extendMaterial(m, { fragmentShader })
    return new ObjectPool("enemyPlanet", enableSelectiveBloom(m))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.set(0, time * 0.0001, 0)
            })
        })
}
