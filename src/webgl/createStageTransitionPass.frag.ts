export default /* glsl */`
uniform sampler2D tDiffuse;
in vec2 vUv;
uniform float time;  // in [0, 2]

void main() {
    if (time < 0.5) {
        // fade in
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), time);
    } else {
        // fade out
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), 2.0 - time);
    }
}
`
