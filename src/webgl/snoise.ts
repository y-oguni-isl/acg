// @ts-ignore
import snoise3DURL from "../../node_modules/webgl-noise/src/noise3D.glsl?url"

// FIXME: Use a faster snoise(vec1) and snoise(vec2) implementation
//        It might be better to sample the noise function as a texture beforehand.
//        https://stackoverflow.com/questions/52176463/threejs-how-to-render-a-texture-with-custom-shaders-including-the-textures-uv-o
//        https://threejs.org/docs/#api/en/textures/Texture
/** The 3D simplex noise function. */
const snoise = (await fetch(snoise3DURL).then((r) => r.text())) + `
float snoise(vec2 v) {
    return snoise(vec3(v, 0.0));
}
`

export default snoise
