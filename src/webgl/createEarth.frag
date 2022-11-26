#include <snoise>

in vec3 pos;
uniform float time;
uniform vec3 seaColor;
uniform vec3 continentsColor;
uniform bool coastline;  // 1.0-1.5
uniform bool hasCloud;

void main() {
    // Sea
    vec3 color = seaColor;

    // Continents
    float continents = snoise(pos * 2.0) + snoise(pos * 4.0) * 0.5 + snoise(pos * 8.0) * 0.25;
    if (coastline) {
        if (continents > 0.1) {
            color = continentsColor;
        }
    } else {
        color = mix(color, continentsColor, continents);
    }

    // Cloud
    if (hasCloud) {
        vec3 rotatedPos1 = pos + vec3(time * 0.3, time * 0.3, time * 0.3);
        vec3 rotatedPos2 = pos + vec3(time * 0.3, time * 0.3, -time * 0.5);
        float cloud =
            snoise(rotatedPos1 * 2.0) * 2.0 +
            snoise(rotatedPos1 * 4.0) * 1.0 +
            snoise(rotatedPos2 * 8.0) * 0.5;
        color = mix(color, vec3(0.6), cloud);
    }

    gl_FragColor = vec4(color * vec3(0.2), 1.0);
}
