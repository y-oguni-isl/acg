import create from 'zustand'
import { persist } from "zustand/middleware"
import { immer } from 'zustand/middleware/immer'
import { enableMapSet } from "immer"
import SuperJSON from 'superjson'
import { updatePerSecond } from './hooks'

enableMapSet()

export const upgradeNames = [
    "Laser",
    "Autopilot",
    "Hammer",
    "ATK×2",
    "placeholder2",
    "placeholder3",
    "placeholder4",
    "placeholder5",
    "placeholder6",
] as const satisfies readonly string[]

const basePrice = {
    Laser: 15,
    Autopilot: 100,
    Hammer: 100 * 15,
    "ATK×2": 100 * 15 ** 2,
    placeholder2: 100 * 15 ** 3,
    placeholder3: 100 * 15 ** 4,
    placeholder4: 100 * 15 ** 5,
    placeholder5: 100 * 15 ** 6,
    placeholder6: 100 * 15 ** 7,
} satisfies Record<typeof upgradeNames[number], number>

export const getAtk = () => ({
    Laser: getState().upgrades.Laser + 1 * (getState().upgrades['ATK×2'] + 1),
    Autopilot: undefined,
    Hammer: getState().upgrades.Hammer === 0 ? undefined : 2000 * (getState().upgrades['ATK×2'] + 1),
    "ATK×2": undefined,
    placeholder2: undefined,
    placeholder3: undefined,
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<keyof typeof basePrice, number | undefined>)

export const getInterval = () => ({
    Laser: 1,
    Autopilot: undefined,
    Hammer: getState().upgrades.Hammer === 0 ? undefined : Math.ceil(50 / getState().upgrades.Hammer),
    "ATK×2": undefined,
    placeholder2: undefined,
    placeholder3: undefined,
    placeholder4: undefined,
    placeholder5: undefined,
    placeholder6: undefined,
} satisfies Record<keyof typeof basePrice, number | undefined>)

export const price = (name: (typeof upgradeNames)[number]) => basePrice[name] * 2 ** getState().upgrades[name]

export const enemyNames = ["Bird", "UFO", "Weather Effect UFO", "Planet"] as const

export const bounties = (name: typeof enemyNames[number]) => ({
    Bird: 1,
    UFO: 100,
    "Weather Effect UFO": 1000,
    Planet: 10000,
} satisfies Record<typeof enemyNames[number], number>)[name] * (500 ** getState().transcendence)

/** If true, the name of the upgrade is shown as ??? */
export const isUpgradeNameHidden = (name: (typeof upgradeNames)[number]) => getState().upgrades[name] === 0 && getState().money < price(name) * 2 / 3
export const isWeatherSystemUnlocked = () => getState().completedTutorials.has("nextStage")
export const isVerticalMoveUnlocked = () => false

/** The list of tutorials and their texts. */
export const tutorialHTML = {
    wasd: `You have become a <b>fighter</b> pilot that shoots <b>laser</b> beams. This world is peaceful, so your first mission is to protect farmers from harmful <b>birds</b>.<br>The controls are simple, <b><i class="ti ti-keyboard"></i> WASD to move</b> and aim your targets.`,
    upgrade: `You can now buy <b><i class="ti ti-chevrons-up"></i> upgrades</b> for your aircraft! To do so, <b>click</b> on the button in the <b>top left</b> corner of the screen.`,
    nextStage: `You can now move on to the <b><i class="ti ti-map-2"></i> next stage</b>! To do so, <b>click</b> the button in the <b>top right</b> corner of the screen.`,
    backToPreviousStage: `If you're finding this stage too <b>difficult</b>, go back to the previous stage and <b>try again</b> after you get more upgrades.`,
    weatherEffect: `We need to kill a <b><i class="ti ti-ufo"></i> UFO</b> in order to stop the <b><i class="ti ti-cloud-rain"></i> rain</b>. The UFO has a device that can manipulate the weather, and the rain is interfering with the <b>autopilot</b> system.`,
    // ending1congratulations: "Congratulations, you have saved the world from the aliens. Thanks for playing!",
    // TODO: "As a bonus, you can fly around vertically with the space key from now on."
}

/** The list of news and their headlines and texts. */
export const newsList = {
    aliensComing: ["Aliens Are Coming To Invade Earth", "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],
    hammer: ["UFO Researchers Develop Device That Can Float Hammers In Air", "A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses \"anti - gravity\" technology to achieve the feat. The device, which the team has dubbed the \"Hammer levitator\", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly."],
    ending1: ["Scientists Have Found The Way To Move To A Higher World", "Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."],
} as const satisfies { readonly [k: string]: readonly [title: string, text: string] }

export const stageNames = ["Earth", "Universe", "Final"] as const

export type WeatherEffect = "Rain"

const localStorageKey = "acgSaveData"
let destroyed = false

/** The interval of the weather effects. */
const newWeatherEffectETA = (rand = () => Math.random()): Record<typeof stageNames[number], number> => ({
    Earth: rand() * updatePerSecond * 60 * 6,
    Universe: rand() * updatePerSecond * 60 * 12,
    Final: rand() * updatePerSecond * 60 * 12,
})

type SaveData = {
    gameSessionId: string
    stage: typeof stageNames[number]
    stageTransitingTo: typeof stageNames[number] | null
    money: number
    /** The number of upgrades purchased by the player. */
    upgrades: Record<typeof upgradeNames[number], number>
    completedTutorials: Set<keyof typeof tutorialHTML>
    availableNews: Set<keyof typeof newsList>
    availableTutorials: Set<keyof typeof tutorialHTML>
    weatherEffectWillBeEnabledIn: Record<typeof stageNames[number], number>  // the weather effect is enabled if countdown <= 0
    weatherEffectWillBeEnabledInLessThan: Record<typeof stageNames[number], number>
    canTranscend: boolean
    transcending: boolean
    transcendence: number
    cheated: boolean

    addMoney: (delta: number) => void
    buyUpgrade: (name: typeof upgradeNames[number]) => void
    completeTutorial: (name: keyof typeof tutorialHTML) => void
    addNews: (name: keyof typeof newsList) => void
    addTutorial: (name: keyof typeof tutorialHTML) => void
    setStageTransitingTo: (stage: typeof stageNames[number]) => void
    completeStageTransition: () => void
    countdown: () => void
    getWeather: () => ({ name: WeatherEffect, enabled: boolean } | null)
    stopWeatherEffect: () => void
    defeatedFinalBoss: () => void
    transcend: () => void
    cancelTranscending: () => void
    confirmTranscending: () => void
    cheat: () => void
}

/** This store maintains the stage of game, and it is persisted in the localStorage by the persist() middleware. */
export const store = create<SaveData>()(persist(immer((set, get) => ({
    gameSessionId: crypto.randomUUID(),
    stage: "Earth",
    stageTransitingTo: null,
    money: 0,
    upgrades: Object.fromEntries(upgradeNames.map((name) => [name, 0])) as Record<typeof upgradeNames[number], number>,
    completedTutorials: new Set(),
    availableNews: new Set(),
    openedNews: new Set(),
    availableTutorials: new Set(),
    weatherEffectWillBeEnabledIn: newWeatherEffectETA(),
    weatherEffectWillBeEnabledInLessThan: newWeatherEffectETA(() => 1),
    canTranscend: false,
    transcending: false,
    transcendence: 0,
    cheated: false,

    addMoney: (delta) => {
        set((d) => { d.money += delta })
        if (get().money >= price(upgradeNames[0]!)) { get().addTutorial("upgrade") }
        if (!isUpgradeNameHidden("Hammer")) { get().addNews("hammer") }
    },
    buyUpgrade: (name) => {
        set((d) => { d.money -= price(name); d.upgrades[name]++ })
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
        if (!isWeatherSystemUnlocked()) { return }
        set((d) => {
            d.weatherEffectWillBeEnabledIn[d.stage]--
            d.weatherEffectWillBeEnabledInLessThan[d.stage]--
        })
        if (get().getWeather()?.enabled) {
            get().addTutorial("weatherEffect")
        }
    },
    getWeather: () => {
        if (!isWeatherSystemUnlocked()) { return null }
        const enabled = get().weatherEffectWillBeEnabledIn[get().stage] <= 0
        if (get().stage === "Earth") { return { name: "Rain", enabled } }
        return null  // unimplemented
    },
    stopWeatherEffect: () => {
        set((d) => {
            d.weatherEffectWillBeEnabledIn[d.stage] = newWeatherEffectETA()[d.stage]
            d.weatherEffectWillBeEnabledInLessThan[d.stage] = newWeatherEffectETA(() => 1)[d.stage]
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
