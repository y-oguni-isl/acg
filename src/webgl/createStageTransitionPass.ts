import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { onBeforeRender } from "../hooks"
import { getState } from "../saveData"
import fragmentShader from "./createStageTransitionPass.frag"
import vertexShader from "./createStageTransitionPass.vert"

/** Creates a ShaderPass (postprocessing shader) that is applied when the player is moving to other stage. */
export default () => {
    let played = false
    const pass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            time: { value: 0 },
        },
        vertexShader,
        fragmentShader,
    })
    return {
        pass,
        /** This function fades in for 1 second, moves to the destination stage and calls the callback, and fades out for 1 second.  */
        play: (callback: () => void) => {
            if (played) { return }
            played = true
            let time = 0
            const loop = (_: number, deltaTime: number) => {
                if (time < 1) { // fade in
                    time = Math.min(1, time + deltaTime * 0.001)
                } else if (time === 1) { // move to the destination stage
                    time += deltaTime * 0.001
                    callback()
                    getState().completeStageTransition()
                } else if (time < 2) { // fade out
                    time = Math.min(2, time + deltaTime * 0.001)
                } else { // end
                    onBeforeRender.delete(loop)
                    played = false
                }
                pass.uniforms.time!.value = time
            }
            onBeforeRender.add(loop)
        }
    }
}