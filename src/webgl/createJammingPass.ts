import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { onBeforeRender } from "../hooks"
import { getState, subscribe } from "../saveData"
import fragmentShader from "./createJammingPass.frag"
import vertexShader from "./createJammingPass.vert"

export default () => {
    const pass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            aspect: { value: window.innerWidth / window.innerHeight },
            time: { value: 0.0 },
        },
        vertexShader,
        fragmentShader,
    })

    onBeforeRender.add((time, _, camera) => {
        pass.uniforms.aspect!.value = camera.aspect
        pass.uniforms.time!.value = time;
    })

    pass.enabled = getState().getWeather() === "Jamming"
    subscribe((state, prev) => {
        if (state.weatherEffectWillBeEnabledIn === prev.weatherEffectWillBeEnabledIn) { return }
        pass.enabled = getState().getWeather() === "Jamming"
    })

    return pass
}
