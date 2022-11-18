import * as THREE from "three"
import { TransformControls } from "three/examples/jsm/controls/TransformControls"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import create, { useStore } from "zustand"
import { entries } from "./util"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import SuperJSON from "superjson"

const modelDebuggerStore = create<{
    stopped: boolean
    object: THREE.Object3D | null
    version: number,
    setObject: (obj: THREE.Object3D) => void
    stop: () => void
    resume: () => void
    refreshDebugger: () => void
}>()(immer((set) => ({
    stopped: false as boolean,
    object: null as THREE.Object3D | null,
    version: 0,
    setObject: (obj) => { set((d) => { d.object = obj }) },
    stop: () => { set((d) => { d.stopped = true }) },
    resume: () => { set((d) => { d.stopped = false }) },
    refreshDebugger: () => { set((d) => { d.version++ }) },
})))

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
    version: 1,
    // Allow saving Map, Set, etc.
    serialize: (s) => { return SuperJSON.stringify(s) },
    deserialize: (s) => SuperJSON.parse(s) as any,
}))

/** Returns a boolean indicating whether the component should be rendered or not, which can be controlled in the rendering options window. */
export const getRenderingOption = renderingOptionsStore.getState().getRenderingOption

export const Debugger = () => {
    const { object, resume, stop, stopped, refreshDebugger } = useStore(modelDebuggerStore)
    const { renderingOptions, setRenderingOption } = useStore(renderingOptionsStore)
    return <div class="absolute right-56 bottom-1 [font-size:50%]">
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
            <button class="px-4 hover:bg-opacity-60" onClick={() => { Object.keys(renderingOptions).forEach((k) => setRenderingOption(k, true)) }}>Enable All</button>
            <button class="px-4 hover:bg-opacity-60" onClick={() => { Object.keys(renderingOptions).forEach((k) => setRenderingOption(k, false)) }}>Disable All</button>
        </div>

        {/* DEBUG: 3D model debugger */}
        <div class="px-3 pt-1 pb-3 window">
            <h2>[Debug] 3D Models</h2>
            <div>
                {!stopped && <button class="px-2" onClick={() => { stop() }}>🛑 Stop</button>}
                {stopped && <button class="px-2 ml-1" onClick={() => { resume() }}>▶️ Resume</button>}
            </div>
            {stopped && (object === null ? <>Double click on objects.</> : <>
                <h3>{object.name}</h3>
                <table>
                    <tr>
                        <td>pos</td>
                        <td><input class="w-10 mr-1" value={object.position.x} onBlur={(ev) => { if (!object) { return } object.position.x = +ev.currentTarget.value; refreshDebugger() }} /></td>
                        <td><input class="w-10 mr-1" value={object.position.y} onBlur={(ev) => { if (!object) { return } object.position.y = +ev.currentTarget.value; refreshDebugger() }} /></td>
                        <td><input class="w-10 mr-1" value={object.position.z} onBlur={(ev) => { if (!object) { return } object.position.z = +ev.currentTarget.value; refreshDebugger() }} /></td>
                    </tr>
                    <tr>
                        <td>rot°</td>
                        <td><input class="w-10 mr-1" value={object.rotation.x / Math.PI * 180} onBlur={(ev) => { if (!object) { return } object.rotation.x = +ev.currentTarget.value / 180 * Math.PI; refreshDebugger() }} /></td>
                        <td><input class="w-10 mr-1" value={object.rotation.y / Math.PI * 180} onBlur={(ev) => { if (!object) { return } object.rotation.y = +ev.currentTarget.value / 180 * Math.PI; refreshDebugger() }} /></td>
                        <td><input class="w-10 mr-1" value={object.rotation.z / Math.PI * 180} onBlur={(ev) => { if (!object) { return } object.rotation.z = +ev.currentTarget.value / 180 * Math.PI; refreshDebugger() }} /></td>
                    </tr>
                </table>
            </>)}
        </div>
    </div>
}

export const init3DModelDebugger = (camera: THREE.Camera, renderer: THREE.Renderer, scene: THREE.Scene) => {
    // Allow the user to control the camera by dragging
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.listenToKeyEvents(window)

    const transformControls = new TransformControls(camera, renderer.domElement)
    scene.add(new THREE.AxesHelper(), transformControls)
    transformControls.addEventListener("dragging-changed", (ev) => {
        orbit.enabled = !ev.value
    })
    transformControls.addEventListener("objectChange", () => { modelDebuggerStore.getState().refreshDebugger() })
    renderer.domElement.addEventListener("dblclick", (ev) => {
        transformControls.detach()
        const raycaster = new THREE.Raycaster()
        raycaster.setFromCamera({ x: ev.clientX / window.innerWidth * 2 - 1, y: -ev.clientY / window.innerHeight * 2 + 1 }, camera)
        const interactiveObjects: THREE.Object3D[] = []
        scene.traverseVisible((obj) => { if (obj.name) { interactiveObjects.push(obj) } })
        const intersections = raycaster.intersectObjects(interactiveObjects, true)
        if (intersections[0]?.object === undefined) { return }
        transformControls.attach(intersections[0].object)
        modelDebuggerStore.getState().setObject(intersections[0].object)
    })

    return () => modelDebuggerStore.getState().stopped
}
