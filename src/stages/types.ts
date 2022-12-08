import type { ItemName } from "../constants"
import type { ObjectPool } from "../webgl"

export type StageDefinition = {
    /** Creates an {@link THREE.Object3D} containing all 3d objects rendered in the stage in its children.  */
    createModel(): THREE.Object3D
    /** Whether the stage name is listed in the Stages window, and the player can move to the stage. */
    visible(): boolean
    /** Creates object pools for enemies in the stage, one for alive and one for dead. */
    createEnemyPools(): Promise<EnemyPools>
}

export type EnemyUserData = {
    name: string
    time: number
    hp: number
    update: () => void
    onKilled: () => void
    radius: number
    money: number
    items: Partial<Record<ItemName, number>>
}

export type EnemyPools = {
    alive: ObjectPool<Omit<THREE.Object3D, "userData"> & { userData: EnemyUserData }>,
    dead: ObjectPool<Omit<THREE.Object3D, "userData"> & { userData: { time: number } }>,
    weatherAlive?: ObjectPool<Omit<THREE.Object3D, "userData"> & { userData: EnemyUserData }>,
    weatherDead?: ObjectPool<Omit<THREE.Object3D, "userData"> & { userData: { time: number } }>,
    spawn: (t: number) => void
}
