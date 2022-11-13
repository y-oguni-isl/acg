import * as THREE from "three"

/**
 * This function extends a model's materials' shader.
 * 
 * @example
 * ```
 * const uniforms = { time: { value: 0 } }
 * onBeforeRender.add((time) => { uniforms.time.value = time })
 * extendFragmentShader(model, {
 *     uniforms,
 *     fragmentShader: `
 * uniform float time;
 * 
 * void main() {
 *     super();
 *     gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
 * }
 * `,
 * })
 * ```
 * 
 * inputs:
 * - vertex shader:
 *   - modelMatrix * vec4(position, 1.0): the world position
 * - fragment shader:
 *   - vViewPosition: the screen position
 */
const extendShader = (obj: THREE.Object3D, program: { uniforms?: Record<string, { value: unknown }>, vertexShader?: string, fragmentShader?: string }) => {
    obj.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) { return }
        (obj.material as THREE.Material).onBeforeCompile = (shader) => {
            Object.assign(shader.uniforms, program.uniforms ?? {})
            obj.userData.shader = shader
            if (program.vertexShader?.trim()) {
                shader.vertexShader = shader.vertexShader.replace(/void\s*main\s*\(\s*\)/, "void super()") + program.vertexShader
            }
            if (program.fragmentShader?.trim()) {
                shader.fragmentShader = shader.fragmentShader.replace(/void\s*main\s*\(\s*\)/, "void super()") + program.fragmentShader
            }
        }
    })
}

export default extendShader
