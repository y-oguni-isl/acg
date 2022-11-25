import create from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import * as constants from "./constants"
import { ObjectEntries, SerializableSet } from "./util"

const localStorageKey = "acgSaveData"
let destroyed = false

type SaveData = {
    gameSessionId: string
    stage: constants.StageName
    stageTransitingTo: constants.StageName | null
    exploration: Partial<Record<constants.StageName, number>>
    money: number
    items: Partial<Record<constants.ItemName, number>>
    /** The number of upgrades purchased by the player. */
    upgrades: Record<constants.UpgradeName, number>
    completedTutorials: SerializableSet<constants.TutorialName>
    availableNews: SerializableSet<constants.NewsName>
    availableTutorials: SerializableSet<constants.TutorialName>
    weatherEffectWillBeEnabledIn: Partial<Record<constants.StageName, number>>  // the weather effect is enabled if countdown <= 0
    weatherEffectWillBeEnabledInLessThan: Partial<Record<constants.StageName, number>>
    canTranscend: boolean
    transcending: boolean
    transcendence: number
    killCount: Record<`${constants.StageName}_${string}`, number>
    cheated: boolean

    addMoney: (delta: number) => void
    addItems: (delta: Partial<Record<constants.ItemName, number>>) => void
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
    incrementKillCount: (name: string) => void
    cheat: () => void
    exploreNext: () => void
    explorePrev: () => void
    getExplorationLv: () => number
}

const newWeatherEffectETA = (rand = Math.random()) => rand * constants.updatePerSecond * 60 * 6

/** This store maintains the game state. The values in the store is persisted in the localStorage by the persist() middleware. */
export const store = create<SaveData>()(persist(immer((set, get) => ({
    gameSessionId: crypto.randomUUID(),
    stage: "Earth",
    stageTransitingTo: null,
    exploration: {},
    money: 0,
    items: {},
    upgrades: Object.fromEntries(constants.upgradeNames.map((name) => [name, 0])) as Record<constants.UpgradeName, number>,
    completedTutorials: {},
    availableNews: {},
    availableTutorials: {},
    weatherEffectWillBeEnabledIn: {},
    weatherEffectWillBeEnabledInLessThan: {},
    canTranscend: false,
    transcending: false,
    transcendence: 0,
    killCount: {},
    cheated: false,

    addMoney: (delta) => {
        set({ money: Math.floor(get().money + delta) })
        document.title = `ACG Final Project $${get().money}`
        if (get().money >= constants.price(constants.upgradeNames[0]!, get())) { get().addTutorial("upgrade") }
        if (!constants.isUpgradeNameHidden("Hammer", get())) { get().addNews("hammer") }
    },
    addItems: (delta) => {
        const items = { ...get().items }
        for (const [k, v] of ObjectEntries(delta)) { items[k] = Math.floor((items[k] ?? 0) + v) }  // a lot faster than immer
        set({ items })
    },
    buyUpgrade: (name) => {
        set((d) => { d.money -= constants.price(name, get()); d.upgrades[name]++ })
        document.title = `ACG Final Project $${get().money}`
        if (get().upgrades.Autopilot > 0) {
            get().addNews("aliensComing")
        }
        get().completeTutorial("upgrade")
    },
    completeTutorial: (name) => {
        set((d) => {
            d.completedTutorials[name] = true
            if (name === "nextStage") {
                d.availableTutorials.backToPreviousStage = true
            }
        })
    },
    addNews: (name) => {
        if (get().availableNews[name]) { return }
        set((d) => { d.availableNews[name] = true })
    },
    addTutorial: (name) => { set((d) => { d.availableTutorials[name] = true }) },
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
        const s = get()
        set({
            weatherEffectWillBeEnabledIn: {
                ...s.weatherEffectWillBeEnabledIn,
                [s.stage]: (s.weatherEffectWillBeEnabledIn[s.stage] ?? newWeatherEffectETA()) - 1,
            },
            weatherEffectWillBeEnabledInLessThan: {
                ...s.weatherEffectWillBeEnabledInLessThan,
                [s.stage]: (s.weatherEffectWillBeEnabledInLessThan[s.stage] ?? newWeatherEffectETA(1)) - 1,
            },
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
    incrementKillCount: (name) => {
        set((d) => { d.killCount[`${get().stage}_${name}`] = (d.killCount[`${get().stage}_${name}`] ?? 0) + 1 })
        if (get().killCount[`Universe_UFO`] ?? 0 > 10) {
            getState().completeTutorial("backToPreviousStage")
        }
    },
    cheat: () => { set((d) => { d.cheated = true }) },
    exploreNext: () => {
        const lv = get().getExplorationLv()
        if ((get().items.Food ?? 0) < constants.explorationCost(lv)) { return }
        set((d) => {
            d.items.Food = (d.items.Food ?? 0) - constants.explorationCost(lv)
            d.exploration[d.stage] = lv + 1
        })
    },
    explorePrev: () => {
        if (get().getExplorationLv() <= 1) { throw new Error() }
        set((d) => { d.exploration[d.stage] = (d.exploration[d.stage] ?? 1) - 1 })
    },
    getExplorationLv: () => get().exploration[get().stage] ?? 1,
} as SaveData)), {
    name: localStorageKey,
    version: 8,
    serialize: (s) => { if (destroyed) { throw new Error("destroyed") } return JSON.stringify(s) },
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
