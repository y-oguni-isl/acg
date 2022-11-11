import * as THREE from 'three'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

const numMouseTrails = 10

export const createRainPass = (blur: boolean, snoise: string) => {
    const declareMouseUniform = Array.from(Array(numMouseTrails).keys(), (i) => `uniform vec2 mouse${i};`).join("\n")

    const rainBlur = !blur ? "" : /* glsl */`gl_FragColor = vec4(
        texture2D(tDiffuse, vUv + vec2(-0.0028,  0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2(-0.0040,  0.0000) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2(-0.0028, -0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0000,  0.0040) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv) +
        texture2D(tDiffuse, vUv + vec2( 0.0000, -0.0040) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0028,  0.0028) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0040,  0.0000) / vec2(aspect, 1.0)) +
        texture2D(tDiffuse, vUv + vec2( 0.0028, -0.0028) / vec2(aspect, 1.0))
    ) / 9.0;`

    const pass = new ShaderPass({
        uniforms: {
            tDiffuse: { value: null },
            aspect: { value: window.innerWidth / window.innerHeight },
            time: { value: 0.0 },
            ...Object.fromEntries(Array.from(Array(numMouseTrails).keys(), (i) => [`mouse${i}`, { value: new THREE.Vector2(0.5, 0.5) }])),
        },
        vertexShader: /* glsl */`
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
        fragmentShader: /* glsl */`
uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
${declareMouseUniform}

in vec2 vUv;

${snoise}

#define scale 1.4

// https://www.desmos.com/calculator/ejrfpu9pyi
float dropletY(float x, float a) {
    return mod(x, a) < 1.0 ? sqrt(mod(x, a)) + floor(x/a) : floor(x/a) + 1.0;
}

// https://iquilezles.org/articles/distfunctions2d/
float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

#define PI 3.1415926535897932384626433832795

#define horizontalDropletDistributionCycle (2.0 * PI / 300.0)

float horizontalDropletDistribution(float x) {
    return max(0.0, (cos(x * 300.0) - 0.5) * 2.0);
}

float movingDropletVolume(vec2 p, float i) {
    float prob = horizontalDropletDistribution(p.x);
    if (prob == 0.0) { return 0.0; }
    p = vec2(p.x + i * horizontalDropletDistributionCycle / 4.0, p.y);
    float y = dropletY(time * 0.001 + 3.9 * floor(vUv.x / horizontalDropletDistributionCycle - 0.5) + p.y * 2.0, /* cycle of dripping */15.0 + i) * 0.25;
    float noise = snoise(vec3((p + vec2(0.0, y)) * vec2(aspect, 1.0) * 10.0 / scale, i * 1000.0));
    return smoothstep(0.01, 1.0, prob * pow(noise, /* higher = sparser droplets */ 10.0));
}

float fixedDropletVolume(vec2 p) {
    float noise = snoise(p * vec2(aspect, 1.0) * 60.0 / scale) + snoise((p * vec2(aspect, 1.0) + vec2(100.0, 0.0)) * 60.0 / scale);
    return smoothstep(0.01, 1.0, pow(noise, /* higher = sparser droplets */ 6.0));
}

float dropletVolume(vec2 p) {
    float vol = 0.0;
    for (float i = 0.0; i < 4.0; i += 1.0) {
        vol += movingDropletVolume(p + snoise(p) * 0.05, i);
    }
    return vol + fixedDropletVolume(p)
        // splash
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 100.0)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 200.0)), 8.0)) * 0.05;
}

vec2 dropletGradient(vec2 p) {
    float base = dropletVolume(p);
    if (base == 0.0) { return vec2(0.0); }
    return vec2(
        base - dropletVolume(p + vec2(0.0005 * scale, 0.0)),
        base - dropletVolume(p + vec2(0.0, 0.0005 * scale))
    );
}

void main() {
    if (dropletVolume(vUv) > 0.01) {
        gl_FragColor = pow(texture2D(tDiffuse, vUv + dropletGradient(vUv) * /* lower = transparent */9.0), vec4(vec3(/* lower = brighter */ 0.9), 1.0));
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);

        // blur
        ${rainBlur}

        gl_FragColor = pow(gl_FragColor, vec4(vec3(0.7), 1.0));

        float opacity = 1.0;

        if (mouse8.x >= 0.0 && mouse9.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0), mouse9 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse7.x >= 0.0 && mouse8.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse6.x >= 0.0 && mouse7.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse5.x >= 0.0 && mouse6.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse4.x >= 0.0 && mouse5.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse3.x >= 0.0 && mouse4.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.7; }
        if (mouse2.x >= 0.0 && mouse3.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.5; }
        if (mouse1.x >= 0.0 && mouse2.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.3; }
        if (mouse0.x >= 0.0 && mouse1.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse0 * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.1; }

        opacity = max(0.0, opacity);

        gl_FragColor = mix(texture2D(tDiffuse, vUv), gl_FragColor, opacity);
    }
}`
    })

    const rotateMouseTrail = () => {
        for (let i = numMouseTrails - 2; i >= 0; i--) {
            pass!.uniforms[`mouse${i + 1}`].value.copy(pass!.uniforms[`mouse${i}`].value)
        }
        pass!.uniforms.mouse0.value.set(-1.0, -1.0, -1.0)
    }

    window.addEventListener("mousemove", (ev) => {
        (pass!.uniforms.mouse0.value as THREE.Vector2).set(ev.pageX / window.innerWidth, 1 - ev.pageY / window.innerHeight)
        if ((pass!.uniforms.mouse0.value as THREE.Vector2).distanceTo(pass!.uniforms.mouse1.value as THREE.Vector2) > 0.1) {
            rotateMouseTrail()
        }
    })

    setInterval(() => { rotateMouseTrail() }, 100)

    return pass
}
