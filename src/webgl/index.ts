// This file is auto-generated with `node codegen.js`.

import * as THREE from "three"

// Replace `#include <snoise>` with the contents of ./snoise.glsl, which defines `float snoise(vec2 p)` and `float snoise(vec3 p)` functions.
import snoise from "./snoise.glsl"
THREE.ShaderChunk["snoise"] = snoise

export { default as createAirplane } from "./createAirplane"
export { default as createBirdPool } from "./createBirdPool"
export { default as createCloud } from "./createCloud"
export { default as createContrail } from "./createContrail"
export { default as createEarth } from "./createEarth"
export { default as createJammingPass } from "./createJammingPass"
export { default as createMothership } from "./createMothership"
export { default as createNewspaperAnimationPlayer } from "./createNewspaperAnimationPlayer"
export { default as createRainPass } from "./createRainPass"
export { default as createSelectiveBloomPass, enableSelectiveBloom } from "./createSelectiveBloomPass"
export { default as createStageTransitionPass } from "./createStageTransitionPass"
export { default as createUFOPool } from "./createUFOPool"
export { ObjectPool, extendMaterial } from "./webglUtil"

