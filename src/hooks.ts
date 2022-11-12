// Object3D.onBeforeRender does't fire for THREE.Object3D or THREE.Group
export const onBeforeRender = new Set<(time: number, deltaTime: number) => void>()

/** onUpdate is called at fixed intervals. Don't do slow processing in them. */
export const onUpdate = new Set<(updateCount: number) => void>()
