import * as THREE from 'three'
import { loadGLTF } from "./gltf"
import { createNoise2D } from "simplex-noise"
import ObjectPool from './object_pool'
import { onBeforeRender } from '../hooks'

const createNewspaperPlayer = async (scene: THREE.Scene) => {
    const group = (await ObjectPool.fromBuilder(async () => {
        const model = await loadGLTF("models/y2k_newspaper_article.glb", 0.1)
        model.rotateY(Math.PI / 2)
        model.rotateX(Math.PI * 0.3)
        model.scale.multiplyScalar(2)
        model.position.copy(new THREE.Vector3(0.8, 0.5, .5))
        return model
    })).withVertexAnimation((positions, originalPositions) => {
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
    return (newsId: number) => {
        startTime = Date.now()
        scene.add(group)
        setTimeout(() => {
            document.querySelector("dialog#newsDialog")!.style.opacity = "0"
            document.querySelector("dialog#newsDialog")!.showModal()
            document.querySelector("dialog#newsDialog")!.style.opacity = "1"
        }, 2000)
        setTimeout(() => { scene.remove(group) }, 10000)
        switch (newsId) {
            case 0:
                document.querySelector("h2#news-title")!.innerText = "Aliens Are Coming To Invade Earth"
                document.querySelector("span#news-text")!.innerText = "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."
                break
            default:
                throw new Error(`newsId: ${newsId}`)
        }
    }
}

document.querySelector('dialog#newsDialog')!.addEventListener("click", (ev) => {
    // Close the dialog when the user clicks outside the dialog
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
})


export default createNewspaperPlayer
