import * as THREE from "three"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { onBeforeRender, onUpdate } from "../hooks"
import { getState, subscribe } from "../saveData"
import fragmentShader from "./createRainPass.frag"
import vertexShader from "./createRainPass.vert"

/**
 * Returns a shader pass that makes the scene look like you're looking the scene through a glass on a rainy day.
 * See docs/rain.md for the implementation details.
 */
export default (blur: boolean) => {
    const pass = new ShaderPass({
        uniforms: {
            blur: { value: blur },
            tDiffuse: { value: null },
            aspect: { value: window.innerWidth / window.innerHeight },
            time: { value: 0.0 },

            mouse0: { value: new THREE.Vector2(0.5, 0.5) },
            mouse1: { value: new THREE.Vector2(0.5, 0.5) },
            mouse2: { value: new THREE.Vector2(0.5, 0.5) },
            mouse3: { value: new THREE.Vector2(0.5, 0.5) },
            mouse4: { value: new THREE.Vector2(0.5, 0.5) },
            mouse5: { value: new THREE.Vector2(0.5, 0.5) },
            mouse6: { value: new THREE.Vector2(0.5, 0.5) },
            mouse7: { value: new THREE.Vector2(0.5, 0.5) },
            mouse8: { value: new THREE.Vector2(0.5, 0.5) },
            mouse9: { value: new THREE.Vector2(0.5, 0.5) },
        },
        vertexShader,
        fragmentShader,
    })

    const rotateMouseTrail = () => {
        pass!.uniforms[`mouse9`]!.value.copy(pass!.uniforms[`mouse8`]!.value)
        pass!.uniforms[`mouse8`]!.value.copy(pass!.uniforms[`mouse7`]!.value)
        pass!.uniforms[`mouse7`]!.value.copy(pass!.uniforms[`mouse6`]!.value)
        pass!.uniforms[`mouse6`]!.value.copy(pass!.uniforms[`mouse5`]!.value)
        pass!.uniforms[`mouse5`]!.value.copy(pass!.uniforms[`mouse4`]!.value)
        pass!.uniforms[`mouse4`]!.value.copy(pass!.uniforms[`mouse3`]!.value)
        pass!.uniforms[`mouse3`]!.value.copy(pass!.uniforms[`mouse2`]!.value)
        pass!.uniforms[`mouse2`]!.value.copy(pass!.uniforms[`mouse1`]!.value)
        pass!.uniforms[`mouse1`]!.value.copy(pass!.uniforms[`mouse0`]!.value)
        pass!.uniforms.mouse0!.value.set(-1, -1)
    }

    window.addEventListener("mousemove", (ev) => {
        (pass!.uniforms.mouse0!.value as THREE.Vector2).set(ev.pageX / window.innerWidth, 1 - ev.pageY / window.innerHeight)
        if ((pass!.uniforms.mouse0!.value as THREE.Vector2).distanceTo(pass!.uniforms.mouse1!.value as THREE.Vector2) > 0.1) {
            rotateMouseTrail()
        }
    })

    onUpdate.add((t) => { if (t % 6 === 0) { rotateMouseTrail() } })

    onBeforeRender.add((time, _, camera) => {
        pass.uniforms.aspect!.value = camera.aspect
        pass.uniforms.time!.value = time;
    })

    pass.enabled = getState().getWeather()?.name === "Rain" && !!getState().getWeather()?.enabled
    subscribe((state, prev) => {
        if (state.weatherEffectWillBeEnabledIn === prev.weatherEffectWillBeEnabledIn) { return }
        pass.enabled = getState().getWeather()?.name === "Rain" && !!getState().getWeather()?.enabled
    })

    return pass
}
