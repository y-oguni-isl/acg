export default /* glsl */`
uniform float daytime;

void main() {
    super();
    if (daytime > 0.5) {
        gl_FragColor.rgb *= vec3(4.0);
        gl_FragColor.b += 0.8;
    } else {
        gl_FragColor.rgb *= vec3(16.0);
        gl_FragColor.b += 0.5;
    }
}
`
