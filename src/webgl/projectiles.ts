import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import { getState } from "../save_data"
import { bloomLayer } from "./selective_bloom"

/** Creates a 3D model of a laser. */
const createLaser = (source: THREE.Object3D) => {
    const uniforms = {
        time: { value: 0.0 },
        count: { value: 0.0 },
    }

    onBeforeRender.add((time) => {
        uniforms.time.value = time
        uniforms.count.value = getState().upgrades.Laser
        mesh.position.setX(source.position.x + 1)
        mesh.position.setZ(source.position.z)
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
        blending: THREE.AdditiveBlending,
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
in vec2 pos;
uniform float time;
uniform float count;

void main() {
    float opacityY = (sin(pos.y * 30.0 - time * 0.08) + 1.0) / 2.0;
    float opacityX;

    // red lasers
    opacityX = smoothstep(0.005, 0.0, abs(pos.x));
    if (count >= 1.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.1)); }
    if (count >= 2.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.1)); }
    if (count >= 3.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.05)); }
    if (count >= 4.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.05)); }
    gl_FragColor = vec4(1.0, 0.3, 1.0, opacityY * opacityX);

    // white lasers
    if (count >= 5.0) {
        float opacityX2 = smoothstep(0.005 * (count - 4.0), 0.005 * (count - 5.0), abs(pos.x + cos(time * 0.08) * 0.02));
        gl_FragColor += opacityX2 * vec4(1.0, 1.0, 1.0, opacityY);
    }
}
`
    }))

    mesh.renderOrder = 1
    mesh.rotateY(-Math.PI / 2)
    mesh.rotateX(-Math.PI / 2)
    mesh.scale.set(0.25, 2, 0)
    mesh.position.set(1, 0.01, 0)
    mesh.layers.enable(bloomLayer)

    return mesh
}

export default createLaser
