import create from 'zustand'
import { persist } from "zustand/middleware"
import { immer } from 'zustand/middleware/immer'
import { enableMapSet } from "immer"
import SuperJSON from 'superjson'
import * as constants from "./constants"

enableMapSet()

const localStorageKey = "acgSaveData"
let destroyed = false

type SaveData = {
    gameSessionId: string
    stage: constants.StageName
    stageTransitingTo: constants.StageName | null
    money: number
    /** The number of upgrades purchased by the player. */
    upgrades: Record<constants.UpgradeName, number>
    completedTutorials: Set<constants.TutorialName>
    availableNews: Set<constants.NewsName>
    availableTutorials: Set<constants.TutorialName>
    weatherEffectWillBeEnabledIn: Partial<Record<constants.StageName, number>>  // the weather effect is enabled if countdown <= 0
    weatherEffectWillBeEnabledInLessThan: Partial<Record<constants.StageName, number>>
    canTranscend: boolean
    transcending: boolean
    transcendence: number
    cheated: boolean

    addMoney: (delta: number) => void
    buyUpgrade: (name: constants.UpgradeName) => void
    completeTutorial: (name: constants.TutorialName) => void
    addNews: (name: constants.NewsName) => void
    addTutorial: (name: constants.TutorialName) => void
    setStageTransitingTo: (stage: constants.StageName) => void
    completeStageTransition: () => void
    countdown: () => void
    getWeather: () => ({ name: constants.WeatherEffect, enabled: boolean } | null)
    stopWeatherEffect: () => void
    defeatedFinalBoss: () => void
    transcend: () => void
    cancelTranscending: () => void
    confirmTranscending: () => void
    cheat: () => void
}

const newWeatherEffectETA = (rand = Math.random()) => rand * constants.updatePerSecond * 60 * 6

/** This store maintains the stage of game, and it is persisted in the localStorage by the persist() middleware. */
export const store = create<SaveData>()(persist(immer((set, get) => ({
    gameSessionId: crypto.randomUUID(),
    stage: "Earth",
    stageTransitingTo: null,
    money: 0,
    upgrades: Object.fromEntries(constants.upgradeNames.map((name) => [name, 0])) as Record<constants.UpgradeName, number>,
    completedTutorials: new Set(),
    availableNews: new Set(),
    openedNews: new Set(),
    availableTutorials: new Set(),
    weatherEffectWillBeEnabledIn: {},
    weatherEffectWillBeEnabledInLessThan: {},
    canTranscend: false,
    transcending: false,
    transcendence: 0,
    cheated: false,

    addMoney: (delta) => {
        set((d) => { d.money += delta })
        if (get().money >= constants.price(constants.upgradeNames[0]!, get())) { get().addTutorial("upgrade") }
        if (!constants.isUpgradeNameHidden("Hammer", get())) { get().addNews("hammer") }
    },
    buyUpgrade: (name) => {
        set((d) => { d.money -= constants.price(name, get()); d.upgrades[name]++ })
        if (get().upgrades.Autopilot > 0) {
            get().addNews("aliensComing")
        }
        get().completeTutorial("upgrade")
    },
    completeTutorial: (name) => {
        set((d) => {
            d.completedTutorials.add(name)
            if (name === "nextStage") {
                d.availableTutorials.add("backToPreviousStage")
            }
        })
    },
    addNews: (name) => {
        if (get().availableNews.has(name)) { return }
        set((d) => { d.availableNews.add(name) })
    },
    addTutorial: (name) => { set((d) => { d.availableTutorials.add(name) }) },
    setStageTransitingTo: (stage) => {
        if (get().stage === stage) { return }
        set((d) => { d.stageTransitingTo = stage })
    },
    completeStageTransition: () => {
        set((d) => {
            if (d.stageTransitingTo === null) { return }
            d.stage = d.stageTransitingTo
            d.stageTransitingTo = null
        })
        if (get().stage === "Earth") {
            get().completeTutorial("backToPreviousStage")
        } else if (get().stage === "Universe") {
            get().completeTutorial("nextStage")
        }
    },
    countdown: () => {
        if (!constants.isWeatherSystemUnlocked(get())) { return }
        set((d) => {
            d.weatherEffectWillBeEnabledIn[d.stage] ??= newWeatherEffectETA()
            d.weatherEffectWillBeEnabledInLessThan[d.stage] ??= newWeatherEffectETA(1)
            d.weatherEffectWillBeEnabledIn[d.stage]!--
            d.weatherEffectWillBeEnabledInLessThan[d.stage]!--
        })
        if (get().getWeather()?.enabled) {
            get().addTutorial("weatherEffect")
        }
    },
    getWeather: () => {
        if (!constants.isWeatherSystemUnlocked(get())) { return null }
        const enabled = (get().weatherEffectWillBeEnabledIn[get().stage] ?? Number.MAX_SAFE_INTEGER) <= 0
        if (get().stage === "Earth") { return { name: "Rain", enabled } }
        return null  // unimplemented
    },
    stopWeatherEffect: () => {
        set((d) => {
            d.weatherEffectWillBeEnabledIn[d.stage] = newWeatherEffectETA()
            d.weatherEffectWillBeEnabledInLessThan[d.stage] = newWeatherEffectETA(1)
        })
    },
    defeatedFinalBoss: () => {
        get().addNews("ending1")
        set((d) => { d.canTranscend = true })
    },
    transcend: () => { set((d) => { d.transcending = true }) },
    cancelTranscending: () => { set((d) => { d.transcending = false }) },
    confirmTranscending: () => {
        set((d) => {
            if (!d.transcending) { return }
            d.stageTransitingTo = null
            d.stage = "Earth"
            d.transcending = false
            d.transcendence++
            d.canTranscend = false
        })
    },
    cheat: () => { set((d) => { d.cheated = true }) },
} as SaveData)), {
    // Options for the "persist" middleware
    name: localStorageKey,
    version: 6,
    // Allow saving Map, Set, etc.
    serialize: (s) => { if (destroyed) { throw new Error("destroyed") } return SuperJSON.stringify(s) },
    deserialize: (s) => SuperJSON.parse(s) as any,
}));

(window as any).store = new Proxy(store, {
    get(target, p, receiver) {
        getState().cheat()
        return Reflect.get(target, p, receiver)
    },
})

export const getState = store.getState
export const subscribe = store.subscribe
export const deleteSaveData = () => {
    store.destroy()
    destroyed = true
    localStorage.removeItem(localStorageKey)
}

// Send analytics to balance the game 
if (import.meta.env.VITE_ANALYTICS_ADDR && location.hostname.endsWith(".github.io")) {
    localStorage.userId ??= crypto.randomUUID()
    const send = (event?: string) => { fetch(import.meta.env.VITE_ANALYTICS_ADDR ?? "", { method: "POST", body: JSON.stringify({ userId: localStorage.userId, event, ...store.getState() }) }) }  // beacon didn't work
    setInterval(() => send(), 1000 * 60)
    send("start")
    document.addEventListener("visibilitychange", () => { send(document.visibilityState) })
}
