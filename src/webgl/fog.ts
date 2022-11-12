import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import snoise from "./snoise"

const createFog = () => {
    const uniforms = {
        time: { value: 0.0 },
    }

    onBeforeRender.add((time) => { uniforms.time.value = time })

    const fog = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.ShaderMaterial({
        transparent: true,
        uniforms,
        vertexShader: /* glsl */`\
out vec2 pos;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,
        fragmentShader: /* glsl */`\
${snoise}

in vec2 pos;
uniform float time;
void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`
    }))
    fog.rotateX(-Math.PI / 2)
    fog.scale.setScalar(4)
    fog.position.setY(-0.13)

    return fog
}

export default createFog
