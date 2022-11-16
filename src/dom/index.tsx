import { render } from "preact"
import Upgrades from "./upgrades"
import create, { useStore } from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"
import { bounties, deleteSaveData, enemyNames, getState, areStageNamesVisible, store, tutorials, stageNames } from "../saveData"
import { Ref, useEffect, useRef, useState } from "preact/hooks"
import type { JSXInternal } from "preact/src/jsx"
import { enableMapSet } from "immer"
import SuperJSON from "superjson"
import { updatePerSecond } from "../hooks"
import { Debugger } from "../debug"
import Autolinker from "autolinker"

enableMapSet()

/** A mapping from tutorial names to their indices.  */
const tutorialIndices = new Map((Object.keys(tutorials) as (keyof typeof tutorials)[]).map((name, i) => [name, i]))

/** A black banner showing a tutorial message. */
const Tutorial = () => {
    const tutorial = useStore(store, (s) =>
        [...s.availableTutorials]
            .filter((t) => !s.completedTutorials.has(t))
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    return <div style={{ opacity: tutorial === undefined ? "0" : "1" }} class="absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10">
        {tutorial && tutorials[tutorial]}
    </div>
}

/** The current state of the DOM (HTML). */
export const domStore = create<{
    news: readonly [headline: string, text: string] | null
    showNews: (news: readonly [headline: string, text: string]) => void
    hideNews: () => void
}>()(persist(immer((set, get) => ({
    news: null as readonly [headline: string, text: string] | null,
    showNews: (news) => { set((d) => { d.news = [...news] }) },
    hideNews: () => { set((d) => { d.news = null }) },
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

/** Close the dialog when the user clicks outside the dialog */
const closeDialogOnClick = (ev: JSXInternal.TargetedMouseEvent<HTMLDialogElement>) => {
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
}

/** A random text to fill newspapers. */
const randomText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

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
    const areStageNamesVisible_ = useStore(store, areStageNamesVisible)
    const loadingMessage = useStore(ephemeralDOMStore, (s) => s.loadingMessage)
    const weather = useStore(store, (s) => s.getWeather())
    const weatherEffectWillBeEnabledInLessThan = useStore(store, (s) => Math.ceil(s.weatherEffectWillBeEnabledInLessThan[s.stage] / updatePerSecond / 60))

    useEffect(() => {
        fetch("./audio/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + Autolinker.link(html)) })
            .catch(console.error)
        fetch("./models/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + Autolinker.link(html)) })
            .catch(console.error)
        fetch("./font/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + Autolinker.link(html)) })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (state.news === null) { return }
        newsDialog.current!.style.opacity = "0"
        newsDialog.current!.showModal()
        newsDialog.current!.style.opacity = "1"
        newsDialog.current!.addEventListener("close", () => {
            domStore.getState().hideNews()
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
            {Object.values(areStageNamesVisible_).some((v) => v) && <div class="px-3 pt-1 pb-3 window">
                <h2 class="mb-2">Stages</h2>
                <div>{stageNames.map((name) =>
                    <button
                        class="w-full mb-1"
                        onClick={() => { getState().setStageTransitingTo(name) }}
                        disabled={!areStageNamesVisible_[name]}>
                        {areStageNamesVisible_[name] ? name : "???"}
                    </button>)}
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

        <Debugger />

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
        <dialog ref={creditDialog} class="window p-2" onClick={closeDialogOnClick}>
            <div class="p-5">
                <h1 class="text-xl mb-2">Credits</h1>
                <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text"></ul>
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
