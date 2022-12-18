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
import { Button, Dialog, DialogRef, FrostedGlassWindow } from "./components"
import Modal from "react-modal"
import "./buttonAnimation"
import { displayLanguageStore, LanguageCode, useTranslation } from "./i18n"
import { Cursor } from "./cursor"

/** The setting values, which can be changed in the settings dialog. */
export const domStore = createPersistingStore("acgDOMStore", 4, {
    news: null as constants.NewsName | null,
    usePowerSaveMode: true,
    displayFPSCounter: import.meta.env.DEV,
    sfxVolume: 1,
    bgmVolume: 1,
    resolutionMultiplier: 1,
    quality: "standard" as "standard" | "high",
}, (set, get) => ({
    showNews: (news: constants.NewsName) => { set({ news }) },
    hideNews: () => {
        if (get().news === "aliensComing") {
            getState().addTutorial("nextStage")
        }
        set({ news: null })
    },
}))

/** A mapping from tutorial names to their indices.  */
const tutorialIndices = new Map(constants.tutorialName.map((name, i) => [name, i]))

/** A black banner showing a tutorial message. */
const Tutorial = () => {
    const { t } = useTranslation()
    const currentTutorial = useStore(store, (s) =>
        [...new Set(ObjectKeys(s.availableTutorials)).difference(new Set(ObjectKeys(s.completedTutorials)))]
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    const lastTutorial = useRef<constants.TutorialName | undefined>(undefined)  // Remember previous message to keep text when fading out
    useLayoutEffect(() => { lastTutorial.current = currentTutorial ?? lastTutorial.current }, [currentTutorial])
    const displayedTutorial = currentTutorial ?? lastTutorial.current
    return <div style={{ opacity: currentTutorial === undefined ? "0" : "1" }} class="absolute w-[90%] py-3 left-[5%] px-16 text-center top-[70%] [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10 window-popup">
        {displayedTutorial && <><i class="ti ti-message-report absolute left-4 top-0 [font-size:250%]" /><span class="[&>b]:text-orange-300">{t(`tutorial-${displayedTutorial}`)}</span></>}
    </div>
}

// Loading messages should not be persisted
type EnemyStatus = { hp: number, name: constants.EnemyName, money: number, items: { readonly [k in constants.ItemName]?: number } }

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
    const { t } = useTranslation()
    const enemyStatus = useStore(nonpersistentDOMStore, (s) => s.enemyStatus, shallow)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    return <FrostedGlassWindow visible={enemyStatus !== null} transitionDurationSec={0.9} class="pl-3 pr-4 pt-1 pb-3">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-chart-line" /> {t("Enemy Stats")}</h2>
        <div>
            <table class="tracking-wide">
                <tr><td class="pr-1"><i class="ti ti-float-none" /></td><td>{enemyStatus?.name && t(enemyStatus.name)}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-heart" /></td><td>{enemyStatus?.hp}</td></tr>
                <tr><td class="pr-1"><i class="ti ti-moneybag" /></td><td>{enemyStatus?.money}</td></tr>
                {hasVacuum && <tr><td class="pr-1"><i class="ti ti-notes" /></td><td>{ObjectKeys(enemyStatus?.items ?? {}).length === 0 ? "-" : ObjectEntries(enemyStatus?.items ?? {}).map(([k, v]) => <>{t(k)} {v}</>)}</td></tr>}
            </table>
        </div>
    </FrostedGlassWindow>
}

