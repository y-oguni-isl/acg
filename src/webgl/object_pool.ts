import * as THREE from "three"
import { onBeforeRender } from "../hooks"
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils"

type Instance<T extends THREE.Object3D> = T & {
    free: () => void
    getOriginalScale: () => THREE.Vector3
}

/**
 * The object pool (https://en.wikipedia.org/wiki/Object_pool_pattern).
 * 
 * ```
 * const models = new ObjectPool(model)
 * scene.add(models)
 * const copy = models.allocate() // allocate() copies the `model` if the `models.pool` is empty, attaches the copy to `models`, and returns it.
 * copy.free() // free() detaches the copy from `models` and gives the object back to the `models.pool`.
 * ```
 */
export default class ObjectPool<T extends THREE.Object3D> extends THREE.Object3D {
    readonly mesh
    private readonly originalPositions

    static async fromBuilder<T extends THREE.Object3D>(builder: () => Promise<T>) {
        return new ObjectPool<T>(await builder())
    }

    constructor(private readonly model: T) {
        super()
        let mesh!: THREE.Mesh<THREE.BufferGeometry, THREE.Material>
        model.traverse((obj) => { if (obj instanceof THREE.Mesh) { mesh = obj } })
        this.mesh = mesh
        this.originalPositions = mesh.geometry.attributes.position!.clone()
    }

    private readonly pool = new Set<Instance<T>>()

    withVertexAnimation(f: (positions: THREE.BufferAttribute, originalPositions: THREE.BufferAttribute) => void) {
        onBeforeRender.add(() => {
            if (!this.parent) { return }
            f(this.mesh.geometry.attributes.position as THREE.BufferAttribute, this.originalPositions)
            this.mesh.geometry.attributes.position!.needsUpdate = true
            this.mesh.geometry.computeVertexNormals()
        })
        return this
    }

    private onCloneListeners = new Set<(copy: Instance<T>) => void>()
    onClone(f: (copy: Instance<T>) => void) { this.onCloneListeners.add(f); return this }

    allocate(): Instance<T> {
        const copy = ((): Instance<T> => {
            for (const item of this.pool) {
                this.pool.delete(item)
                return item
            }

            // NOTE: model.clone() doesn't work when the model has animations: https://discourse.threejs.org/t/skinnedmesh-cloning-issues/27551
            const copy = SkeletonUtils.clone(this.model) as Instance<T>
            copy.free = () => {
                if (copy.parent) { copy.removeFromParent() }
                this.pool.add(copy)
            }
            copy.getOriginalScale = () => this.model.scale.clone()
            this.onCloneListeners.forEach((f) => f(copy))
            return copy
        })()
        this.add(copy)
        return copy
    }
}
