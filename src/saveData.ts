import * as constants from "./constants"
import { createPersistingStore, ObjectEntries, SerializableSet } from "./util"

const localStorageKey = "acgSaveData"

const randomId = () => crypto.randomUUID?.() ?? `insecure-${[...Array(12)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`

/** This store maintains the game state. The values in the store is persisted in the localStorage by the persist() middleware. */
export const store = createPersistingStore(localStorageKey, 8, {
    gameSessionId: randomId() as string,
    stage: "Earth" as constants.StageName,
    stageTransitingTo: null as constants.StageName | null,
    exploration: {} as Partial<Record<constants.StageName, number>>,
    money: 0,
    items: {} as Partial<Record<constants.ItemName, number>>,
    upgrades: Object.fromEntries(constants.upgradeNames.map((name) => [name, 0])) as Record<constants.UpgradeName, number>,
    completedTutorials: {} as SerializableSet<constants.TutorialName>,
    availableNews: {} as SerializableSet<constants.NewsName>,
    availableTutorials: {} as SerializableSet<constants.TutorialName>,
    weatherEffectWillBeEnabledIn: {} as Partial<Record<constants.StageName, number>>,  // the weather effect is enabled if countdown <= 0,
    weatherEffectWillBeEnabledInLessThan: {} as Partial<Record<constants.StageName, number>>,
    canTranscend: false,
    transcending: false,
    transcendence: 0,
    killCount: {} as Record<`${constants.StageName}_${string}`, number>,
    cheated: false,
}, (set, get, setProduce) => {
    const addTutorial = (name: constants.TutorialName) => { setProduce((d) => { d.availableTutorials[name] = true }) }
    const addNews = (name: constants.NewsName) => {
        if (get().availableNews[name]) { return }
        setProduce((d) => { d.availableNews[name] = true })
    }
    const addMoney = (delta: number) => {
        set({ money: Math.floor(get().money + delta) })
        document.title = `ACG Final Project $${get().money}`
        if (get().money >= constants.price(constants.upgradeNames[0]!, get())) { addTutorial("upgrade") }
        if (!constants.isUpgradeNameHidden("Hammer", get())) { addNews("hammer") }
    }
    const completeTutorial = (name: constants.TutorialName) => {
        setProduce((d) => {
            d.completedTutorials[name] = true
            if (name === "nextStage") {
                d.availableTutorials.backToPreviousStage = true
            }
        })
    }
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
        exploreNext: () => {
            const lv = getExplorationLv()
            if ((get().items.Food ?? 0) < constants.explorationCost(lv)) { return }
            setProduce((d) => {
                d.items.Food = (d.items.Food ?? 0) - constants.explorationCost(lv)
                d.exploration[d.stage] = lv + 1
            })
        },
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

export const getState = store.getState
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
