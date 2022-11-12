import * as THREE from "three"
import { onBeforeRender } from "../hooks"

/**
 * ```
 * const pool = new ObjectPool(model)
 * scene.add(pool)
 * const copy = pool.allocate()
 * copy.free()
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

    private readonly pool = new Set<T & { free: () => void }>()

    withAnimation(f: (positions: THREE.BufferAttribute, originalPositions: THREE.BufferAttribute) => void) {
        onBeforeRender.add(() => {
            if (!this.parent) { return }
            f(this.mesh.geometry.attributes.position as THREE.BufferAttribute, this.originalPositions)
            this.mesh.geometry.attributes.position!.needsUpdate = true
            this.mesh.geometry.computeVertexNormals()
        })
        return this
    }

    allocate(): T & { free: () => void } {
        const copy = ((): T & { free: () => void } => {
            for (const item of this.pool) {
                this.pool.delete(item)
                return item
            }

            const copy = this.model.clone() as T & { free: () => void }
            copy.free = () => {
                if (copy.parent) { copy.removeFromParent() }
                this.pool.add(copy)
            }
            return copy
        })()
        this.add(copy)
        return copy
    }
}
