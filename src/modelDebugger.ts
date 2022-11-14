import * as THREE from "three"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import create from "zustand"

const modelDebuggerStore = create<{
    stop: boolean
    object: THREE.Object3D | null
    objectChangeCount: number,
}>()((set) => ({
    stop: false,
    object: null,
    objectChangeCount: 0,
}))

export const init3DModelDebugger = (camera: THREE.Camera, renderer: THREE.Renderer, scene: THREE.Scene) => {
    // Allow the user to control the camera by dragging
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.listenToKeyEvents(window)

    const transformControls = new TransformControls(camera, renderer.domElement)
    scene.add(transformControls)
    transformControls.addEventListener("dragging-changed", (ev) => {
        orbit.enabled = !ev.value
    })
    transformControls.addEventListener("objectChange", () => { modelDebuggerStore.setState((s) => ({ objectChangeCount: s.objectChangeCount + 1 })) })
    renderer.domElement.addEventListener("dblclick", (ev) => {
        transformControls.detach()
        const raycaster = new THREE.Raycaster()
        raycaster.setFromCamera({ x: ev.clientX / window.innerWidth * 2 - 1, y: -ev.clientY / window.innerHeight * 2 + 1 }, camera)
        const interactiveObjects: THREE.Object3D[] = []
        scene.traverseVisible((obj) => { if (obj.name) { interactiveObjects.push(obj) } })
        const intersections = raycaster.intersectObjects(interactiveObjects, true)
        if (intersections[0]?.object === undefined) { return }
        transformControls.attach(intersections[0].object)
        modelDebuggerStore.setState({ object: intersections[0].object })
    })
}

export default modelDebuggerStore
