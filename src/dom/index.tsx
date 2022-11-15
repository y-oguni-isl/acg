import { render } from "preact"
import Upgrades from "./upgrades"
import create, { useStore } from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"
import { bounties, deleteSaveData, enemyNames, getState, isStageSystemUnlocked, store, tutorials } from "../saveData"
import { entries } from "../util"
import { Ref, useEffect, useRef, useState } from "preact/hooks"
import type { JSXInternal } from "preact/src/jsx"
import modelDebuggerStore from "../modelDebugger"
import { enableMapSet } from "immer"
import SuperJSON from "superjson"
import { updatePerSecond } from "../hooks"

enableMapSet()

/** A mapping from tutorial names to their indices.  */
const tutorialIndices = new Map((Object.keys(tutorials) as (keyof typeof tutorials)[]).map((name, i) => [name, i]))

/** A black banner showing a tutorial message. */
const Tutorial = () => {
    const tutorial = useStore(store, (s) =>
        [...s.availableTutorials]
            .filter((t) => !s.completedTutorials.has(t))
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    return <div style={{ opacity: tutorial === undefined ? "0" : "1" }} class="absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none">
        {tutorial && tutorials[tutorial]}
    </div>
}

/** The current state of the DOM (HTML). */
export const domStore = create<{
    renderingOptions: Record<string, boolean>
    news: readonly [headline: string, text: string] | null

    getRenderingOption: (name: string, defaultValue?: boolean) => boolean
    setRenderingOption: (name: string, value: boolean) => void
}>()(persist(immer((set, get) => ({
    renderingOptions: {},
    news: null as readonly [headline: string, text: string] | null,

    getRenderingOption: (name, defaultValue = true) => {
        set((d) => { if (!(name in d.renderingOptions)) { d.renderingOptions[name] = defaultValue } })
        return get().renderingOptions[name]!
    },
    setRenderingOption: (name, value) => { set((d) => { d.renderingOptions[name] = value }) }
})), {
    name: "acgDOMStore",
    version: 1,

    // Allow saving Map, Set, etc.
    serialize: (s) => { return SuperJSON.stringify(s) },
    deserialize: (s) => SuperJSON.parse(s) as any,
}))

// Loading messages should not be persisted
type EnemyStatus = { hp: number, name: typeof enemyNames[number] }  // TODO: name: string, maxHP: number
export const ephemeralDOMStore = create<{
    loadingMessage: Map<string, string>
    enemyStatus: EnemyStatus | null
    setLoadingMessage: (key: string, message: string) => void,
    removeLoadingMessage: (key: string) => void,
    setEnemyStatus: (status: EnemyStatus) => void
}>()(immer((set, get) => ({
    loadingMessage: new Map(),
    enemyStatus: null as (EnemyStatus | null),
    setLoadingMessage: (key, message) => { set((d) => { d.loadingMessage.set(key, message) }) },
    removeLoadingMessage: (key: string) => { set((d) => { d.loadingMessage.delete(key) }) },
    setEnemyStatus: (status) => { set((d) => { d.enemyStatus = status }) }
})))

/** Returns a boolean indicating whether the component should be rendered or not, which can be controlled in the rendering options window. */
export const getRenderingOption = domStore.getState().getRenderingOption

/** Close the dialog when the user clicks outside the dialog */
const closeDialogOnClick = (ev: JSXInternal.TargetedMouseEvent<HTMLDialogElement>) => {
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
}

/** A random text to fill newspapers. */
const randomText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

const ModelDebugger = () => {
    const state = useStore(modelDebuggerStore)
    return <div class="px-3 pt-1 pb-3 window">
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
}

const EnemyStats = () => {
    const enemyStatus = useStore(ephemeralDOMStore, (s) => s.enemyStatus)
    if (!enemyStatus) { return <></> }
    return <div class="px-3 pt-1 pb-3 window mt-1 mb-1">
        <h2 class="mb-2">Stats</h2>
        <div>
            <table>
                <tr><td class="pr-1">HP</td><td>{Math.max(0, Math.round(enemyStatus.hp))}</td></tr>
                <tr><td class="pr-1">Money</td><td>{bounties[enemyStatus.name]}</td></tr>
            </table>
        </div>
    </div>
}

const UI = () => {
    const state = useStore(domStore)
    const newsDialog = useRef() as Ref<HTMLDialogElement>
    const creditDialog = useRef() as Ref<HTMLDialogElement>
    const [creditHTML, setCreditHTML] = useState<string>("")
    const isStageWindowVisible = useStore(store, isStageSystemUnlocked)
    const loadingMessage = useStore(ephemeralDOMStore, (s) => s.loadingMessage)
    const weather = useStore(store, (s) => s.getWeather())
    const weatherEffectWillBeEnabledInLessThan = useStore(store, (s) => Math.ceil(s.weatherEffectWillBeEnabledInLessThan[s.stage] / updatePerSecond / 60))

    useEffect(() => {
        fetch("./audio/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + html) })
            .catch(console.error)
        fetch("./models/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + html) })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (state.news === null) { return }
        newsDialog.current!.style.opacity = "0"
        newsDialog.current!.showModal()
        newsDialog.current!.style.opacity = "1"
        newsDialog.current!.addEventListener("close", () => {
            domStore.setState({ news: null })
            getState().addTutorial("nextStage")
        }, { once: true })
    }, [state.news])

    return <>
        {/* Upgrades */}
        <Upgrades />

        {/* Tutorial message */}
        <Tutorial />

        <div class="absolute right-1 top-1 w-52">
            {/* Stages */}
            {isStageWindowVisible && <div class="px-3 pt-1 pb-3 window">
                <h2 class="mb-2">Stages</h2>
                <div>
                    <button class="w-full mb-1" onClick={() => { getState().setStageTransitingTo(0) }}>Earth</button><br />
                    <button class="w-full mb-1" onClick={() => { getState().setStageTransitingTo(1) }}>Universe</button>
                    <button class="w-full mb-1" disabled onClick={() => { /* TODO: */ }}>???</button>
                </div>
            </div>}

            {/* Weather */}
            {weather !== null && <div class="px-3 pt-1 pb-3 window mt-1 mb-1">
                <h2 class="mb-2">Weather</h2>
                <div>
                    <table>
                        <tr><td class="pr-1">{!weather.enabled && ">"}</td><td class={!weather.enabled ? "font-bold" : ""}>Normal</td></tr>
                        <tr><td class="pr-1">{weather.enabled && ">"}</td><td class={weather.enabled ? "font-bold" : ""}>{weather.name}{!weather.enabled && <> (in {"<" + weatherEffectWillBeEnabledInLessThan} min{weatherEffectWillBeEnabledInLessThan !== 1 && "s"})</>}</td></tr>
                    </table>
                </div>
            </div>}

            {/* Enemy */}
            <EnemyStats />
        </div>

        <div class="absolute right-56 bottom-1">
            {/* DEBUG: Rendering options */}
            <div class="px-3 pt-1 pb-3 window mb-1">
                <h2>[Debug] Rendering</h2>
                <div>
                    {entries(state.renderingOptions).map(([name, checked]) => <label class="block">
                        <input type="checkbox" class="mr-1" checked={checked} onClick={() => { state.setRenderingOption(name, !checked) }} />
                        <span>{name}</span>
                    </label>)}
                </div>
                <button class="px-4 hover:bg-opacity-60" onClick={() => { location.reload() }}>Apply</button>
            </div>

            {/* DEBUG: 3D model debugger */}
            <ModelDebugger />
        </div>

        {/* The buttons at the left bottom corner */}
        <div class="absolute left-1 bottom-1 px-5 pb-1 window">
            <span class="cursor-pointer" onClick={() => { creditDialog.current!.showModal() }}>Credit</span>
            <span class="cursor-pointer text-red-400 ml-5" onClick={() => {
                if (confirm("Are you sure you want to reset your save data?")) {
                    deleteSaveData()
                    location.reload()
                }
            }}>Reset Progress</span>
        </div>

        {/* Credits */}
        <dialog ref={creditDialog} class="p-2" onClick={closeDialogOnClick}>
            <div class="p-5">
                <h1 class="text-xl mb-2">Credits</h1>
                <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold"></ul>
            </div>
        </dialog>

        {/* Newspaper */}
        <dialog ref={newsDialog} class="bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [transition:opacity_ease_0.3s]" onClick={closeDialogOnClick}>
            {state.news && <div class="[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden  h-full">
                <h2 class="text-lg font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center">{state.news[0]}</h2>
                <span>{state.news[1]}</span>
                <span class="text-gray-500">{randomText}</span>
            </div>}
        </dialog>

        {/* Loading message */}
        {loadingMessage.size > 0 && <div class="text-white absolute top-[35%] left-0 w-full text-center whitespace-pre">{[...loadingMessage.values()].join("\n")}</div>}
    </>
}

render(<UI />, document.body)
