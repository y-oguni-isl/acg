import type { ItemName } from "../constants"
import type { ObjectPool } from "../webgl"

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
