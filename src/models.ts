import { getRenderingOption } from "./debug";
import { ObjectFromEntries, ObjectValues } from "./util";
import * as THREE from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils"

const div = document.createElement("div")
div.classList.add("loading-message")
document.body.append(div)

const loadingMessage = {} as Record<string, string>
const setLoadingMessage = (key: string, message: string) => {
    loadingMessage[key] = message
    div.style.display = Object.keys(loadingMessage).length === 0 ? "none" : "block"
    div.innerText = ObjectValues(loadingMessage).join("\n")
}
const removeLoadingMessage = (key: string) => {
    delete loadingMessage[key]
    div.style.display = Object.keys(loadingMessage).length === 0 ? "none" : "block"
    div.innerText = ObjectValues(loadingMessage).join("\n")
}

// {Object.keys(loadingMessage).length > 0 && <div class="">{ObjectValues(loadingMessage).join("\n")}</div>}

/** Downloads and parses a .gltf (text) or .glb (binary) file. The `filepath` argument is relative to the public/ folder. */
export const loadGLTF = async (filepath: string): Promise<THREE.Object3D> => {
    if (!getRenderingOption(filepath)) { return new THREE.Object3D() }
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { setLoadingMessage(filepath, `Loading ${filepath} (${xhr.loaded}/${xhr.total})`) }, reject)))
        .scene.children[0]!.children[0]!
    removeLoadingMessage(filepath)
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

setLoadingMessage("loadingModels", `Loading models...`)
await new Promise((resolve) => setTimeout(resolve, 0)) // Make the browser to render the changes in the DOM

export default ObjectFromEntries(models.map(([k, v]) => [
    k,
    /** Clones the model. The model is resized if the height argument is non-null. */
    (height: number | null) => {
        const copy = SkeletonUtils.clone(v)
        if (height !== null) {
            copy.scale.multiplyScalar(height / new THREE.Box3().setFromObject(copy).getSize(new THREE.Vector3()).y)
        }
        return copy
    },
]))

export const loaded = () => { removeLoadingMessage("loadingModels") }

