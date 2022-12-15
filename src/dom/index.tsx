import { render } from "preact"
import Upgrades from "./upgrades"
import { useStore } from "zustand"
import { deleteSaveData, getState, store } from "../saveData"
import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks"
import { Debugger } from "../debug"
import Autolinker from "autolinker"
import stages from "../stages"
import { ObjectEntries, ObjectFromEntries, ObjectKeys, ObjectValues, createPersistingStore, createStore } from "../util"
import * as constants from "../constants"
import shallow from "zustand/shallow"
import { removeTooltip, setTooltip, Tooltip } from "./tooltip"
import cursorDefault from "../../cursor.png"
import cursorPointer from "../../cursor-pointer.png"
import Dialog, { DialogRef } from "./dialog"
import Modal from "react-modal"
import "./buttonAnimation"

/** A mapping from tutorial names to their indices.  */
const tutorialIndices = new Map(ObjectKeys(constants.tutorialHTML).map((name, i) => [name, i]))

/** A black banner showing a tutorial message. */
const Tutorial = () => {
    const currentTutorial = useStore(store, (s) =>
        [...new Set(ObjectKeys(s.availableTutorials)).difference(new Set(ObjectKeys(s.completedTutorials)))]
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    const lastTutorial = useRef<constants.TutorialName | undefined>(undefined)  // Remember previous message to keep text when fading out
    useLayoutEffect(() => { lastTutorial.current = currentTutorial ?? lastTutorial.current }, [currentTutorial])
    return <div style={{ opacity: currentTutorial === undefined ? "0" : "1" }} class="absolute w-[90%] py-3 left-[5%] px-16 text-center top-[70%] [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10 window-popup">
        {(currentTutorial ?? lastTutorial.current) && <><i class="ti ti-message-report absolute left-4 top-0 [font-size:250%]" /><span class="[&>b]:text-orange-300">{constants.tutorialHTML[(currentTutorial ?? lastTutorial.current)!]}</span></>}
    </div>
}

/** The current state of the DOM (HTML), persisted in {@link localStorage}. */
export const domStore = createPersistingStore("acgDOMStore", 3, {
    news: null as readonly [headline: string, text: string] | null,
    usePowerSaveMode: true,
    sfxVolume: 1,
    bgmVolume: 1,
    resolutionMultiplier: 1,
    quality: "standard" as "standard" | "high",
}, (set, get) => ({
    showNews: (news: readonly [headline: string, text: string]) => { set({ news: [...news] }) },
    hideNews: () => { set({ news: null }) },
}))

// Loading messages should not be persisted
type EnemyStatus = { hp: number, name: string, money: number, items: { readonly [k in constants.ItemName]?: number } }

/** The current state of the DOM (HTML). Unlike {@link domStore}, this store manages data that should not be persisted in {@link localStorage}. */
export const nonpersistentDOMStore = createStore("acgNonpersistentDOMStore", {
    enemyStatus: null as (EnemyStatus | null),
    powerSaveMode: false,
    updateFPSMonitor: () => { },
}, (set, get) => ({
    setEnemyStatus: (status: EnemyStatus) => { set({ enemyStatus: { ...status, hp: Math.max(0, Math.round(status.hp)) } }) },
    updatePowerSaveModeState: () => { set({ powerSaveMode: domStore.getState().usePowerSaveMode && (document.visibilityState === "hidden" || !document.hasFocus()) }) },
    setFPSMonitorCallback: (updateFPSMonitor: () => void) => { set({ updateFPSMonitor }) }
}))

nonpersistentDOMStore.getState().updatePowerSaveModeState()
document.addEventListener("visibilitychange", () => { nonpersistentDOMStore.getState().updatePowerSaveModeState() })
window.addEventListener("blur", () => { nonpersistentDOMStore.getState().updatePowerSaveModeState() })
window.addEventListener("focus", () => { nonpersistentDOMStore.getState().updatePowerSaveModeState() })

/** A random text to fill newspapers. */
const randomText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

/** The "Enemy Stats" window */
const EnemyStats = () => {
    const enemyStatus = useStore(nonpersistentDOMStore, (s) => s.enemyStatus, shallow)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    if (!enemyStatus) { return <></> }
    return <div class="pl-3 pr-4 pt-1 pb-3 window">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-chart-line" /> Enemy Stats</h2>
        <div>
            <table class="tracking-wide">
                <tr><td class="pr-1"><i class="ti ti-float-none" /></td><td>{enemyStatus.name}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-heart" /></td><td>{enemyStatus.hp}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-moneybag" /></td><td>{enemyStatus.money}</td></tr>
                {hasVacuum && <tr><td class="pr-1"><i class="ti ti-notes" /></td><td>{ObjectKeys(enemyStatus.items).length === 0 ? "-" : ObjectEntries(enemyStatus.items).map(([k, v]) => <>{k} {v}</>)}</td></tr>}
            </table>
        </div>
    </div>
}

/** The "Items" window */
const Items = () => {
    const items = useStore(store, (s) => s.items)
    return <div class="pr-3 pl-4 pt-1 pb-3 window">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-notes" /> Items</h2>
        <table class="w-full">{ObjectEntries(items).map(([k, v]) =>
            <tr class="border-b-2 border-b-gray-200 border-opacity-60"
                onMouseEnter={() => { setTooltip(`left:item-${k}`, constants.flavorText[k]) }}
                onMouseLeave={() => { removeTooltip(`left:item-${k}`) }}>
                <td><i class={k === "Food" ? "ti ti-meat" : "ti ti-settings"} /> {k}</td><td class="text-right">{v}</td>
            </tr>)}
        </table>
    </div>
}

/** The "transcend" (or "ascend") window */
const Transcend = () => {
    const canTranscend = useStore(store, (s) => s.canTranscend)
    return <>
        {canTranscend && <div class="pr-3 pl-4 pt-1 pb-3 window gold">
            <h2><i class="ti ti-arrows-transfer-up" /> Transcendence</h2>
            <p class="text-xs mb-2">
                You have reached the point of singularity and can transcended to a higher plane of existence.
            </p>
            {/* Higher plane of existence = enemies have more HP and money */}
            <button class="w-full" tabIndex={-1} onClick={() => { getState().transcend() }}><i class="ti ti-list" /> Show Bonus</button>
        </div>}
    </>
}

/** The tooltip shown when the mouse cursor is on the "Prev" button in the "Exploration" window */
const ExplorationPrevTooltip = () => {
    const explorationLv = useStore(store, (s) => s.getExplorationLv())
    return <table>
        <tr><td><i class="ti ti-heart" /></td><td>×{explorationLv} → ×{explorationLv - 1}</td></tr>
        <tr><td><i class="ti ti-moneybag" /></td><td>×{explorationLv} → ×{explorationLv - 1}</td></tr>
        <tr><td><i class="ti ti-notes" /></td><td>×{explorationLv} → ×{explorationLv - 1}</td></tr>
    </table>
}

/** The tooltip shown when the mouse cursor is on the "Next" button in the "Exploration" window */
const ExplorationNextTooltip = () => {
    const explorationLv = useStore(store, (s) => s.getExplorationLv())
    return <table>
        <tr><td><i class="ti ti-heart" /></td><td>×{explorationLv} → ×{explorationLv + 1}</td></tr>
        <tr><td><i class="ti ti-moneybag" /></td><td>×{explorationLv} → ×{explorationLv + 1}</td></tr>
        <tr><td><i class="ti ti-notes" /></td><td>×{explorationLv} → ×{explorationLv + 1}</td></tr>
    </table>
}

/**
 * We're using a div with `position: absolute` instead of the `cursor: url(...)` CSS property because cursors displayed by `cursor: url(...)` are resized according to the operating system's cursor size setting, and it can reduce the resolution of the cursor images.
 */
const Cursor = () => {
    const [position, setPosition] = useState<[number, number] | null>(null)
    const [style, setStyle] = useState<"default" | "pointer">("default")
    useEffect(() => {
        const onMouseMove = (ev: MouseEvent) => {
            setPosition([ev.clientX, ev.clientY])
            const element = document.elementFromPoint(ev.clientX, ev.clientY)
            setStyle(element?.matches(".pointer,.pointer *,button,button *,a,input,.ReactModal__Overlay") ? "pointer" : "default")
        }
        const onMouseLeave = () => { setPosition(null) }
        window.addEventListener("mousemove", onMouseMove)
        document.body.addEventListener("mouseleave", onMouseLeave)
        window.addEventListener("blur", onMouseLeave)
        return () => {
            window.removeEventListener("mousemove", onMouseMove)
            document.body.removeEventListener("mouseleave", onMouseLeave)
            window.removeEventListener("blur", onMouseLeave)
        }
    }, [])
    return position ? <img
        src={style === "default" ? cursorDefault : cursorPointer}
        style={{ left: position[0] - 10, top: position[1] - 4 }}
        class="absolute z-20 pointer-events-none"></img> : <></>
}

/** FPS monitor */
const FPSMonitor = () => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const queue: number[] = []
        let t = 0
        nonpersistentDOMStore.getState().setFPSMonitorCallback(() => {
            if (!ref.current) { return }
            const now = performance.now()
            queue.push(now)
            if (queue.length > 30) {
                queue.shift()
            }
            if (t++ % 20 === 0) {
                if (queue.length < 2) {
                    ref.current.innerText = " 0.0 fps"
                } else {
                    const elapsed = now - queue[0]!
                    ref.current.innerText = `${(1000 / (elapsed / (queue.length - 1))).toFixed(1).padStart(4)} fps`
                }
            }
        })
    })
    return <div ref={ref} class="absolute right-0 bottom-0 text-white bg-black bg-opacity-30 px-2 rounded-tl-lg font-mono whitespace-pre"></div>
}

