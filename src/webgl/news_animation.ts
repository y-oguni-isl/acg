import * as THREE from 'three'
import { loadGLTF } from "./gltf"
import { createNoise2D } from "simplex-noise"
import ObjectPool from './object_pool'
import { onBeforeRender } from '../hooks'
import { newsList } from '../save_data'
import { domStore } from '../dom'
import { call } from '../util'

/** Create a function that plays an animation of falling newspapers. */
const createNewspaperAnimationPlayer = async (scene: THREE.Scene) => {
    const group = (await ObjectPool.fromBuilder(async () => call(await loadGLTF("models/y2k_newspaper_article.glb", 0.1), { rotateY: Math.PI / 2, rotateX: Math.PI * 0.3, scale: { multiplyScalar: 2 }, position: { set: [0.8, 0.5, 0.5] } })))
        .withVertexAnimation((positions, originalPositions) => {
            for (let i = 0; i < positions.count; i++) {
                positions.setY(i, originalPositions.getY(i) +
                    Math.sin(positions.getX(i) * Math.PI * 2 + Date.now() * 0.006) * 0.03 +
                    Math.sin(positions.getZ(i) * Math.PI * 2 + Date.now() * 0.006) * 0.01)
            }
        })
    group.mesh.material.depthTest = false
    group.mesh.material.transparent = true
    group.mesh.renderOrder = 3
    for (let i = 0; i < 30; i++) { group.allocate() }

    let startTime = Date.now()
    const noise = createNoise2D()
    onBeforeRender.add(() => {
        if (group.parent === null) { return }
        const r = 0.1
        for (const [i, obj] of group.children.entries()) {
            const t = (Date.now() - startTime) * 0.006 * (1 + noise(i, 3) * 0.3)
            obj.rotation.y = noise(i, 5)
            obj.rotation.z = 1 * t
            obj.position.set(noise(i, 4) * 0.5 + 0.2, 0.3 + (Math.cos(t) - t * 0.5 - 1) * r + (noise(i, 1) + 1) * 0.3, 0.5 + (Math.sin(t) - t * 0.8) * r + (noise(i, 2) + 1) * 0.3)
        }
    })

    /** showNewspaper */
    return (newsId: keyof typeof newsList) => {
        startTime = Date.now()
        scene.add(group)
        const news = newsList[newsId]
        setTimeout(() => { domStore.setState({ news }) }, 2000)
        setTimeout(() => { scene.remove(group) }, 10000)
    }
}

export default createNewspaperAnimationPlayer
