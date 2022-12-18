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
import { Dialog, DialogRef, FrostedGlassWindow } from "./components"
import Modal from "react-modal"
import "./buttonAnimation"
import { useEventListener } from "usehooks-ts"

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
    displayFPSCounter: import.meta.env.DEV,
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
    updateFPSCounter: () => { },
}, (set, get) => ({
    setEnemyStatus: (status: EnemyStatus) => { set({ enemyStatus: { ...status, hp: Math.max(0, Math.round(status.hp)) } }) },
    updatePowerSaveModeState: () => { set({ powerSaveMode: domStore.getState().usePowerSaveMode && (document.visibilityState === "hidden" || !document.hasFocus()) }) },
    setFPSCounterCallback: (updateFPSCounter: () => void) => { set({ updateFPSCounter: updateFPSCounter }) }
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
    return <FrostedGlassWindow visible={enemyStatus !== null} transitionDurationSec={0.9} class="pl-3 pr-4 pt-1 pb-3">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-chart-line" /> Enemy Stats</h2>
        <div>
            <table class="tracking-wide">
                <tr><td class="pr-1"><i class="ti ti-float-none" /></td><td>{enemyStatus?.name}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-heart" /></td><td>{enemyStatus?.hp}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-moneybag" /></td><td>{enemyStatus?.money}</td></tr>
                {hasVacuum && <tr><td class="pr-1"><i class="ti ti-notes" /></td><td>{ObjectKeys(enemyStatus?.items ?? {}).length === 0 ? "-" : ObjectEntries(enemyStatus?.items ?? {}).map(([k, v]) => <>{k} {v}</>)}</td></tr>}
            </table>
        </div>
    </FrostedGlassWindow>
}

/** The "Items" window */
const Items = () => {
    const items = useStore(store, (s) => s.items)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    return <FrostedGlassWindow visible={hasVacuum} transitionDurationSec={0.8} class="pr-3 pl-4 pt-1 pb-3">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-notes" /> Items</h2>
        <table class="w-full">{ObjectEntries(items).map(([k, v]) =>
            <tr class="border-b-2 border-b-gray-200 border-opacity-60"
                onMouseOver={() => { setTooltip(`left:item-${k}`, constants.flavorText[k]) }}
                onMouseOut={() => { removeTooltip(`left:item-${k}`) }}>
                <td><i class={k === "Food" ? "ti ti-meat" : "ti ti-settings"} /> {k}</td><td class="text-right">{v}</td>
            </tr>)}
        </table>
    </FrostedGlassWindow>
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

const useParticleImage = () => {
    const [image, setImage] = useState<HTMLImageElement | null>(null)
    useEffect(() => {
        const img = new Image()
        img.src = "./vfx/particle-blue.png"
        img.onload = () => { setImage(img) }
    }, [])
    return image
}

/**
 * We're using a div with `position: absolute` instead of the `cursor: url(...)` CSS property because cursors displayed by `cursor: url(...)` are resized according to the operating system's cursor size setting, and it can reduce the resolution of the cursor images.
 */
const Cursor = () => {
    const [position, setPosition] = useState<[number, number] | null>(null)
    const [style, setStyle] = useState<"default" | "pointer">("default")
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particleImage = useParticleImage()

    // Listen for mouse events
    useEventListener("mousemove", (ev) => {
        setPosition([ev.clientX, ev.clientY])
        const element = document.elementFromPoint(ev.clientX, ev.clientY)
        setStyle(element?.matches(".pointer,.pointer *,button,button *,a,input,.ReactModal__Overlay") ? "pointer" : "default")
    })
    useEventListener("mouseleave", () => { setPosition(null) }, { current: document.body })
    useEventListener("blur", () => { setPosition(null) })

    // Draw on the canvas
    useEffect(() => {
        if (!canvasRef.current || !particleImage) { return }
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")!
        if (style === "pointer") {
            let canceled = false
            const loop = () => {
                if (canceled) { return }
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                const drawParticle = (size: number) => { ctx.drawImage(particleImage, canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size) }
                const t = (Date.now() % 1000) / 1000
                ctx.globalCompositeOperation = "lighter"
                ctx.globalAlpha = (1 - t) * 0.5
                drawParticle(20 + t * 60)
                ctx.globalAlpha = 0.5
                drawParticle(15)
                requestAnimationFrame(loop)
            }
            loop()
            return () => { canceled = true }
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }, [style])

    return <>
        <canvas
            ref={canvasRef}
            width="100"
            height="100"
            style={position ? { left: position[0] - 54, top: position[1] - 52 } : {}}
            class={"absolute z-[19] pointer-events-none mix-blend-plus-lighter" + (position ? "" : " hidden")} />
        <img
            src={style === "default" ? cursorDefault : cursorPointer}
            style={position ? { left: position[0] - 10, top: position[1] - 4 } : {}}
            class={"absolute z-20 pointer-events-none" + (position ? "" : " hidden")} />
    </>
}

/** FPS counter */
const FPSCounter = () => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const queue: number[] = []
        let t = 0
        nonpersistentDOMStore.getState().setFPSCounterCallback(() => {
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
    }, [])
    return <div ref={ref} class="absolute right-0 bottom-0 text-white bg-black bg-opacity-30 px-2 rounded-tl-lg font-mono whitespace-pre"></div>
}

/** The root component */
const UI = () => {
    const state = useStore(domStore)
    const newsDialog = useRef<DialogRef>(null)
    const creditDialog = useRef<DialogRef>(null)
    const resetProgressDialog = useRef<DialogRef>(null)
    const optionsDialog = useRef<DialogRef>(null)
    const transcendenceDialog = useRef<DialogRef>(null)
    const [creditHTML, setCreditHTML] = useState<string>("")
    const areStageNamesVisible = useStore(store, () => ObjectFromEntries(ObjectEntries(stages).map(([k, v]) => [k, v.visible()])), shallow)
    const weather = useStore(store, (s) => s.getWeather())
    const weatherEffectWillBeEnabledInLessThan = useStore(store, (s) => Math.ceil((s.weatherEffectWillBeEnabledInLessThan[s.stage] ?? Number.MAX_SAFE_INTEGER) / 60))
    const isWeatherSystemUnlocked = useStore(store, (s) => constants.isWeatherSystemUnlocked(s))
    const powerSaveMode = useStore(nonpersistentDOMStore, (s) => s.powerSaveMode)
    const stage = useStore(store, (s) => s.stage)
    const duringStageTransition = useStore(store, (s) => s.stageTransitingTo !== null)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    const explorationLv = useStore(store, (s) => s.getExplorationLv())
    const displayFPSCounter = useStore(domStore, (s) => s.displayFPSCounter)
    const canTranscend = useStore(store, (s) => s.canTranscend)

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

    return <>
        {/* Top-Left Pane */}
        <div class={"absolute left-[-4px] top-2 w-44 sm:w-72 h-full [&>*]:mt-3 [transform:perspective(5cm)_rotateY(2deg)] " + (duringStageTransition ? " [&>*]:[transform:translateX(-400px)]" : "")}>
            <Upgrades />
            <Items />
            <FrostedGlassWindow visible={canTranscend} transitionDurationSec={0.9} class="pr-3 pl-4 pt-1 pb-3 window--gold">
                <h2><i class="ti ti-arrows-transfer-up" /> Transcendence</h2>
                <p class="text-xs mb-2">
                    You have reached the point of singularity and can transcended to a higher plane of existence.
                </p>
                {/* Higher plane of existence = enemies have more HP and money */}
                <button class="w-full button--gold" tabIndex={-1} onClick={() => { transcendenceDialog.current?.showModal() }}><i class="ti ti-list" /> Show Bonus</button>
            </FrostedGlassWindow>
            <FrostedGlassWindow visible={true} transitionDurationSec={1} class="pr-3 pl-4 py-1 window--oneline w-fit tracking-wide [&>*:not(:first-child)]:ml-5">
                <span
                    class="pointer hover:text-white"
                    onClick={() => { optionsDialog.current!.showModal() }}
                    onMouseOver={() => { setTooltip("left:options", <>Open Settings</>) }}
                    onMouseOut={() => { removeTooltip("left:options") }}>
                    <i class="ti ti-tool" />
                </span>
                <span
                    class="pointer hover:text-white"
                    onClick={() => { creditDialog.current!.showModal() }}
                    onMouseOver={() => { setTooltip("left:license", <>Show License</>) }}
                    onMouseOut={() => { removeTooltip("left:license") }}>
                    <i class="ti ti-license" />
                </span>
                <span
                    class="pointer hover:text-white"
                    onClick={() => {
                        window.open("https://twitter.com/intent/tweet/?" + new URLSearchParams({
                            text: document.title,
                            url: location.href,
                            // hashtags: "hashtags",
                        }).toString(), "", "width=600, height=480")?.focus()
                    }}
                    onMouseOver={() => { setTooltip("left:share", <>Tweet</>) }}
                    onMouseOut={() => { removeTooltip("left:share") }}>
                    <i class="ti ti-brand-twitter" />
                </span>
            </FrostedGlassWindow>

            {/* Tooltip */}
            <Tooltip filter={(key) => key.startsWith("left:")} />
        </div>

        {/* Top-Right pane */}
        <div class={"absolute right-[-4px] top-2 min-w-[7rem] h-full sm:min-w-[13rem] [&>*]:mt-3 [transform:perspective(5cm)_rotateY(-2deg)]" + (duringStageTransition ? " [&>*]:[transform:translateX(400px)]" : "")}>
            {/* Stages */}
            <FrostedGlassWindow visible={ObjectValues(areStageNamesVisible).some((v) => v)} transitionDurationSec={0.6} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-map-2" /> Stages</h2>
                <div class="[&>*:not(:last-child)]:mb-1">{ObjectKeys(stages).map((name) => <div class="relative">
                    <button
                        tabIndex={-1}
                        class={"w-full ![border-radius:2rem_0.5rem_2rem_0.5rem]" + (stage === name ? " button--blue" : "")}
                        onClick={() => { getState().setStageTransitingTo(name) }}
                        disabled={!areStageNamesVisible[name] || stage === name}>
                        {areStageNamesVisible[name] ? name : "???"}
                    </button>
                </div>)}
                </div>
            </FrostedGlassWindow>

            {/* Weather */}
            <FrostedGlassWindow visible={isWeatherSystemUnlocked && constants.weathers[stage] !== null} transitionDurationSec={0.8} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-sun" /> Weather</h2>
                <div>
                    <table>
                        <tr><td class="pr-1">{!weather && ">"}</td><td class={"tracking-wider " + (!weather ? "font-bold" : "")}>Normal</td></tr>
                        <tr><td class="pr-1">{weather && ">"}</td><td class={"tracking-wider " + (weather ? "font-bold" : "")}>{constants.weathers[stage]}{!weather && <span class="text-gray-300"> (in {"<" + weatherEffectWillBeEnabledInLessThan} min{weatherEffectWillBeEnabledInLessThan !== 1 && "s"})</span>}</td></tr>
                    </table>
                </div>
            </FrostedGlassWindow>

            {/* Enemy */}
            <EnemyStats />

            {/* Explore */}
            <FrostedGlassWindow visible={hasVacuum && stage !== "Mothership"} transitionDurationSec={1} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-route" /> Explore: <span class="tracking-tight">Lv. {explorationLv}</span></h2>
                <button
                    class="block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center relative"
                    onClick={() => { getState().exploreNext() }}
                    onMouseOver={() => { setTooltip("right:explorationNext", <ExplorationNextTooltip />) }}
                    onMouseOut={() => { removeTooltip("right:explorationNext") }}>
                    <i class="ti ti-arrow-forward" /> Next
                    <span class="[font-size:80%] tracking-tighter absolute right-2"><i class="ti ti-meat ml-3 mr-1" />{constants.explorationCost(explorationLv)}</span>
                </button>
                <button
                    class={"block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center mt-1" + (explorationLv >= 2 ? "" : " hidden")}
                    onClick={() => { getState().explorePrev() }}
                    onMouseOver={() => { setTooltip("right:explorationPrev", <ExplorationPrevTooltip />) }}
                    onMouseOut={() => { removeTooltip("right:explorationPrev") }}>
                    <i class="ti ti-arrow-back" /> Prev
                </button>
            </FrostedGlassWindow>

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
                <button class="px-4 button--blue" onClick={() => {
                    deleteSaveData()
                    location.reload()
                }}><i class="ti ti-check" /> Reset</button>
                <button class="px-4 ml-2" onClick={() => { resetProgressDialog.current!.close() }}><i class="ti ti-x" /> Cancel</button>
            </div>
        </Dialog>

        {/* Transcendence Dialog */}
        <Dialog ref_={transcendenceDialog} class="pt-8 px-8 pb-6 text-center dialog--gold">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center">Transcending...</h1>
            <p class="mt-4 mb-6">
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
                <button class="px-8 button--gold" onClick={() => { transcendenceDialog.current?.close(); getState().transcend() }}><i class="ti ti-check" /> Confirm</button>
                <button class="px-8 ml-2 button--white" onClick={() => { transcendenceDialog.current?.close() }}><i class="ti ti-x" /> Cancel</button>
            </div>
        </Dialog>

        {/* Credits Dialog */}
        <Dialog ref_={creditDialog} class="p-5">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center">Credits</h1>
            <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"></ul>
        </Dialog>

        {/* Options Dialog */}
        <Dialog ref_={optionsDialog} class="py-4 px-10">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center"><i class="ti ti-tool" /> Settings</h1>
            <table>
                <tr
                    onMouseOver={() => { setTooltip(`center:power-save-mode`, <>Power Save Mode stops rendering the game,<br />but the game still runs in the background.</>) }}
                    onMouseOut={() => { removeTooltip(`center:power-save-mode`) }}>
                    <td class="pr-4 text-right"><i class="ti ti-zzz" /> Power Save Mode</td>
                    <td><label class="pointer"><input type="checkbox" checked={state.usePowerSaveMode} onChange={(ev) => { domStore.setState({ usePowerSaveMode: ev.currentTarget.checked }) }} /> enabled</label></td>
                </tr>
                <tr
                    onMouseOver={() => { setTooltip(`center:fps-counter`, <>A FPS counter is added to the bottom-right<br />corner of the screen if enabled.</>) }}
                    onMouseOut={() => { removeTooltip(`center:fps-counter`) }}>
                    <td class="pr-4 text-right"><i class="ti ti-device-watch" /> FPS Counter</td>
                    <td><label class="pointer"><input type="checkbox" checked={state.displayFPSCounter} onChange={(ev) => { domStore.setState({ displayFPSCounter: ev.currentTarget.checked }) }} /> enabled</label></td>
                </tr>
                <tr
                    onMouseOver={() => { setTooltip(`center:resolution`, <>Choose a lower resolution <br />if you're having performance issues.</>) }}
                    onMouseOut={() => { removeTooltip(`center:resolution`) }}>
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
            <div
                class="pointer text-orange-300 hover:text-orange-400 mt-4"
                onMouseOver={() => { setTooltip(`center:reset-progress`, <>Delete the save data and restart from the beginning.</>) }}
                onMouseOut={() => { removeTooltip(`center:reset-progress`) }}
                onClick={() => {
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

        {/* FPS Counter */}
        {displayFPSCounter && <FPSCounter />}

        <Tooltip class="z-30" filter={(key) => key.startsWith("center:")} />
    </>
}

Modal.setAppElement(document.body)
render(<UI />, document.body)
