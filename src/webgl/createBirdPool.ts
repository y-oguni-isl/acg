import { smoothstep } from "three/src/math/MathUtils"
import { call } from "../util"
import { loadGLTF, ObjectPool } from "./webglUtil"

export default async (animation: boolean) => {
    const pool = new ObjectPool("bird", call(await loadGLTF("models/low_polygon_art__white_eagle_bird.glb", 0.1), { rotateX: -Math.PI / 2, rotateZ: -Math.PI / 2, scale: { multiplyScalar: 0.3 } }))
    if (animation) {
        let t = 0
        const animationCache = new Map<number, THREE.BufferAttribute>()
        pool.withVertexAnimation((positions, originalPositions) => {
            if ((t++) % 2 !== 0) { return }
            const animationStep = t % 32
            positions.copy(animationCache.emplace(animationStep, {
                insert: () => {
                    for (let i = 0; i < positions.count; i++) {
                        const dy = smoothstep(Math.abs(positions.getX(i)), 3.5, 17) * 10 * Math.sin(animationStep / 32 * Math.PI * 2) * 0.8
                        positions.setY(i, originalPositions.getY(i) + dy * 0.7)
                        positions.setZ(i, originalPositions.getZ(i) + dy)
                    }
                    return positions.clone()
                }
            }))
        }, { computeVertexNormals: false })
    }
    return pool
}