/** The "Items" window */
const Items = () => {
    const { t } = useTranslation()
    const items = useStore(store, (s) => s.items)
    const hasVacuum = useStore(store, (s) => s.upgrades.Vacuum > 0)
    return <FrostedGlassWindow visible={hasVacuum} transitionDurationSec={0.8} class="pr-3 pl-4 pt-1 pb-3">
        <h2 class="mb-2 tracking-wide"><i class="ti ti-notes" /> {t("Items")}</h2>
        <table class="w-full">{ObjectEntries(items).map(([k, v]) =>
            <tr class="border-b-2 border-b-gray-200 border-opacity-60"
                onMouseOver={(ev) => { setTooltip(ev.currentTarget, <span class="whitespace-pre">{t(`flavorText-${k}`)}</span>) }}
                onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                <td><i class={k === "Food" ? "ti ti-meat" : "ti ti-settings"} /> {t(k)}</td><td class="text-right">{v}</td>
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
    const { t } = useTranslation()
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
    const lang = useStore(displayLanguageStore, (s) => s.lang)
    const setLang = useStore(displayLanguageStore, (s) => s.setLang)

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
        <div class={"left-pane absolute left-[-4px] top-2 w-44 sm:w-72 h-full [&>*]:mt-3 [transform:perspective(5cm)_rotateY(2deg)] " + (duringStageTransition ? " [&>*]:[transform:translateX(-400px)]" : "")}>
            {/* Upgrades */}
            <Upgrades />

            {/* Items */}
            <Items />

            {/* Transcendence */}
            <FrostedGlassWindow visible={canTranscend} transitionDurationSec={0.9} class="pr-3 pl-4 pt-1 pb-3 window--gold">
                <h2><i class="ti ti-arrows-transfer-up" /> {t("Transcendence")}</h2>
                <p class="text-xs mb-2">
                    {t("You have reached the point of singularity and can transcended to a higher plane of existence.")}
                </p>
                {/* Higher plane of existence = enemies have more HP and money */}
                <Button class="w-full button--gold" onClick={() => { transcendenceDialog.current?.showModal() }}><i class="ti ti-list" /> {t("Show Bonus")}</Button>
            </FrostedGlassWindow>

            {/* Small buttons (settings, credit, and twitter) */}
            <FrostedGlassWindow visible={true} transitionDurationSec={1} class="[&>*:last-child]:pr-3 pl-2 window--oneline w-fit tracking-wide">
                <span
                    class="pointer hover:text-white px-2 py-1"
                    onClick={() => { optionsDialog.current!.showModal() }}
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <>{t("Open Settings")}</>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <i class="ti ti-tool" />
                </span>
                <span
                    class="pointer hover:text-white px-2 py-1"
                    onClick={() => { creditDialog.current!.showModal() }}
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <>{t("Show Credit")}</>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <i class="ti ti-license" />
                </span>
                <span
                    class="pointer hover:text-white px-2 py-1"
                    onClick={() => {
                        window.open("https://twitter.com/intent/tweet/?" + new URLSearchParams({
                            text: document.title,
                            url: location.href,
                            // hashtags: "hashtags",
                        }).toString(), "", "width=600, height=480")?.focus()
                    }}
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <>{t("Tweet")}</>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <i class="ti ti-brand-twitter" />
                </span>
            </FrostedGlassWindow>

            {/* Tooltip */}
            <Tooltip filter={(key) => key.matches(".left-pane *")} />
        </div>

        {/* Top-Right pane */}
        <div class={"right-pane absolute right-[-4px] top-2 min-w-[7rem] h-full sm:min-w-[13rem] [&>*]:mt-3 [transform:perspective(5cm)_rotateY(-2deg)]" + (duringStageTransition ? " [&>*]:[transform:translateX(400px)]" : "")}>
            {/* Stages */}
            <FrostedGlassWindow visible={ObjectValues(areStageNamesVisible).some((v) => v)} transitionDurationSec={0.6} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-map-2" /> {t("Stages")}</h2>
                <div class="[&>*:not(:last-child)]:mb-1">{ObjectKeys(stages).map((name) => <div class="relative">
                    <Button
                        class={"w-full ![border-radius:2rem_0.5rem_2rem_0.5rem]" + (stage === name ? " button--blue" : "")}
                        onClick={() => { getState().setStageTransitingTo(name) }}
                        disabled={!areStageNamesVisible[name] || stage === name}>
                        {areStageNamesVisible[name] ? t(name) : "???"}
                    </Button>
                </div>)}
                </div>
            </FrostedGlassWindow>

            {/* Weather */}
            <FrostedGlassWindow visible={isWeatherSystemUnlocked && constants.weathers[stage] !== null} transitionDurationSec={0.8} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-sun" /> {t("Weather")}</h2>
                <div>
                    <table>
                        <tr><td class="pr-1">{!weather && ">"}</td><td class={"tracking-wider " + (!weather ? "font-bold" : "")}>{t("Normal")}</td></tr>
                        <tr><td class="pr-1">{weather && ">"}</td><td class={"tracking-wider " + (weather ? "font-bold" : "")}>{t(constants.weathers[stage] ?? "")}{!weather && <span class="text-gray-300"> ({t("in < {{count}} min.", { count: weatherEffectWillBeEnabledInLessThan })})</span>}</td></tr>
                    </table>
                </div>
            </FrostedGlassWindow>

            {/* Enemy */}
            <EnemyStats />

            {/* Explore */}
            <FrostedGlassWindow visible={hasVacuum && stage !== "Mothership"} transitionDurationSec={1} class="pl-3 pr-4 pt-1 pb-3">
                <h2 class="mb-2 tracking-wide"><i class="ti ti-route" /> {t("Explore")}: <span class="tracking-tight">{t("Lv.")} {explorationLv}</span></h2>
                <Button
                    class="block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center relative"
                    onClick={() => { getState().exploreNext() }}
                    title={<ExplorationNextTooltip />}>
                    <i class="ti ti-arrow-forward" /> {t("Next")}
                    <span class="[font-size:80%] tracking-tighter absolute right-2"><i class="ti ti-meat ml-3 mr-1" />{constants.explorationCost(explorationLv)}</span>
                </Button>
                {explorationLv >= 2 && <Button
                    class={"block w-full ![border-radius:2rem_0.5rem_2rem_0.5rem] text-center mt-1"}
                    onClick={() => { getState().explorePrev() }}
                    title={<ExplorationPrevTooltip />}>
                    <i class="ti ti-arrow-back" /> {t("Prev")}
                </Button>}
            </FrostedGlassWindow>

            {/* Tooltip */}
            <Tooltip filter={(key) => key.matches(".right-pane *")} />
        </div>

        {/* Tutorial Message */}
        <Tutorial />

        {/* Power Save Mode */}
        {powerSaveMode && <div class="absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10">
            <div class="relative py-3 px-8 mx-auto w-fit window-popup">
                <h2 class="tracking-wide text-orange-300"><i class="ti ti-zzz inline-block" /> {t("Power Save Mode")}</h2>
                <p class="[font-size:60%] tracking-wide whitespace-pre">{t("Power Save Mode stops rendering the game,\nbut the game still runs in the background.")}</p>
            </div>
        </div>}

        <Debugger />

        {/* "Reset Progress" Dialog */}
        <Dialog class="p-5" ref_={resetProgressDialog}>
            <p>{t("Are you sure you want to reset your save data?")}</p>
            <div class="float-right mt-4">
                <Button class="px-4 button--blue" onClick={() => {
                    deleteSaveData()
                    location.reload()
                }}><i class="ti ti-check" /> {t("Reset")}</Button>
                <Button class="px-4 ml-2" onClick={() => { resetProgressDialog.current!.close() }}><i class="ti ti-x" /> {t("Cancel")}</Button>
            </div>
        </Dialog>

        {/* Transcendence Dialog */}
        <Dialog ref_={transcendenceDialog} class="pt-8 px-8 pb-6 text-center dialog--gold">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center">{t("Transcending...")}</h1>
            <p class="mt-4 mb-6">
                {t("Enemies in the next world will have 500x the HP and money.")}
            </p>
            {/*
                TODO: The bonus for this ascension is .... A new stage will be unlocked at the next ascension.
                Choose a bonus:
                <ul class="list-disc ml-6">
                    <li>ATK×2</li>
                    <li>Enemy×2</li>
                </ul> */}
            <div class="float-right">
                <Button class="px-8 button--gold" onClick={() => { transcendenceDialog.current?.close(); getState().transcend() }}><i class="ti ti-check" /> {t("Confirm")}</Button>
                <Button class="px-8 ml-2 button--white" onClick={() => { transcendenceDialog.current?.close() }}><i class="ti ti-x" /> {t("Cancel")}</Button>
            </div>
        </Dialog>

        {/* Credits Dialog */}
        <Dialog ref_={creditDialog} class="p-5">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center">{t("Credits")}</h1>
            <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"></ul>
        </Dialog>

        {/* Options Dialog */}
        <Dialog ref_={optionsDialog} class="py-4 px-10">
            <h1 class="text-xl mb-2 tracking-wider w-full text-center"><i class="ti ti-tool" /> {t("Settings")}</h1>
            <table>
                <tr
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <span class="whitespace-pre">{t("Power Save Mode stops rendering the game,\nbut the game still runs in the background.")}</span>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <td class="pr-4 text-right"><i class="ti ti-zzz" /> {t("Power Save Mode")}</td>
                    <td><label class="pointer"><input type="checkbox" checked={state.usePowerSaveMode} onChange={(ev) => { domStore.setState({ usePowerSaveMode: ev.currentTarget.checked }) }} /> {t("enabled")}</label></td>
                </tr>
                <tr
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <span class="whitespace-pre">{t("A FPS counter is added to the bottom-right\ncorner of the screen if enabled.")}</span>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <td class="pr-4 text-right"><i class="ti ti-device-watch" /> {t("FPS Counter")}</td>
                    <td><label class="pointer"><input type="checkbox" checked={state.displayFPSCounter} onChange={(ev) => { domStore.setState({ displayFPSCounter: ev.currentTarget.checked }) }} /> {t("enabled")}</label></td>
                </tr>
                <tr
                    onMouseOver={(ev) => { setTooltip(ev.currentTarget, <span class="whitespace-pre">{t("Choose a lower resolution\nif you're having performance issues.")}</span>) }}
                    onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}>
                    <td class="pr-4 text-right"><i class="ti ti-arrows-minimize" /> {t("Resolution")}</td>
                    <td class="[&>*:not(:first-child)]:ml-2">
                        <label class="pointer"><input type="radio" name="resolution" checked={state.resolutionMultiplier === 1} onChange={(ev) => { domStore.setState({ resolutionMultiplier: 1 }) }} /> x1</label>
                        <label class="pointer"><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 }) }} /> x0.7</label>
                        <label class="pointer"><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 2} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 2 }) }} /> x0.5</label>
                        <label class="pointer"><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 3} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 3 }) }} /> x0.35</label>
                        <label class="pointer"><input type="radio" name="resolution" checked={state.resolutionMultiplier === Math.SQRT1_2 ** 4} onChange={(ev) => { domStore.setState({ resolutionMultiplier: Math.SQRT1_2 ** 4 }) }} /> x0.25</label>
                    </td>
                </tr>
                <tr>
                    <td class="pr-4 text-right"><i class="ti ti-flame" /> {t("Quality")}</td>
                    <td class="[&>*:not(:first-child)]:ml-2">
                        <label class="pointer"><input type="radio" name="quality" value="high" checked={state.quality === "high"} onChange={(ev) => { domStore.setState({ quality: ev.currentTarget.value as "high" | "standard" }) }} /> {t("High")}</label>
                        <label class="pointer"><input type="radio" name="quality" value="standard" checked={state.quality === "standard"} onChange={(ev) => { domStore.setState({ quality: ev.currentTarget.value as "high" | "standard" }) }} /> {t("Standard")}</label>
                    </td>
                </tr>
                <tr>
                    <td class="pr-4 text-right"><i class="ti ti-language-hiragana" /> {t("Display Language")}</td>
                    <td class="[&>*:not(:first-child)]:ml-2">
                        <label class="pointer"><input type="radio" name="lang" value="en-US" checked={lang === "en-US"} onChange={(ev) => { setLang(ev.currentTarget.value as LanguageCode) }} /> English (US)</label>
                        <label class="pointer"><input type="radio" name="lang" value="ja-JP" checked={lang === "ja-JP"} onChange={(ev) => { setLang(ev.currentTarget.value as LanguageCode) }} /> 日本語</label>
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
                onMouseOver={(ev) => { setTooltip(ev.currentTarget, <>{t("Delete the save data and restart from the beginning.")}</>) }}
                onMouseOut={(ev) => { removeTooltip(ev.currentTarget) }}
                onClick={() => {
                    optionsDialog.current?.close()
                    resetProgressDialog.current?.showModal()
                }}><i class="ti ti-eraser" /> {t("Reset Progress")}</div>
        </Dialog>

        {/* Newspaper Dialog */}
        <Dialog ref_={newsDialog} class="from-gray-200 to-gray-400 bg-gradient-to-b [box-shadow:0_0_5px_1px_#00000040] [border-radius:2px] w-[400px] h-[620px] p-5 box-border shadow-2xl select-none" onClose={() => { domStore.getState().hideNews() }}>
            {state.news && <div class="[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full [font-family:KottaOne] [-webkit-text-stroke:3px_rgba(0,0,0,0.05)] text-gray-900">
                <h2 class="text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center">{t(`news-${state.news}-headline`)}</h2>
                <span>{t(`news-${state.news}-text`)}</span>
                <span class="text-gray-500"> {randomText}</span>
            </div>}
            <Button class="sm:hidden absolute right-2 bottom-2 px-4" onClick={() => { newsDialog.current!.close() }}>Close</Button>
        </Dialog>

        {/* Cursor */}
        <Cursor />

        {/* FPS Counter */}
        {displayFPSCounter && <FPSCounter />}

        <Tooltip class="z-30" filter={(key) => !key.matches(".left-pane *, .right-pane *")} />
    </>
}

Modal.setAppElement(document.body)
render(<UI />, document.body)
