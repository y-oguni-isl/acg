import * as THREE from 'three'
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { domStore } from '../dom'

export const loadGLTF = async (filepath: string, height: number | null): Promise<THREE.Object3D> => {
    const obj = (await new Promise<GLTF>((resolve, reject) => new GLTFLoader().load(filepath, resolve, (xhr) => { domStore.setState({ loadingMessage: `Loading ${filepath} (${xhr.loaded}/${xhr.total})` }) }, reject)))
        .scene.children[0]!.children[0]!
    if (height !== null) {
        obj.scale.multiplyScalar(height / new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3()).y)
    }
    return obj
}
