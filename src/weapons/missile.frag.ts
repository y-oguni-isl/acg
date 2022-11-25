export default /* glsl */`
uniform float daytime;

void main() {
    super();
    if (daytime > 0.5) {
        gl_FragColor.rgb *= vec3(0.8);
    } else {
        gl_FragColor.rgb *= vec3(2.0);
    }
}
`
