import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import createStageTransitionPassFrag from "./createStageTransitionPass.frag"
import createStageTransitionPassVert from "./createStageTransitionPass.vert"

export default () => {
    let played = false
    const pass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            time: { value: 0 },
        },
        vertexShader: createStageTransitionPassVert,
        fragmentShader: createStageTransitionPassFrag,
    })
    return {
        pass,
        play: (callback: () => void) => {
            if (played) { return }
            played = true
            let time = 0
            const loop = (_: number, deltaTime: number) => {
                if (time < 1) {
                    time = Math.min(1, time + deltaTime * 0.001)
                } else if (time === 1) {
                    time += deltaTime * 0.001
                    callback()
                    getState().completeStageTransition()
                } else if (time < 2) {
                    time = Math.min(2, time + deltaTime * 0.001)
                } else {
                    onBeforeRender.delete(loop)
                    played = false
                }
                pass.uniforms.time!.value = time
            }
            onBeforeRender.add(loop)
        }
    }
}
