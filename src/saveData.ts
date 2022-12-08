import * as constants from "./constants"
import { createPersistingStore, ObjectEntries, SerializableSet } from "./util"

const localStorageKey = "acgSaveData"

const randomId = () => crypto.randomUUID?.() ?? `insecure-${[...Array(12)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`

/** This store maintains the game state. The values in the store is persisted in the localStorage by the persist() middleware. */
export const store = createPersistingStore(localStorageKey, 8, {
    /** The name of the stage currently selected. */
    stage: "Earth" as constants.StageName,
    /** When the player clicks the stage name at the top right corner, `stageTransitingTo` will be set to the stage name, the animation will be played, then the value of `stageTransitingTo` will be copied to `stage` and `stageTransitingTo` will become null. */
    stageTransitingTo: null as constants.StageName | null,
    /** The state (or level) of the exploration system. */
    exploration: {} as Partial<Record<constants.StageName, number>>,
    /** Money */
    money: 0,
    /** Items obtained by the player with vacuum. */
    items: {} as Partial<Record<constants.ItemName, number>>,
    /** The number of upgrades purchased. */
    upgrades: Object.fromEntries(constants.upgradeNames.map((name) => [name, 0])) as Record<constants.UpgradeName, number>,
    /** The tutorial in `availableTutorials - completedTutorials` with the lowest index in {@link constants.tutorialHTML} is displayed to the player. */
    completedTutorials: {} as SerializableSet<constants.TutorialName>,
    /** The tutorial in `availableTutorials - completedTutorials` with the lowest index in {@link constants.tutorialHTML} is displayed to the player. */
    availableTutorials: {} as SerializableSet<constants.TutorialName>,
    /** The list of published news. */
    availableNews: {} as SerializableSet<constants.NewsName>,
    /** The weather effect is enabled if `weatherEffectWillBeEnabledIn[stage] <= 0`. */
    weatherEffectWillBeEnabledIn: {} as Partial<Record<constants.StageName, number>>,
    /** The maximum possible value of `weatherEffectWillBeEnabledIn[stage]` to show the `< in ... min` message. */
    weatherEffectWillBeEnabledInLessThan: {} as Partial<Record<constants.StageName, number>>,
    /** True if the player can do (so-called) ascension or reincarnation. */
    canTranscend: false,
    /** true if the ascension dialog is open. */
    transcending: false,
    /** The number of times the player has done ascensions. */
    transcendence: 0,
    /** The number of times each enemy is killed. */
    killCount: {} as Record<`${constants.StageName}_${string}`, number>,
    /** True if the player has accessed `store.getState()` in dev tools. */
    cheated: false,
}, (set, get, setProduce) => {
    /** Add a tutorial. */
    const addTutorial = (name: constants.TutorialName) => { setProduce((d) => { d.availableTutorials[name] = true }) }
    /** Adds an available news. */
    const addNews = (name: constants.NewsName) => {
        if (get().availableNews[name]) { return }
        setProduce((d) => { d.availableNews[name] = true })
    }
    /** Adds (delta > 0) or subtracts (delta < 0) money. */
    const addMoney = (delta: number) => {
        set({ money: Math.floor(get().money + delta) })
        document.title = `ACG Final Project $${get().money}`
        if (get().money >= constants.price(constants.upgradeNames[0]!, get())) { addTutorial("upgrade") }
        if (!constants.isUpgradeNameHidden("Hammer", get())) { addNews("hammer") }
    }
    /** Closes a tutorial. */
    const completeTutorial = (name: constants.TutorialName) => {
        setProduce((d) => {
            d.completedTutorials[name] = true
            if (name === "nextStage") {
                d.availableTutorials.backToPreviousStage = true
            }
        })
    }
    /** Returns the current weather. */
    const getWeather = () => {
        if (!constants.isWeatherSystemUnlocked(get())) { return null }
        const enabled = (get().weatherEffectWillBeEnabledIn[get().stage] ?? Number.MAX_SAFE_INTEGER) <= 0
        if (get().stage === "Earth") { return { name: "Rain", enabled } }
        return null  // unimplemented
    }
    const getExplorationLv = () => get().exploration[get().stage] ?? 1
    return {
        addTutorial,
        addNews,
        addMoney,
        completeTutorial,
        getWeather,
        getExplorationLv,
        addItems: (delta: Partial<Record<constants.ItemName, number>>) => {
            const items = { ...get().items }
            for (const [k, v] of ObjectEntries(delta)) { items[k] = Math.floor((items[k] ?? 0) + v) }  // a lot faster than immer
            set({ items })
        },
        buyUpgrade: (name: constants.UpgradeName) => {
            addMoney(-constants.price(name, get()))
            set({ upgrades: { ...get().upgrades, [name]: get().upgrades[name] + 1 } })
            document.title = `ACG Final Project $${get().money}`
            if (get().upgrades.Autopilot > 0) {
                addNews("aliensComing")
            }
            completeTutorial("upgrade")
        },
        setStageTransitingTo: (stage: constants.StageName) => {
            if (get().stage === stage) { return }
            setProduce((d) => { d.stageTransitingTo = stage })
        },
        completeStageTransition: () => {
            setProduce((d) => {
                if (d.stageTransitingTo === null) { return }
                d.stage = d.stageTransitingTo
                d.stageTransitingTo = null
            })
            if (get().stage === "Earth") {
                completeTutorial("backToPreviousStage")
            } else if (get().stage === "Universe") {
                completeTutorial("nextStage")
            }
        },
        /** Subtract 1 from `weatherEffectWillBeEnabledIn[stage]` and `weatherEffectWillBeEnabledInLessThan[stage]` */
        countdown: () => {
            if (!constants.isWeatherSystemUnlocked(get())) { return }
            const s = get()
            set({
                weatherEffectWillBeEnabledIn: {
                    ...s.weatherEffectWillBeEnabledIn,
                    [s.stage]: (s.weatherEffectWillBeEnabledIn[s.stage] ?? constants.newWeatherEffectETA()) - 1,
                },
                weatherEffectWillBeEnabledInLessThan: {
                    ...s.weatherEffectWillBeEnabledInLessThan,
                    [s.stage]: (s.weatherEffectWillBeEnabledInLessThan[s.stage] ?? constants.newWeatherEffectETA(1)) - 1,
                },
            })
            if (getWeather()?.enabled) {
                addTutorial("weatherEffect")
            }
        },
        stopWeatherEffect: () => {
            setProduce((d) => {
                d.weatherEffectWillBeEnabledIn[d.stage] = constants.newWeatherEffectETA()
                d.weatherEffectWillBeEnabledInLessThan[d.stage] = constants.newWeatherEffectETA(1)
            })
        },
        defeatedMothership: () => {
            addNews("ending1")
            setProduce((d) => { d.canTranscend = true })
        },
        transcend: () => { setProduce((d) => { d.transcending = true }) },
        cancelTranscending: () => { setProduce((d) => { d.transcending = false }) },
        confirmTranscending: () => {
            setProduce((d) => {
                if (!d.transcending) { return }
                d.stageTransitingTo = null
                d.stage = "Earth"
                d.transcending = false
                d.transcendence++
                d.canTranscend = false
            })
        },
        incrementKillCount: (name: string) => {
            setProduce((d) => { d.killCount[`${get().stage}_${name}`] = (d.killCount[`${get().stage}_${name}`] ?? 0) + 1 })
            if (get().killCount[`Universe_UFO`] ?? 0 > 10) {
                getState().completeTutorial("backToPreviousStage")
            }
        },
        cheat: () => { setProduce((d) => { d.cheated = true }) },
        /** Increments `exploration[stage]` by 1. */
        exploreNext: () => {
            const lv = getExplorationLv()
            if ((get().items.Food ?? 0) < constants.explorationCost(lv)) { return }
            setProduce((d) => {
                d.items.Food = (d.items.Food ?? 0) - constants.explorationCost(lv)
                d.exploration[d.stage] = lv + 1
            })
        },
        /** Decrements `exploration[stage]` by 1. */
        explorePrev: () => {
            if (getExplorationLv() <= 1) { throw new Error() }
            setProduce((d) => { d.exploration[d.stage] = (d.exploration[d.stage] ?? 1) - 1 })
        },
    }
});

(window as any).store = new Proxy(store, {
    get(target, p, receiver) {
        getState().cheat()
        return Reflect.get(target, p, receiver)
    },
})

/** Returns the game state. Do not modify the values returned by getState(). Instead, use the methods returned by getState(), e.g. `use store.getState().addMoney(10)` instead of `store.getState().money += 10`. */
export const getState = store.getState

/** Subscribes (or listens) to every changes in the game state. */
export const subscribe = store.subscribe

export const deleteSaveData = () => {
    store.destroy()
    localStorage.removeItem(localStorageKey)
}

// Send analytics to balance the game 
if (import.meta.env.VITE_ANALYTICS_ADDR && location.hostname.endsWith(".github.io")) {
    localStorage.userId ??= randomId()
    const send = (event?: string) => { fetch(import.meta.env.VITE_ANALYTICS_ADDR ?? "", { method: "POST", body: JSON.stringify({ userId: localStorage.userId, event, ...store.getState() }) }) }  // beacon didn't work
    setInterval(() => send(), 1000 * 60)
    send("start")
    document.addEventListener("visibilitychange", () => { send(document.visibilityState) })
}
