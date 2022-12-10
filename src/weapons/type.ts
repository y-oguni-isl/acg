import type { EnemyUserData } from "../stages/types"

/** A read-only version of {@link THREE.Vector3} type. Use the `.clone()` method to cast into a {@link THREE.Vector3}. */
type ReadonlyVector3 = Readonly<Pick<THREE.Vector3, "x" | "y" | "z" | "isVector3" | "getComponent" | "clone" | "dot" | "lengthSq" | "length" | "manhattanLength" | "manhattanDistanceTo" | "angleTo" | "distanceTo" | "distanceToSquared" | "equals" | "toArray">>

/** Common properties of enemies' {@link THREE.Object3D} */
export type Damageable = {
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

export type Weapon = {
    obj: THREE.Object3D
    /** Functions in this set should reduce `.hp` property of `enemies` based on their position . */
    doDamage: (enemies: readonly Damageable[]) => void
    /** Functions in this set are called when an enemy is killed or removed by going off-screen. */
    onEnemyRemoved?: (enemy: Damageable) => void
}
