import * as THREE from "three"
import { ShaderMaterial } from "three"
import { getRenderingOption } from "../dom"
import { onBeforeRender } from "../hooks"
import { getState, subscribe } from "../saveData"
import { call } from "../util"
import createFog from "./createFog"
import createSkyboxFrag from "./createStages.frag"
import createSkyboxVert from "./createStages.vert"
import loadGLTF from "./loadGLTF"

export default () => {
    const stages = [
        new THREE.Group(),
        new THREE.Group(),
    ] as const

    // Switch visible stages
    for (const stage of stages) { stage.visible = false }
    stages[getState().stage].visible = true
    subscribe((state, prev) => {
        if (state.stage === prev.stage) { return }
        for (const stage of stages) { stage.visible = false }
        stages[state.stage].visible = true
    })

    // stage 1
    loadGLTF("models/sky_pano_-_grand_canyon_yuma_point.glb", 4)
        .then((m) => {
            onBeforeRender.add((time) => { m.rotation.y = time * 0.0001 })
            stages[0]!.add(
                call(m, { rotateX: -Math.PI / 2, position: { setY: -0.5 } }),
                new THREE.AmbientLight(0xffffff, 0.025),
                call(new THREE.DirectionalLight(0xf5eeba, 1.6), { position: { set: [0.3, 1, -1] } }),
                !getRenderingOption("fog") ? new THREE.Object3D() : createFog(),
            )
        })
        .catch(console.error)

    // stage 2
    const uniforms = { u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }, time: { value: 0 } }
    onBeforeRender.add((time) => { uniforms.time.value = time })
    window.addEventListener("resize", () => { uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight) })
    stages[1].add(
        new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new ShaderMaterial({
            uniforms,
            side: THREE.BackSide,
            vertexShader: createSkyboxVert,
            fragmentShader: createSkyboxFrag,
        })),
        new THREE.AmbientLight(0xaaaaff, 0.2),
        call(new THREE.DirectionalLight(0xf5eeba, 0.4), { position: { set: [0.3, 1, -1] } }),
    )

    return new THREE.Group().add(...stages)
}
