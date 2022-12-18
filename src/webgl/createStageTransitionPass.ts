import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { updatePerSecond } from "../constants"
import { onUpdate } from "../hooks"
import { getState } from "../saveData"
import fragmentShader from "./createStageTransitionPass.frag"
import vertexShader from "./createStageTransitionPass.vert"

/** Creates a ShaderPass (postprocessing shader) that is applied when the player is moving to other stage. */
export default () => {
    const pass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            opacity: { value: 0 },
        },
        vertexShader,
        fragmentShader,
    })
    pass.enabled = false
    return {
        pass,
        /** This function fades in for 1 second, moves to the destination stage and calls the callback, and fades out for 1 second.  */
        play: (callback: () => void) => {
            if (pass.enabled) { return }
            pass.enabled = true
            let time = 0
            const loop = () => {
                if (time < 1) { // fade in
                    time = Math.min(1, time + 1 / updatePerSecond)
                    pass.uniforms.opacity!.value = time
                } else if (time === 1) { // move to the destination stage
                    time += 1 / updatePerSecond
                    callback()
                    getState().completeStageTransition()
                } else if (time < 2) { // fade out
                    time = Math.min(2, time + 1 / updatePerSecond)
                    pass.uniforms.opacity!.value = 2 - time
                } else { // end
                    onUpdate.delete(loop)
                    pass.enabled = false
                }
            }
            onUpdate.add(loop)
        }
    }
}