/** The root component */
const UI = () => {
    const state = useStore(domStore)
    const newsDialog = useRef<DialogRef>(null)
    const creditDialog = useRef<DialogRef>(null)
    const resetProgressDialog = useRef<DialogRef>(null)
    const optionsDialog = useRef<DialogRef>(null)
    const [creditHTML, setCreditHTML] = useState<string>("")
    const areStageNamesVisible = useStore(store, () => ObjectFromEntries(ObjectEntries(stages).map(([k, v]) => [k, v.visible()])), shallow)
    const weather = useStore(store, (s) => s.getWeather())
    const weatherEffectWillBeEnabledInLessThan = useStore(store, (s) => Math.ceil((s.weatherEffectWillBeEnabledInLessThan[s.stage] ?? Number.MAX_SAFE_INTEGER) / 60))
    const isWeatherSystemUnlocked = useStore(store, (s) => constants.isWeatherSystemUnlocked(s))
    const transcending = useStore(store, (s) => s.transcending)
    const powerSaveMode = useStore(nonpersistentDOMStore, (s) => s.powerSaveMode)
    const stage = useStore(store, (s) => s.stage)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    const explorationLv = useStore(store, (s) => s.getExplorationLv())

    // Download the credit files in parallel
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

    // Show the news dialog when a news is set to `state.news`
    useEffect(() => {
        if (state.news === null) { return }
        setTimeout(() => {
            if (!newsDialog.current) { return }
            newsDialog.current.showModal()
        }, 2000)
    }, [state.news])

    // The "Transcending..." dialog
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
                    <span class="gold"><button class="px-8" onClick={() => { getState().confirmTranscending() }}><i class="ti ti-check" /> Confirm</button></span>
                    <button class="px-8 ml-2" onClick={() => { getState().cancelTranscending() }}><i class="ti ti-x" /> Cancel</button>
                </div>
            </div>
            <Cursor />
        </div>
    }

    return <>
        {/* Top-Left Pane */}
        <div class="absolute left-[-4px] top-2 w-44 sm:w-72 h-full [&>*]:mt-3 [transform:perspective(5cm)_rotateY(2deg)]">
            <Upgrades />
            {hasVacuum && <Items />}
            <Transcend />
            <div class="pr-3 pl-4 py-1 window window--oneline w-fit tracking-wide [&>*:not(:first-child)]:ml-5">
                <span
                    class="pointer hover:text-white"
                    onClick={() => { creditDialog.current!.showModal() }}
                    onMouseEnter={() => { setTooltip("left:license", <>License</>) }}
                    onMouseLeave={() => { removeTooltip("left:license") }}>
                    <i class="ti ti-license" />
                </span>
                <span
                    class="pointer hover:text-white"
                    onClick={() => { optionsDialog.current!.showModal() }}
                    onMouseEnter={() => { setTooltip("left:options", <>Graphics Settings</>) }}
                    onMouseLeave={() => { removeTooltip("left:options") }}>
                    <i class="ti ti-tool" />
                </span>
            </div>

            {/* Tooltip */}
            <Tooltip filter={(key) => key.startsWith("left:")} />
        </div>

        {/* Top-Right pane */}
        <div class="absolute right-[-4px] top-2 min-w-[7rem] h-full sm:min-w-[13rem] [&>*]:mt-3 [transform:perspective(5cm)_rotateY(-2deg)]">
            {/* Stages */}
            {ObjectValues(areStageNamesVisible).some((v) => v) && <div class="pl-3 pr-4 pt-1 pb-3 window">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-map-2" /> Stages</h2>
                <div class="[&>*:not(:last-child)]:mb-1">{ObjectKeys(stages).map((name) => <div class="relative">
                    <button
                        tabIndex={-1}
                        class={"w-full ![border-radius:2rem_0.5rem_2rem_0.5rem]" + (stage === name ? " button-primary" : "")}
                        onClick={() => { getState().setStageTransitingTo(name) }}
                        disabled={!areStageNamesVisible[name] || stage === name}>
                        {areStageNamesVisible[name] ? name : "???"}
                    </button>
                </div>)}
                </div>
            </div>}

            {/* Weather */}
            {isWeatherSystemUnlocked && constants.weathers[stage] !== null && <div class="pl-3 pr-4 pt-1 pb-3 window">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-sun" /> Weather</h2>
                <div>
                    <table>
                        <tr><td class="pr-1">{!weather && ">"}</td><td class={"tracking-wider " + (!weather ? "font-bold" : "")}>Normal</td></tr>
                        <tr><td class="pr-1">{weather && ">"}</td><td class={"tracking-wider " + (weather ? "font-bold" : "")}>{constants.weathers[stage]}{!weather && <span class="text-gray-300"> (in {"<" + weatherEffectWillBeEnabledInLessThan} min{weatherEffectWillBeEnabledInLessThan !== 1 && "s"})</span>}</td></tr>
                    </table>
                </div>
            </div>}

            {/* Enemy */}
            <EnemyStats />

            {/* Explore */}
            {hasVacuum && stage !== "Mothership" && <div class="pl-3 pr-4 pt-1 pb-3 window">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-route" /> Explore: <span class="tracking-tight">Lv. {explorationLv}</span></h2>
                <button
                    class="block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center relative"
                    onClick={() => { getState().exploreNext() }}
                    onMouseEnter={() => { setTooltip("right:explorationNext", <ExplorationNextTooltip />) }}
                    onMouseLeave={() => { removeTooltip("right:explorationNext") }}>
                    <i class="ti ti-arrow-forward" /> Next
                    <span class="[font-size:80%] tracking-tighter absolute right-2"><i class="ti ti-meat ml-3 mr-1" />{constants.explorationCost(explorationLv)}</span>
                </button>
                {explorationLv >= 2 && <button
                    class="block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center mt-1"
                    onClick={() => { getState().explorePrev() }}
                    onMouseEnter={() => { setTooltip("right:explorationPrev", <ExplorationPrevTooltip />) }}
                    onMouseLeave={() => { removeTooltip("right:explorationPrev") }}>
                    <i class="ti ti-arrow-back" /> Prev
                </button>}
            </div>}

            {/* Tooltip */}
            <Tooltip filter={(key) => key.startsWith("right:")} />
        </div>

        {/* Tutorial Message */}
        <Tutorial />

        {/* Power Save Mode */}
        {powerSaveMode && <div class="absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10">
            <div class="relative py-3 px-8 mx-auto w-fit window-popup">
                <h2 class="tracking-wide text-orange-300"><i class="ti ti-zzz inline-block" /> Power Save Mode</h2>
                <p class="[font-size:60%] tracking-wide">Power Save Mode stops rendering the game,<br />but the game still runs in the background.</p>
            </div>
        </div>}

        <Debugger />

        {/* "Reset Progress" Dialog */}
        <Dialog class="p-5" ref_={resetProgressDialog}>
            <p>Are you sure you want to reset your save data?</p>
            <div class="float-right mt-4">
                <button class="px-4 button-primary" onClick={() => {
                    deleteSaveData()
                    location.reload()
                }}><i class="ti ti-check" /> Reset</button>
                <button class="px-4 ml-2" onClick={() => { resetProgressDialog.current!.close() }}><i class="ti ti-x" /> Cancel</button>
            </div>
        </Dialog>

        {/* Credits Dialog */}
        <Dialog ref_={creditDialog} class="p-5">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center">Credits</h1>
            <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"></ul>
        </Dialog>

        {/* Options Dialog */}
        <Dialog ref_={optionsDialog} class="py-4 px-10">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center"><i class="ti ti-tool" /> Graphics Settings</h1>
            <table>
                <tr>
                    <td class="pr-4 text-right" title="Power Save Mode stops rendering the game,<br />but the game still runs in the background."><i class="ti ti-zzz" /> Power Save Mode</td>
                    <td><label class="pointer"><input type="checkbox" checked={state.usePowerSaveMode} onChange={(ev) => { domStore.setState({ usePowerSaveMode: ev.currentTarget.checked }) }} /> enabled</label></td>
                </tr>
                <tr>
                    <td class="pr-4 text-right"><i class="ti ti-arrows-minimize" /> Resolution</td>
                    <td class="[&>*:not(:first-child)]:ml-2">
                        <label><input type="radio" name="resolution" checked={state.resolutionMultiplier === 1} onChange={(ev) => { domStore.setState({ resolutionMultiplier: 1 }) }} /> x1</label>
                        <label><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 }) }} /> x0.7</label>
                        <label><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 2} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 2 }) }} /> x0.5</label>
                        <label><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 3} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 3 }) }} /> x0.35</label>
                        <label><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 4} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 4 }) }} /> x0.25</label>
                    </td>
                </tr>
                <tr>
                    <td class="pr-4 text-right"><i class="ti ti-flame" /> Quality</td>
                    <td class="[&>*:not(:first-child)]:ml-2">
                        <label><input type="radio" name="quality" value="high" checked={state.quality === "high"} onChange={(ev) => { domStore.setState({ quality: ev.currentTarget.value as "high" | "standard" }) }} /> High</label>
                        <label><input type="radio" name="quality" value="standard" checked={state.quality === "standard"} onChange={(ev) => { domStore.setState({ quality: ev.currentTarget.value as "high" | "standard" }) }} /> Standard</label>
                    </td>
                </tr>

                {/* todo */}
                {/* <tr>
                    <td class="pr-4 text-right">Sound Effect</td>
                    <td><input type="range" class="w-32 align-middle" value={state.sfxVolume} min={0} max={1} step={0.05} onChange={(ev) => { domStore.setState({ sfxVolume: +ev.currentTarget.value }) }} /></td>
                </tr>
                <tr>
                    <td class="pr-4 text-right">Background Music</td>
                    <td><input type="range" class="w-32 align-middle" value={state.bgmVolume} min={0} max={1} step={0.05} onChange={(ev) => { domStore.setState({ bgmVolume: +ev.currentTarget.value }) }} /></td>
                </tr> */}
            </table>
            <div class="pointer text-orange-300 hover:text-orange-400 mt-4" onClick={() => {
                optionsDialog.current?.close()
                resetProgressDialog.current?.showModal()
            }}><i class="ti ti-eraser" /> Reset Progress</div>
        </Dialog>

        {/* Newspaper Dialog */}
        <Dialog ref_={newsDialog} class="from-gray-200 to-gray-400 bg-gradient-to-b [box-shadow:0_0_5px_1px_#00000040] [border-radius:2px] w-[400px] h-[620px] p-5 box-border shadow-2xl select-none" onClose={() => {
            domStore.getState().hideNews()
            getState().addTutorial("nextStage")
        }}>
            {state.news && <div class="[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full [font-family:KottaOne] [-webkit-text-stroke:3px_rgba(0,0,0,0.05)] text-gray-900">
                <h2 class="text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center">{state.news[0]}</h2>
                <span>{state.news[1]}</span>
                <span class="text-gray-500"> {randomText}</span>
            </div>}
            <button class="sm:hidden absolute right-2 bottom-2 px-4" onClick={() => { newsDialog.current!.close() }}>Close</button>
        </Dialog>

        {/* Cursor */}
        <Cursor />

        {/* FPS monitor */}
        <FPSMonitor />
    </>
}

Modal.setAppElement(document.body)
render(<UI />, document.body)
