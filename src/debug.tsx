/**
 * This file defines debugging components, which should be disabled in production.
 */

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useStore } from "zustand"
import { createPersistingStore, createStore, ObjectEntries, ObjectKeys } from "./util"
import { useEffect, useState } from "preact/hooks"

const modelDebuggerStore = createStore({
    paused: false,
    version: 0,
    objectPools: {} as Record<string, number>,
}, (set, get) => ({
    stop: () => set({ paused: true }),
    resume: () => set({ paused: false }),
    refreshDebugger: () => set({ version: get().version + 1 }),
    setObjectPoolSize: (name: string, count: number) => set({ objectPools: { ...get().objectPools, [name]: count } }),
}))

const renderingOptionsStore = createPersistingStore("acgRenderingOptions", 2, {
    renderingOptions: {} as Record<string, boolean>
}, (set, get) => ({
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
    const [opened, setOpened] = useState(false)
    useEffect(() => { window.addEventListener("resize", () => { setInnerWidth(window.innerWidth) }) }, [])
    if (innerWidth < 680) { return <></> }
    return <div class="absolute right-56 bottom-1 [font-size:50%]">
        <button class="[font-size:150%] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)] mb-1 px-2" onClick={() => setOpened(!opened)}>{opened ? "Close" : "Open"} Debugger</button>
        {opened && <>
            {/* DEBUG: Rendering options */}
            <div class="px-3 pt-1 pb-3 window">
                <h2>[Debug] Rendering</h2>
                <div>
                    {ObjectEntries(renderingOptions).map(([name, checked]) => <label class="block">
                        <input type="checkbox" tabIndex={-1} class="mr-1" checked={checked} onClick={() => { setRenderingOption(name, !checked) }} />
                        <span>{name}</span>
                    </label>)}
                </div>
                <button class="px-4 hover:bg-opacity-60" tabIndex={-1} onClick={() => { location.reload() }}>Apply</button>
                <button class="px-4 hover:bg-opacity-60" tabIndex={-1} onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, true)) }}>Enable All</button>
                <button class="px-4 hover:bg-opacity-60" tabIndex={-1} onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, false)) }}>Disable All</button>
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
        </>}
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
