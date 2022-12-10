/**
 * This file defines sets in which event listeners are registered.
 * The order of the events is described in the comment above the main game loop in `src/main.ts`.
 */

/** Functions in this set will be called every time just before rendering. */
export const onBeforeRender = new Set<(time: number, deltaTime: number, camera: THREE.PerspectiveCamera) => void>()

/** Functions in this set will be called after onBeforeRender. The only purpose of this hook is to address a jittering issue when postprocessing is done before moving the camera. */
export const onPreprocess = new Set<() => void>()

/** Unlike onBeforeRender, functions in this set will be called at a fixed interval even if the FPS drops, and you don't need to worry about delta timing. */
export const onUpdate = new Set<(updateCount: number) => void>()
