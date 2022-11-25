/** `Object.entries` with a strict type. */
export const ObjectEntries = <K extends keyof any, V extends unknown>(obj: { readonly [k in K]?: V }): [K, V][] => Object.entries(obj) as any
/** `Object.values` with a strict type. */
export const ObjectValues = <V extends unknown>(obj: { readonly [k in keyof any]?: V }): V[] => Object.values(obj) as any
/** `Object.keys` with a strict type. */
export const ObjectKeys = <K extends keyof any>(obj: { readonly [k in K]?: any }): K[] => Object.keys(obj) as any
/** `Object.fromEntries` with a strict type. This function assumes that all values in K are used once. */
export const fromEntries = <K extends keyof any, V>(obj: [K, V][]): { [k in K]: V } => Object.fromEntries(obj) as any

/** Promise.all but accepts an object */
export const PromiseAll = async <T>(obj: T): Promise<{ [k in keyof T]: Awaited<T[k]> }> => {
    const result: Record<any, any> = {}
    for (const [k, v] of Object.entries(obj as any)) {
        result[k] = await v
    }
    return result as any
}

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
 * call(obj, { position: { set: [1, 2, 3] }, rotateX: 1 })
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

export type ReadonlyVector3 = Readonly<Pick<THREE.Vector3, "x" | "y" | "z" | "isVector3" | "getComponent" | "clone" | "dot" | "lengthSq" | "length" | "manhattanLength" | "manhattanDistanceTo" | "angleTo" | "distanceTo" | "distanceToSquared" | "equals" | "toArray">>

// NOTE: We've tried https://github.com/blitz-js/superjson bt it was too slow for us. This game need to stringify save data several times per frame, and superjson took up half of the overall execution time.
export type SerializableSet<T extends keyof any> = Partial<Record<T, true>>
