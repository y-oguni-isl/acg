import * as THREE from "three"
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { onBeforeRender } from "../hooks"
import { logObjectPoolSize, getRenderingOption } from "../debug"
import { ephemeralDOMStore } from "../dom"

type Instance<T extends THREE.Object3D> = T & {
    free: () => void
    getOriginalScale: () => THREE.Vector3
}

const counter: Record<string, number> = new Proxy({}, { get: (target, p, receiver) => Reflect.get(target, p, receiver) ?? 1 })  // defaultdict(lambda: 1)

/**
 * The object pool (https://en.wikipedia.org/wiki/Object_pool_pattern).
 * Changes to vertices and shaders in the model are shared between all copies. Positions and rotations are maintained independently for each copy.
 * 
 * ```
 * const pool = new ObjectPool("name", model)
 * scene.add(pool)
 * const copy = pool.allocate() // allocate() copies the `model` if the (private) `pool.pool` is empty, attaches the copy to `pool`, and returns it.
 * copy.free() // free() detaches the copy from `pool` and gives the object back to the `pool.pool`.
 * ```
 */
export class ObjectPool<T extends THREE.Object3D> extends THREE.Object3D<Instance<T>>  {
    declare children: Instance<T>[]

    readonly mesh
    readonly #noMesh
    readonly #originalPositions
    readonly #model: T
    readonly #pool = new Set<Instance<T>>()
    readonly #onCloneListeners = new Set<(copy: Instance<T>) => void>()
    readonly #onAllocateListeners = new Set<(copy: Instance<T>) => T["userData"]>()

    constructor(name: string, model: T) {
        super()
        this.name = `${name}${counter[name]++}`
        this.#model = model
        let mesh!: THREE.Mesh<THREE.BufferGeometry, THREE.Material> | undefined
        model.traverse((obj) => { if (obj instanceof THREE.Mesh) { mesh = obj } })
        this.#noMesh = mesh === undefined
        this.mesh = mesh ?? new THREE.Mesh()
        this.#originalPositions = this.#noMesh ? null as any : this.mesh.geometry.attributes.position!.clone()
    }

    withVertexAnimation(f: (positions: THREE.BufferAttribute, originalPositions: THREE.BufferAttribute) => void, opts: { computeVertexNormals?: boolean } = {}) {
        if (this.#noMesh) { return this }
        onBeforeRender.add(() => {
            if (!this.parent || this.children.length === 0) { return }
            f(this.mesh.geometry.attributes.position as THREE.BufferAttribute, this.#originalPositions)
            this.mesh.geometry.attributes.position!.needsUpdate = true
            if (opts.computeVertexNormals !== false) { this.mesh.geometry.computeVertexNormals() } // very slow
        })
        return this
    }

    onClone(f: (copy: Instance<T>) => void) {
        this.#onCloneListeners.add(f)
        return this
    }

    /** The return value of the callback is assigned to `copy.userData`. */
    onAllocate<UserData extends Record<string, unknown>>(f: (copy: Instance<T>) => UserData) {
        this.#onAllocateListeners.add(f)
        return this as any as ObjectPool<Omit<T, "userData"> & { userData: UserData }>
    }

    allocate(): Instance<T> {
        const copy = ((): Instance<T> => {
            for (const item of this.#pool) {
                this.#pool.delete(item)
                return item
            }

            // NOTE: model.clone() doesn't work when the model has animations: https://discourse.threejs.org/t/skinnedmesh-cloning-issues/27551
            const copy = SkeletonUtils.clone(this.#model) as Instance<T>
            copy.free = () => {
                if (copy.parent) { copy.removeFromParent() }
                this.#pool.add(copy)
            }
            copy.getOriginalScale = () => this.#model.scale.clone()
            logObjectPoolSize(this.name, this.children.length + this.#pool.size + 1)
            this.#onCloneListeners.forEach((f) => f(copy))
            return copy
        })()
        this.#onAllocateListeners.forEach((f) => { Object.assign(copy.userData, f(copy)) })
        this.add(copy)
        return copy
    }
}

/** Downloads and parses a .gltf (text) or .glb (binary) file. The model will be resized if the `height` argument is non-null. The `filepath` argument is relative to the public/ folder. */
export const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    if (!getRenderingOption(filepath)) { return new THREE.Object3D() }
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { ephemeralDOMStore.getState().setLoadingMessage(filepath, `Loading ${filepath} (${xhr.loaded}/${xhr.total})`) }, reject)))
        .scene.children[0]!.children[0]!
    ephemeralDOMStore.getState().removeLoadingMessage(filepath)
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}

/**
 * This function extends a model's materials' shader.
 * 
 * @example
 * ```
 * const uniforms = { time: { value: 0 } }
 * onBeforeRender.add((time) => { uniforms.time.value = time })
 * extendMaterial(model, {
 *     uniforms,
 *     fragmentShader: `
 * uniform float time;
 * 
 * void main() {
 *     super();
 *     gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
 * }
 * `,
 * })
 * ```
 * 
 * inputs:
 * - vertex shader:
 *   - modelMatrix * vec4(position, 1.0): the world position
 * - fragment shader:
 *   - vViewPosition: the screen position
 */
export const extendMaterial = (obj: THREE.Object3D, program: { uniforms?: Record<string, { value: unknown }>, vertexShader?: string, fragmentShader?: string }) => {
    obj.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) { return }
        (obj.material as THREE.Material).onBeforeCompile = (shader) => {
            // Merge uniforms
            Object.assign(shader.uniforms, program.uniforms ?? {})

            // Replace `void main()` in the vertex shader with `void super()` and append the user code.
            if (program.vertexShader?.trim()) {
                shader.vertexShader = shader.vertexShader.replace(/void\s*main\s*\(\s*\)/, "void super()") + program.vertexShader
            }

            // Replace `void main()` in the fragment shader with `void super()` and append the user code.
            if (program.fragmentShader?.trim()) {
                shader.fragmentShader = shader.fragmentShader.replace(/void\s*main\s*\(\s*\)/, "void super()") + program.fragmentShader
            }
        }
    })
}
