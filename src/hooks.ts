// Object3D.onBeforeRender does't fire for THREE.Object3D or THREE.Group
/** Functions in this set will be called every time just before rendering. */
export const onBeforeRender = new Set<(time: number, deltaTime: number) => void>()

/** Unlike onBeforeRender, functions in this set are will be called at a fixed interval even if the FPS drops, and you don't need to worry about delta timing. */
export const onUpdate = new Set<(updateCount: number) => void>()
