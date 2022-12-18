uniform sampler2D tDiffuse;
in vec2 vUv;
uniform float opacity;  // in [0, 1]

void main() {
    gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), opacity);
}
