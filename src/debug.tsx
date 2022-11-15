import * as THREE from "three"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import create, { useStore } from "zustand"
import { entries } from "./util"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import SuperJSON from "superjson"

const modelDebuggerStore = create<{
    stop: boolean
    object: THREE.Object3D | null
    objectChangeCount: number,
}>()((set) => ({
    stop: false,
    object: null,
    objectChangeCount: 0,
}))

const renderingOptionsStore = create<{
    renderingOptions: Record<string, boolean>
    getRenderingOption: (name: string, defaultValue?: boolean) => boolean
    setRenderingOption: (name: string, value: boolean) => void
}>()(persist(immer((set, get) => ({
    renderingOptions: {},
    getRenderingOption: (name, defaultValue = true) => {
        set((d) => { if (!(name in d.renderingOptions)) { d.renderingOptions[name] = defaultValue } })
        return get().renderingOptions[name]!
    },
    setRenderingOption: (name, value) => { set((d) => { d.renderingOptions[name] = value }) },
})), {
    name: "acgRenderingOptions",
    // Allow saving Map, Set, etc.
    serialize: (s) => { return SuperJSON.stringify(s) },
    deserialize: (s) => SuperJSON.parse(s) as any,
}))

/** Returns a boolean indicating whether the component should be rendered or not, which can be controlled in the rendering options window. */
export const getRenderingOption = renderingOptionsStore.getState().getRenderingOption

// DOM
export const Debugger = () => {
    const state = useStore(modelDebuggerStore)
    const { renderingOptions, setRenderingOption } = useStore(renderingOptionsStore)
    return <div class="absolute right-56 bottom-1">
        {/* DEBUG: Rendering options */}
        <div class="px-3 pt-1 pb-3 window mb-1">
            <h2>[Debug] Rendering</h2>
            <div>
                {entries(renderingOptions).map(([name, checked]) => <label class="block">
                    <input type="checkbox" class="mr-1" checked={checked} onClick={() => { setRenderingOption(name, !checked) }} />
                    <span>{name}</span>
                </label>)}
            </div>
            <button class="px-4 hover:bg-opacity-60" onClick={() => { location.reload() }}>Apply</button>
        </div>

        {/* DEBUG: 3D model debugger */}
        <div class="px-3 pt-1 pb-3 window">
            <h2>[Debug] 3D Models</h2>
            <div>
                {!state.stop && <button class="px-2" onClick={() => { modelDebuggerStore.setState({ stop: true }) }}>🛑 Stop</button>}
                {state.stop && <button class="px-2 ml-1" onClick={() => { modelDebuggerStore.setState({ stop: false }) }}>▶️ Resume</button>}
            </div>
            {state.stop && (state.object === null ? <>Double click on objects.</> : <>
                <h3>{state.object.name}</h3>
                <table>
                    <tr>
                        <td>pos</td>
                        <td><input class="w-10 mr-1" value={state.object.position.x} onBlur={(ev) => { if (!state.object) { return } state.object.position.x = +ev.currentTarget.value; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                        <td><input class="w-10 mr-1" value={state.object.position.y} onBlur={(ev) => { if (!state.object) { return } state.object.position.y = +ev.currentTarget.value; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                        <td><input class="w-10 mr-1" value={state.object.position.z} onBlur={(ev) => { if (!state.object) { return } state.object.position.z = +ev.currentTarget.value; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                    </tr>
                    <tr>
                        <td>rot°</td>
                        <td><input class="w-10 mr-1" value={state.object.rotation.x / Math.PI * 180} onBlur={(ev) => { if (!state.object) { return } state.object.rotation.x = +ev.currentTarget.value / 180 * Math.PI; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                        <td><input class="w-10 mr-1" value={state.object.rotation.y / Math.PI * 180} onBlur={(ev) => { if (!state.object) { return } state.object.rotation.y = +ev.currentTarget.value / 180 * Math.PI; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                        <td><input class="w-10 mr-1" value={state.object.rotation.z / Math.PI * 180} onBlur={(ev) => { if (!state.object) { return } state.object.rotation.z = +ev.currentTarget.value / 180 * Math.PI; modelDebuggerStore.setState({ objectChangeCount: state.objectChangeCount + 1 }) }} /></td>
                    </tr>
                </table>
            </>)}
        </div>
    </div>
}

// Three.js
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

    return () => modelDebuggerStore.getState().stop
}
