/**
 * This file defines sets in which event listeners are registered.
 * The order of the events is described in the comment above the main game loop in `src/main.ts`.
 */

import type { ItemName } from "./constants"
import { ReadonlyVector3 } from "./util"

/** Functions in this set will be called every time just before rendering. */
export const onBeforeRender = new Set<(time: number, deltaTime: number, camera: THREE.PerspectiveCamera) => void>()

/** Functions in this set will be called after onBeforeRender. The only purpose of this hook is to address a jittering issue when postprocessing is done before moving the camera. */
export const onPreprocess = new Set<() => void>()

/** Unlike onBeforeRender, functions in this set will be called at a fixed interval even if the FPS drops, and you don't need to worry about delta timing. */
export const onUpdate = new Set<(updateCount: number) => void>()

export type Collidable = {
    readonly position: ReadonlyVector3
    readonly userData: {
        readonly radius: number
        readonly name: string
        readonly money: number
        readonly items: { readonly [k in ItemName]?: number }
        hp: number
    }
}

/** Functions in this set should reduce .hp property of `enemies` based on their position . */
export const onCollisionDetection = new Set<(enemies: readonly Collidable[]) => void>()

/** Functions in this set are called when an enemy is killed or removed by going off-screen. */
export const onEnemyRemoved = new Set<(obj: Collidable) => void>
