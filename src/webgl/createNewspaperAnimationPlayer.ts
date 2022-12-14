import { ObjectPool } from "./webglUtil"
import { onBeforeRender } from "../hooks"
import { subscribe } from "../saveData"
import { settingsStore } from "../dom"
import { call, ObjectKeys } from "../util"
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise"
import models from "../models"

/**
 * Create a function that plays an animation of falling newspapers.
 * See docs/newspaper.md for the implementation details.
 */
export default () => {
    let startTime = Date.now();

    // Load the 3D model asynchronously
    const pool = new ObjectPool("newspaper", call(models["y2k_newspaper_article.glb"](0.1), { rotateY: Math.PI / 2, rotateX: Math.PI * 0.3, scale: { multiplyScalar: 2 }, position: { set: [0.8, 0.5, 0.5] } }))
        .withVertexAnimation((positions, originalPositions) => {
            for (let i = 0; i < positions.count; i++) {
                positions.setY(i, originalPositions.getY(i) +
                    Math.sin(positions.getX(i) * Math.PI * 2 + Date.now() * 0.006) * 0.03 +
                    Math.sin(positions.getZ(i) * Math.PI * 2 + Date.now() * 0.006) * 0.01)
            }
        })

    // Disable the depth test to render the newspapers over all other objects
    pool.mesh.material.depthTest = false

    // Render the newspapers after drawing all other transparent objects
    pool.mesh.material.transparent = true
    pool.mesh.renderOrder = 3

    for (let i = 0; i < 30; i++) { pool.allocate() }

    const noise = new SimplexNoise()
    onBeforeRender.add(() => {
        if (pool.parent === null) { return }
        const r = 0.1
        for (const [i, obj] of pool.children.entries()) {
            const t = (Date.now() - startTime) * 0.006 * (1 + noise.noise(i, 3) * 0.3)
            obj.rotation.y = noise.noise(i, 5)
            obj.rotation.z = 1 * t
            obj.position.set(noise.noise(i, 4) * 0.5 + 0.2, 0.3 + (Math.cos(t) - t * 0.5 - 1) * r + (noise.noise(i, 1) + 1) * 0.3, 0.5 + (Math.sin(t) - t * 0.8) * r + (noise.noise(i, 2) + 1) * 0.3)
        }
    })

    pool.visible = false

    // Play the news when a newspaper is published.
    subscribe((s, prev) => {
        if (s.availableNews === prev.availableNews) { return }
        const addedNews = [...new Set(ObjectKeys(s.availableNews)).difference(new Set(ObjectKeys(prev.availableNews)))][0]
        if (!addedNews) { return }
        startTime = Date.now()
        pool.visible = true
        settingsStore.getState().showNews(addedNews)
        setTimeout(() => { pool.visible = false }, 10000)
    })

    return pool
}
