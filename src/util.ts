/** `Object.entries` with a narrower type. */
export const entries = <K extends keyof any, V extends unknown>(obj: { readonly [k in K]?: V }): [K, V][] => Object.entries(obj) as any

/** https://en.wikipedia.org/wiki/Smoothstep */
export const smoothstep = (a: number, b: number, x: number) => x < a ? 0 : x > b ? 1 : (x - a) / (b - a)

type RewriteMethodsToProperties<T> = {
    readonly [K in keyof T as T[K] extends ((...args: readonly number[]) => any) | ((v: THREE.Vector3) => any) ? K : never]?:
    T[K] extends (x: number) => any ? number :
    T[K] extends (v: THREE.Vector3) => any ? THREE.Vector3 :
    readonly number[]
} & {
        // recurse
        readonly [K in keyof T as T[K] extends { [k in string]: any } ? K : never]?:
        RewriteMethodsToProperties<T[K]>
    }

/**
 * ```
 * obj.position.set([1, 2, 3])
 * obj.rotateX(1)
 * 
 * // can be written as
 * call(obj, { position: { set: [1, 2, 3] }, rotateX: 1})
 * ```
 */
export const call = <T>(obj: T, props: RewriteMethodsToProperties<T>): T => {
    for (const [k, v] of Object.entries(props)) {
        if (Object.getPrototypeOf(v) === Object.prototype) {  // if v is an object constructed from an object literal
            for (const [k2, v2] of Object.entries(v as any)) {
                if (Array.isArray(v2)) { (obj as any)[k][k2](...v2) } else { (obj as any)[k][k2](v2) }
            }
        } else {
            if (Array.isArray(v)) { (obj as any)[k](...v) } else { (obj as any)[k](v) }
        }
    }
    return obj
}
