/**
 * This file defines small utility functions that are shared among other files.
 */

import produce, { Draft } from "immer"
import type { UseBoundStore, StoreApi } from "zustand"
import create from "zustand"
import { persist } from "zustand/middleware"

/** {@link Object.entries `Object.entries`} with a strict type. */
export const ObjectEntries = <K extends keyof any, V extends unknown>(obj: { readonly [k in K]?: V }): [K, V][] => Object.entries(obj) as any
/** {@link Object.values `Object.values`} with a strict type. */
export const ObjectValues = <V extends unknown>(obj: { readonly [k in keyof any]?: V }): V[] => Object.values(obj) as any
/** {@link Object.keys `Object.keys`} with a strict type. */
export const ObjectKeys = <K extends keyof any>(obj: { readonly [k in K]?: any }): K[] => Object.keys(obj) as any
/** {@link Object.fromEntries `Object.fromEntries`} with a strict type. This function assumes that all values in K are used once, i.e. if `const entries: ["a" | "b" | "c", number][] = [["a", 1], ["b", 2]]`, `typeof fromEntries(entries)` should be of type `{ a: number, b: number }` but it actually is `{ a: number, b: number, c: number }`). */
export const ObjectFromEntries = <K extends keyof any, V>(obj: readonly (readonly [K, V])[]): { [k in K]: V } => Object.fromEntries(obj) as any

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
 * // is the same as
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

/** We use `{ foo: true, bar: true }` to represent `new Set(["foo", "bar"])` because {@link JSON.stringify}, which is used to save the game state to {@link localStorage}, doesn't accept {@link Set}. NOTE: We've tried https://github.com/blitz-js/superjson but it was too slow for us. This game need to stringify save data several times per frame, and superjson took up half of the overall execution time. */
export type SerializableSet<T extends keyof any> = Partial<Record<T, true>>

/**
 * Works the same as the following code, but includes a fix for having to specify the types twice.
 * ```typescript
 * create<S & A>()((get, set) => ({ ...initialState, ...actions } as S & A))
 * ```
 */
export const createStore = <S, A>(initialState: S, actions: (
    set: UseBoundStore<StoreApi<S>>["setState"],
    get: UseBoundStore<StoreApi<S>>["getState"],
    setProduce: (f: (draft: Draft<S>) => void) => void,  // set(produce(f))
) => A) => create<S & A>()((set, get) => ({ ...initialState, ...actions(set, get, (f) => { set(produce(f) as any) }) }))

/**
 * Works the same as the following code, but includes a fix for a problem where {@link localStorage}[name] can be changed after destroy(), and a fix for having to specify the types twice.
 * ```typescript
 * create<S & A>()(persist((get, set) => ({ ...initialState, ...actions } as S & A), { name, version }))
 * ```
 */
export const createPersistingStore = <S, A>(name: string, version: number, initialState: S, actions: (
    set: UseBoundStore<StoreApi<S>>["setState"],
    get: UseBoundStore<StoreApi<S>>["getState"],
    setProduce: (f: (draft: Draft<S>) => void) => void,  // set(produce(f))
) => A) => {
    let destroyed = false
    const store = create<S & A>()(persist((set, get) => ({ ...initialState, ...actions(set, get, (f) => { set(produce(f) as any) }) }), {
        name,
        version,
        serialize: (s) => { if (destroyed) { throw new Error("destroyed") } return JSON.stringify(s) },
    }))

    const destroy = store.destroy.bind(store)
    store.destroy = () => {
        destroyed = true
        destroy()
    }
    return store
}
