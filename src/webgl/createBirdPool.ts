import { smoothstep } from "three/src/math/MathUtils"
import { call } from "../util"
import loadGLTF from "./loadGLTF"
import ObjectPool from "./ObjectPool"

export default async (animation: boolean) => {
    const pool = new ObjectPool(call(await loadGLTF("models/low_polygon_art__white_eagle_bird.glb", 0.1), { rotateX: -Math.PI / 2, rotateZ: -Math.PI / 2, scale: { multiplyScalar: 0.3 } }))
    if (animation) {
        pool.withVertexAnimation((positions, originalPositions) => {
            for (let i = 0; i < positions.count; i++) {
                const dy = smoothstep(Math.abs(positions.getX(i)), 3.5, 17) * 10 * Math.sin(Date.now() * 0.01) * 0.8
                positions.setY(i, originalPositions.getY(i) + dy * 0.7)
                positions.setZ(i, originalPositions.getZ(i) + dy)
            }
        })
    }
    return pool
}
