/**
 * This file defines sets in which event listeners are registered.
 * The order of the events is described in the comment above the main game loop in `src/main.ts`.
 */

import type { EnemyUserData } from "./stages/types"
import { ReadonlyVector3 } from "./util"

/** Functions in this set will be called every time just before rendering. */
export const onBeforeRender = new Set<(time: number, deltaTime: number, camera: THREE.PerspectiveCamera) => void>()

/** Functions in this set will be called after onBeforeRender. The only purpose of this hook is to address a jittering issue when postprocessing is done before moving the camera. */
export const onPreprocess = new Set<() => void>()

/** Unlike onBeforeRender, functions in this set will be called at a fixed interval even if the FPS drops, and you don't need to worry about delta timing. */
export const onUpdate = new Set<(updateCount: number) => void>()

/** Common properties of enemies' {@link THREE.Object3D} */
export type Collidable = {
    readonly position: ReadonlyVector3
    /** Properties in EnemyUserData in src/stages/types.ts required for collision detections */
    readonly userData: {
        readonly radius: EnemyUserData["radius"]
        readonly name: EnemyUserData["name"]
        readonly money: EnemyUserData["money"]
        readonly items: Readonly<EnemyUserData["items"]>
        hp: EnemyUserData["hp"]
    }
}

/** Functions in this set should reduce .hp property of `enemies` based on their position . */
export const onCollisionDetection = new Set<(enemies: readonly Collidable[]) => void>()

/** Functions in this set are called when an enemy is killed or removed by going off-screen. */
export const onEnemyRemoved = new Set<(obj: Collidable) => void>
