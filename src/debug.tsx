/**
 * This file defines debugging components that should be disabled in production.
 */

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import create, { useStore } from "zustand"
import { defineActions, ObjectEntries, ObjectKeys } from "./util"
import { persist } from "zustand/middleware"
import { useEffect, useState } from "preact/hooks"

const modelDebuggerStore = defineActions(create<{
    paused: boolean
    version: number,
    objectPools: Record<string, number>
}>()(() => ({
    paused: false as boolean,
    object: null as THREE.Object3D | null,
    version: 0,
    objectPools: {},
})), (set, get) => ({
    stop: () => set({ paused: true }),
    resume: () => set({ paused: false }),
    refreshDebugger: () => set({ version: get().version + 1 }),
    setObjectPoolSize: (name: string, count: number) => set({ objectPools: { ...get().objectPools, [name]: count } }),
}))

const renderingOptionsStore = defineActions(create<{
    renderingOptions: Record<string, boolean>
}>()(persist(() => ({
    renderingOptions: {},
}), {
    name: "acgRenderingOptions",
    version: 2,
})), (set, get) => ({
    getRenderingOption: (name: string, defaultValue: boolean = true) => {
        set((s) => name in s.renderingOptions ? {} : { renderingOptions: { ...s.renderingOptions, [name]: defaultValue } })
        return get().renderingOptions[name]!
    },
    setRenderingOption: (name: string, value: boolean) => set((s) => ({ renderingOptions: { ...s.renderingOptions, [name]: value } })),
}))

/** Returns a boolean indicating whether the component should be rendered or not, which can be controlled in the rendering options window. */
export const getRenderingOption = renderingOptionsStore.getState().getRenderingOption
export const logObjectPoolSize = modelDebuggerStore.getState().setObjectPoolSize

export const Debugger = () => {
    if (import.meta.env.PROD) { return <></> }
    const { resume, stop, paused, objectPools } = useStore(modelDebuggerStore)
    const { renderingOptions, setRenderingOption } = useStore(renderingOptionsStore)
    const [innerWidth, setInnerWidth] = useState(() => window.innerWidth)
    useEffect(() => { window.addEventListener("resize", () => { setInnerWidth(window.innerWidth) }) }, [])
    if (innerWidth < 680) { return <></> }
    return <div class="absolute right-56 bottom-1 [font-size:50%]">
        {/* DEBUG: Rendering options */}
        <div class="px-3 pt-1 pb-3 window">
            <h2>[Debug] Rendering</h2>
            <div>
                {ObjectEntries(renderingOptions).map(([name, checked]) => <label class="block">
                    <input type="checkbox" class="mr-1" checked={checked} onClick={() => { setRenderingOption(name, !checked) }} />
                    <span>{name}</span>
                </label>)}
            </div>
            <button class="px-4 hover:bg-opacity-60" onClick={() => { location.reload() }}>Apply</button>
            <button class="px-4 hover:bg-opacity-60" onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, true)) }}>Enable All</button>
            <button class="px-4 hover:bg-opacity-60" onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, false)) }}>Disable All</button>
        </div>

        {/* DEBUG: 3D model debugger */}
        <div class="px-3 pt-1 pb-3 window">
            <h2>[Debug] 3D Models</h2>
            You can move the camera by dragging the screen while the game is paused.
            <div>
                {!paused && <button class="px-2" onClick={() => { stop() }}>🛑 Pause</button>}
                {paused && <button class="px-2 ml-1" onClick={() => { resume() }}>▶️ Resume</button>}
            </div>
        </div>
        <div class="px-3 pt-1 pb-3 window">
            <h2>[Debug] Object Pools</h2>
            <table>
                {ObjectEntries(objectPools).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => <tr><td>{k}</td><td>{v}</td></tr>)}
            </table>
        </div>
    </div>
}

export const init3DModelDebugger = (camera: THREE.Camera, renderer: THREE.Renderer, scene: THREE.Scene) => {
    if (import.meta.env.PROD) { return () => false }
    if (!getRenderingOption("debugger")) { return () => false }

    // Allow the user to control the camera by dragging
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.listenToKeyEvents(window)

    orbit.enabled = modelDebuggerStore.getState().paused
    modelDebuggerStore.subscribe((s) => { orbit.enabled = s.paused })

    scene.add(new THREE.AxesHelper())

    return () => modelDebuggerStore.getState().paused
}
