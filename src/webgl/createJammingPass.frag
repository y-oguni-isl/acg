#include <snoise>

uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    vec2 st = vUv * vec2(aspect, 1.0);
    if (snoise(st * 300.0 + vec2(time)) < -0.5) {
        gl_FragColor.rg += vec2(0.3, 0.15);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
}
