import { render } from "preact"
import Upgrades from "./upgrades"
import create, { useStore } from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"
import { deleteSaveData, getState, store } from "../saveData"
import { useEffect, useRef, useState } from "preact/hooks"
import type { JSXInternal } from "preact/src/jsx"
import { enableMapSet } from "immer"
import SuperJSON from "superjson"
import { Debugger } from "../debug"
import Autolinker from "autolinker"
import stages from "../stages"
import { ObjectEntries, fromEntries, ObjectKeys, ObjectValues } from "../util"
import * as constants from "../constants"
import shallow from 'zustand/shallow'

enableMapSet()

/** A mapping from tutorial names to their indices.  */
const tutorialIndices = new Map(ObjectKeys(constants.tutorialHTML).map((name, i) => [name, i]))

/** A black banner showing a tutorial message. */
const Tutorial = () => {
    const tutorial = useStore(store, (s) =>
        [...s.availableTutorials.difference(s.completedTutorials)]
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    return <div style={{ opacity: tutorial === undefined ? "0" : "1" }} class="absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10">
        {tutorial && <><i class="ti ti-message-report" /> <span class="[&>b]:text-orange-300" dangerouslySetInnerHTML={{ __html: constants.tutorialHTML[tutorial] }}></span></>}
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
type EnemyStatus = { hp: number, name: string, money: number }
export const ephemeralDOMStore = create<{
    loadingMessage: Map<string, string>
    enemyStatus: EnemyStatus | null
    powerSaveMode: boolean
    setLoadingMessage: (key: string, message: string) => void,
    removeLoadingMessage: (key: string) => void,
    setEnemyStatus: (status: EnemyStatus) => void
    updatePowerSaveModeState: () => void
}>()(immer((set, get) => ({
    loadingMessage: new Map(),
    enemyStatus: null as (EnemyStatus | null),
    powerSaveMode: false,
    setLoadingMessage: (key, message) => { set((d) => { d.loadingMessage.set(key, message) }) },
    removeLoadingMessage: (key: string) => { set((d) => { d.loadingMessage.delete(key) }) },
    setEnemyStatus: (status) => {
        set((d) => {
            d.enemyStatus = status
            d.enemyStatus.hp = Math.max(0, Math.round(d.enemyStatus.hp))
        })
    },
    updatePowerSaveModeState: () => { set((d) => { d.powerSaveMode = document.visibilityState === "hidden" || !document.hasFocus() }) }
})))

ephemeralDOMStore.getState().updatePowerSaveModeState()
document.addEventListener("visibilitychange", () => { ephemeralDOMStore.getState().updatePowerSaveModeState() })
window.addEventListener("blur", () => { ephemeralDOMStore.getState().updatePowerSaveModeState() })
window.addEventListener("focus", () => { ephemeralDOMStore.getState().updatePowerSaveModeState() })

/** Close the dialog when the user clicks outside the dialog */
const closeDialogOnClick = (ev: JSXInternal.TargetedMouseEvent<HTMLDialogElement>) => {
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
}

/** A random text to fill newspapers. */
const randomText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

const EnemyStats = () => {
    const enemyStatus = useStore(ephemeralDOMStore, (s) => s.enemyStatus, shallow)
    if (!enemyStatus) { return <></> }
    return <div class="px-3 pt-1 pb-3 window mt-1 mb-1">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-chart-line" /> Enemy Stats</h2>
        <div>
            <table class="tracking-wide">
                <tr><td class="pr-1"><i class="ti ti-float-none" /></td><td>{enemyStatus.name}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-heart" /></td><td>{enemyStatus.hp}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-moneybag" /></td><td>{enemyStatus.money}</td></tr>
            </table>
        </div>
    </div>
}

const UI = () => {
    const state = useStore(domStore)
    const newsDialog = useRef<HTMLDialogElement>(null)
    const creditDialog = useRef<HTMLDialogElement>(null)
    const [creditHTML, setCreditHTML] = useState<string>("")
    const areStageNamesVisible = useStore(store, () => fromEntries(ObjectEntries(stages).map(([k, v]) => [k, v.visible()])), shallow)
    const loadingMessage = useStore(ephemeralDOMStore, (s) => s.loadingMessage)
    const weather = useStore(store, (s) => s.getWeather(), shallow)
    const weatherEffectWillBeEnabledInLessThan = useStore(store, (s) => Math.ceil((s.weatherEffectWillBeEnabledInLessThan[s.stage] ?? Number.MAX_SAFE_INTEGER) / constants.updatePerSecond / 60))
    const transcending = useStore(store, (s) => s.transcending)
    const powerSaveMode = useStore(ephemeralDOMStore, (s) => s.powerSaveMode)
    const stage = useStore(store, (s) => s.stage)

    useEffect(() => {
        for (const f of [
            "./audio/credit.html",
            "./models/credit.html",
            "./font/credit.html",
            "./lib_credit.html",
            "./lib_credit2.html",
        ]) {
            fetch(f)
                .then((res) => res.text())
                .then((html) => { setCreditHTML((c) => c + Autolinker.link(html)) })
                .catch(console.error)
        }
    }, [])

    useEffect(() => {
        if (state.news === null) { return }
        setTimeout(() => {
            newsDialog.current!.style.opacity = "0"
            newsDialog.current!.showModal()
            newsDialog.current!.style.opacity = "1"
            newsDialog.current!.addEventListener("close", () => {
                domStore.getState().hideNews()
                getState().addTutorial("nextStage")
            }, { once: true })
        }, 2000)
    }, [state.news])

    if (transcending) {
        return <div class="absolute window w-full h-full">
            <div class="m-auto w-fit h-fit text-center p-[30vh]">
                <h2>Transcending...</h2>
                <p class="my-4">
                    Enemies in the next world will have 500x the HP and money.
                </p>
                {/*
                TODO: The bonus for this ascension is .... A new stage will be unlocked at the next ascension.
                Choose a bonus:
                <ul class="list-disc ml-6">
                    <li>ATK×2</li>
                    <li>Enemy×2</li>
                </ul> */}
                <div class="float-right">
                    <span class="gold"><button class="px-8" onClick={() => { getState().confirmTranscending() }}>Confirm</button></span>
                    <button class="px-8 ml-2" onClick={() => { getState().cancelTranscending() }}>Cancel</button>
                </div>
            </div>
        </div>
    }

    return <>
        {/* Upgrades */}
        <Upgrades />

        {/* Tutorial message */}
        <Tutorial />

        {powerSaveMode && <div class="absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10">
            <div class="relative py-3 px-8 mx-auto w-fit text-white bg-slate-800 bg-opacity-70 rounded-sm">
                <h2 class="tracking-wide">Power Save Mode</h2>
                <p class="[font-size:60%] text-gray-200 tracking-wide">Power Save Mode stops rendering the game,<br />but the game still runs in the background.</p>
            </div>
        </div>}

        <div class="absolute right-1 top-1 min-w-[13rem]">
            {/* Stages */}
            {ObjectValues(areStageNamesVisible).some((v) => v) && <div class="px-3 pt-1 pb-3 window">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-map-2" /> Stages</h2>
                <div>{ObjectKeys(stages).map((name) =>
                    <button
                        tabIndex={-1}
                        class="w-full mb-1"
                        onClick={() => { getState().setStageTransitingTo(name) }}
                        disabled={!areStageNamesVisible[name] || stage === name}
                        data-checked={stage === name}>
                        {areStageNamesVisible[name] ? name : "???"}
                    </button>)}
                </div>
            </div>}

            {/* Weather */}
            {weather !== null && <div class="px-3 pt-1 pb-3 window mt-1 mb-1">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-sun" /> Weather</h2>
                <div>
                    <table>
                        <tr><td class="pr-1">{!weather.enabled && ">"}</td><td class={"tracking-wider " + (!weather.enabled ? "font-bold" : "")}>Normal</td></tr>
                        <tr><td class="pr-1">{weather.enabled && ">"}</td><td class={"tracking-wider " + (weather.enabled ? "font-bold" : "")}>{weather.name}{!weather.enabled && <span class="text-gray-300"> (in {"<" + weatherEffectWillBeEnabledInLessThan} min{weatherEffectWillBeEnabledInLessThan !== 1 && "s"})</span>}</td></tr>
                    </table>
                </div>
            </div>}

            {/* Enemy */}
            <EnemyStats />
        </div>

        <Debugger />

        {/* The buttons at the left bottom corner */}
        <div class="absolute left-1 bottom-1 px-5 pb-1 window tracking-wide">
            <span class="cursor-pointer hover:text-gray-200" onClick={() => { creditDialog.current!.showModal() }}><i class="ti ti-license" /> Credit</span>
            <span class="cursor-pointer text-red-400 hover:text-red-500 ml-5" onClick={() => {
                if (confirm("Are you sure you want to reset your save data?")) {
                    deleteSaveData()
                    location.reload()
                }
            }}><i class="ti ti-eraser" /> Reset Progress</span>
        </div>

        {/* Credits */}
        <dialog ref={creditDialog} class="window p-2" onClick={closeDialogOnClick}>
            <div class="p-5">
                <h1 class="text-xl mb-2 tracking-wider w-full text-center">Credits</h1>
                <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"></ul>
            </div>
        </dialog>

        {/* Newspaper */}
        <dialog ref={newsDialog} class="bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [transition:opacity_ease_0.3s] [font-family:KottaOne]" onClick={closeDialogOnClick}>
            {state.news && <div class="[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full">
                <h2 class="text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center">{state.news[0]}</h2>
                <span>{state.news[1]}</span>
                <span class="text-gray-500"> {randomText}</span>
            </div>}
        </dialog>

        {/* Loading message */}
        {loadingMessage.size > 0 && <div class="text-white absolute top-[35%] left-0 w-full text-center whitespace-pre">{[...loadingMessage.values()].join("\n")}</div>}
    </>
}

render(<UI />, document.body)
