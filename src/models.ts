import { renderingOptionsStore } from "./debug";
import { ObjectFromEntries, ObjectValues } from "./util";
import * as THREE from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils"
import { i18nextT } from "./dom/i18n";
import { onBeforeRender } from "./hooks";

const loadingMessage = {} as Record<string, string>
const setLoadingMessage = (key: string, message: string) => {
    const div = document.querySelector("div#loading-message")
    if (!div) { return }  // preact somehow removes the div
    loadingMessage[key] = message
    div.style.display = Object.keys(loadingMessage).length === 0 ? "none" : "block"
    div.innerText = ObjectValues(loadingMessage).join("\n")
}
const removeLoadingMessage = (key: string) => {
    const div = document.querySelector("div#loading-message")
    if (!div) { return }
    delete loadingMessage[key]
    div.style.display = Object.keys(loadingMessage).length === 0 ? "none" : "block"
    div.innerText = ObjectValues(loadingMessage).join("\n")
}

/** A map to store GLTF to play animations. */
const gltfMap = new WeakMap<THREE.Object3D, GLTF>()

/** Downloads and parses a .gltf (text) or .glb (binary) file. The `filepath` argument is relative to the public/ folder. */
const loadGLTF = async (filepath: string): Promise<THREE.Object3D> => {
    if (!renderingOptionsStore.getState().getRenderingOption(filepath)) {
        return new THREE.Object3D()
    }
    setLoadingMessage(filepath, i18nextT("Downloading {{filepath}} (pending)", { filepath }))
    const gltf = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => {
        setLoadingMessage(filepath, i18nextT("Downloading {{filepath}} ({{loaded}}/{{total}})", { filepath, loaded: xhr.loaded, total: xhr.total }))
    }, reject)))
    removeLoadingMessage(filepath)
    const obj = gltf.scene.children[0]!.children[0]!
    gltfMap.set(obj, gltf)
    return obj
}

const filenames = [
    "ballistic_missile.glb",
    "hammer_notexture.glb",
    "hammer.glb",
    "low-poly_airplane.glb",
    "low_polygon_art__white_eagle_bird.glb",
    "planet_megatropolis.glb",
    "ufo.glb",
    "sky_pano_-_grand_canyon_yuma_point.glb",
    "y2k_newspaper_article.glb",
] as const

// Parallel download all models
const models = await Promise.all(filenames.map((name) => (async () => [name, await loadGLTF(`models/${name}`)] as const)()))

setLoadingMessage("loadingModels", i18nextT("Loading models..."))
await new Promise((resolve) => setTimeout(resolve, 0)) // Make the browser to render the changes in the DOM

/** Clone the Object3D and plays the animation. */
export const cloneObject3D = <T extends THREE.Object3D>(obj: T): T => {
    const copy = SkeletonUtils.clone(obj)
    const gltf = gltfMap.get(obj)
    if (gltf) { gltfMap.set(copy, gltf) }

    // Play animations
    if (gltf && gltf.animations.length > 0) {
        const animationMixer = new THREE.AnimationMixer(copy)
        animationMixer.clipAction(gltf.animations[0]!).play()  // Play the first animation
        onBeforeRender.add((_, deltaTime) => {
            animationMixer.update(deltaTime / 1000)
        })
    }

    return copy as T
}

export default ObjectFromEntries(models.map(([k, v]) => [
    k,
    /** Clones the model. The model is resized if the height argument is non-null. */
    (height: number | null) => {
        const copy = cloneObject3D(v)
        if (height !== null) {
            copy.scale.multiplyScalar(height / new THREE.Box3().setFromObject(copy).getSize(new THREE.Vector3()).y)
        }
        return copy
    },
]))

export const loaded = () => { removeLoadingMessage("loadingModels") }
