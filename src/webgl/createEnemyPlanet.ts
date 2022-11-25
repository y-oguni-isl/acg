import { onBeforeRender } from "../hooks"
import { enableSelectiveBloom } from "./createSelectiveBloomPass"
import extendMaterial from "./extendMaterial"
import loadGLTF from "./loadGLTF"
import ObjectPool from "./ObjectPool"

export default async () => {
    const m = await loadGLTF("models/planet_megatropolis.glb", 2)
    extendMaterial(m, {
        fragmentShader: /* glsl */`
uniform float time;

void main() {
super();
// gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}`
    })
    return new ObjectPool("enemyPlanet", enableSelectiveBloom(m))
        .onClone((copy) => {
            onBeforeRender.add((time) => {
                copy.rotation.set(0, time * 0.0001, 0)
            })
        })
}
