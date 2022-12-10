import type { ItemName } from "../constants"
import type { ObjectPoolInstance } from "../webgl/webglUtil"

/** A type that represents the definition of a game stage. */
export type StageDefinition = {
    /** Creates an {@link THREE.Object3D} containing all 3d objects rendered in the stage in its children.  */
    createModel(): THREE.Object3D
    /** Whether the stage name is listed in the Stages window, and the player can move to the stage. */
    visible(): boolean
    /** Creates object pools for enemies in the stage, one for alive and one for dead. The THREE.Object3D has all the object pools in its children. */
    createEnemyPools(): THREE.Object3D & {
        alive: () => readonly ObjectPoolInstance<Omit<THREE.Object3D, "userData"> & { userData: EnemyUserData }>[]
        dead: () => readonly ObjectPoolInstance<Omit<THREE.Object3D, "userData"> & { userData: { time: number } }>[]
        spawn: (t: number) => void
    }
}

/** A type that represents the state of an enemy, which is stored in the {@link THREE.Object3D.userData} property in the 3D model of the enemy. */
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
