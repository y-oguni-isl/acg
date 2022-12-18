/**
 * This file defines debugging components, which should be disabled in production.
 */

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useStore } from "zustand"
import { createPersistingStore, createStore, ObjectEntries, ObjectKeys } from "./util"
import { useToggle, useWindowSize } from "usehooks-ts"
import { Button } from "./dom/components"

const debuggerStore = createStore("acgDebugger", {
    paused: false,
    version: 0,
    objectPools: {} as Record<string, number>,
}, (set, get) => ({
    stop: () => set({ paused: true }),
    resume: () => set({ paused: false }),
    refreshDebugger: () => set({ version: get().version + 1 }),
    setObjectPoolSize: (name: string, count: number) => set({ objectPools: { ...get().objectPools, [name]: count } }),
}))

export const renderingOptionsStore = createPersistingStore("acgRenderingOptions", 2, {
    reduceAnimations: false,
    renderingOptions: {} as Record<string, boolean>
}, (set, get) => ({
    setReduceAnimations: (reduceAnimations: boolean) => { set({ reduceAnimations }) },
    getRenderingOption: (name: string, defaultValue: boolean = true) => {
        set((s) => name in s.renderingOptions ? {} : { renderingOptions: { ...s.renderingOptions, [name]: defaultValue } })
        return get().renderingOptions[name]!
    },
    setRenderingOption: (name: string, value: boolean) => set((s) => ({ renderingOptions: { ...s.renderingOptions, [name]: value } })),
}))

/** Returns a boolean indicating whether the component should be rendered or not, which can be controlled in the rendering options window. */
export const logObjectPoolSize = debuggerStore.getState().setObjectPoolSize

export const Debugger = () => {
    if (import.meta.env.PROD) { return <></> }
    const { resume, stop, paused, objectPools } = useStore(debuggerStore)
    const { renderingOptions, setRenderingOption, reduceAnimations, setReduceAnimations: setReduceAnimation } = useStore(renderingOptionsStore)
    const windowSize = useWindowSize()
    const [opened, toggle] = useToggle(true)

    if (windowSize.width < 680) { return <></> }

    return <div class="absolute right-56 bottom-1 [font-size:50%]">
        <Button class="[font-size:150%] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)] mb-1 px-2" onClick={() => toggle()}>{opened ? "Close" : "Open"} Debugger</Button>
        {opened && <>
            {/* Animations */}
            <div class="px-3 pt-1 pb-3 mb-1 window">
                <h2>Animations</h2>
                <label><input type="checkbox" checked={reduceAnimations} onChange={(ev) => { setReduceAnimation(ev.currentTarget.checked) }} /> Reduce Animations</label>
            </div>

            {/* Rendering options */}
            <div class="px-3 pt-1 pb-3 mb-1 window">
                <h2>Rendering</h2>
                <div>
                    {ObjectEntries(renderingOptions).map(([name, checked]) => <label class="block">
                        <input type="checkbox" tabIndex={-1} class="mr-1" checked={checked} onClick={() => { setRenderingOption(name, !checked) }} />
                        <span>{name}</span>
                    </label>)}
                </div>
                <Button class="px-4 hover:bg-opacity-60" onClick={() => { location.reload() }}>Apply</Button>
                <Button class="px-4 hover:bg-opacity-60" onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, true)) }}>Enable All</Button>
                <Button class="px-4 hover:bg-opacity-60" onClick={() => { ObjectKeys(renderingOptions).forEach((k) => setRenderingOption(k, false)) }}>Disable All</Button>
            </div>

            {/* 3D model debugger */}
            <div class="px-3 pt-1 pb-3 mb-1 window">
                <h2>3D Models</h2>
                You can move the camera by dragging the screen when the game is paused.
                <div>
                    {!paused && <Button class="px-2" onClick={() => { stop() }}><i class="ti ti-player-pause" /> Pause</Button>}
                    {paused && <Button class="px-2" onClick={() => { resume() }}><i class="ti ti-player-play" /> Resume</Button>}
                </div>
            </div>

            {/* Object Pools */}
            <div class="px-3 pt-1 pb-3 window">
                <h2>Object Pools</h2>
                <table>
                    {ObjectEntries(objectPools).sort((a, b) => a[0].localeCompare(b[0])).map(([k, v]) => <tr><td>{k}</td><td>{v}</td></tr>)}
                </table>
            </div>
        </>}
    </div>
}

export const init3DModelDebugger = (camera: THREE.Camera, renderer: THREE.Renderer, scene: THREE.Scene) => {
    if (import.meta.env.PROD) { return () => false }
    if (!renderingOptionsStore.getState().getRenderingOption("debugger")) { return () => false }

    // Allow the user to control the camera by dragging
    const orbit = new OrbitControls(camera, renderer.domElement)
    orbit.listenToKeyEvents(window)

    orbit.enabled = debuggerStore.getState().paused
    debuggerStore.subscribe((s) => { orbit.enabled = s.paused })

    scene.add(new THREE.AxesHelper())

    return () => debuggerStore.getState().paused
}
