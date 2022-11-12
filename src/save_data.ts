import create from 'zustand'
import { persist } from "zustand/middleware"
import { immer } from 'zustand/middleware/immer'
import { enableMapSet } from "immer"
import SuperJSON from 'superjson'
import { domStore } from './dom'

enableMapSet()

export const upgradeNames = ["Laser", "Autopilot", "Hammer", "placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5", "placeholder6"] as const satisfies readonly string[]

const basePrice = {
    Laser: 15,
    Autopilot: 100,
    Hammer: 100 * 15,
    placeholder1: 100 * 15 ** 2,
    placeholder2: 100 * 15 ** 3,
    placeholder3: 100 * 15 ** 4,
    placeholder4: 100 * 15 ** 5,
    placeholder5: 100 * 15 ** 6,
    placeholder6: 100 * 15 ** 7,
} satisfies Record<typeof upgradeNames[number], number>

export const price = (name: (typeof upgradeNames)[number]) => basePrice[name] * 1.15 ** getState().upgrades[name]

export const tutorials = {
    wasd: "You have become a fighter pilot that shoots laser beams. This world is peaceful, so your first mission is to protect farmers from harmful birds.\nThe controls are simple, WASD to move and aim your targets.",
    upgrade: "You can now buy upgrades for your aircraft! To do so, click on the button in the upper left corner of the screen.",
}

export const newsList = {
    aliensComing: ["Aliens Are Coming To Invade Earth", "According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],
    hammer: ["UFO Researchers Develop Device That Can Float Hammers In Air", "A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses \"anti - gravity\" technology to achieve the feat. The device, which the team has dubbed the \"Hammer levitator\", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly."],
} as const satisfies { readonly [k: string]: readonly [title: string, text: string] }

type State = {
    stage: number
    money: number
    upgrades: Record<typeof upgradeNames[number], number>
    completedTutorials: Set<keyof typeof tutorials>

    availableNews: Set<keyof typeof newsList>
    availableTutorials: Set<keyof typeof tutorials>
    addMoney: (delta: number) => void
    buyUpgrade: (name: typeof upgradeNames[number]) => void
    completeTutorial: (name: keyof typeof tutorials) => void
    addNews: (name: keyof typeof newsList) => void
    addTutorial: (name: keyof typeof tutorials) => void
}

const localStorageKey = "acgSaveData"
let destroyed = false

export const store = create<State>()(persist(immer((set, get) => ({
    stage: 0,
    money: 0,
    upgrades: Object.fromEntries(upgradeNames.map((name) => [name, 0])) as Record<typeof upgradeNames[number], number>,
    completedTutorials: new Set(),
    availableNews: new Set(),
    availableTutorials: new Set(),
    addMoney: (delta) => {
        set((d) => { d.money += delta })
        if (get().money >= price(upgradeNames[0]!)) {
            get().addTutorial("upgrade")
        }
    },
    buyUpgrade: (name) => {
        set((d) => { d.money -= price(name); d.upgrades[name]++ })
        if (get().upgrades.Autopilot > 0) {
            get().addNews("aliensComing")
        }
        get().completeTutorial("upgrade")
    },
    completeTutorial: (name) => { set((d) => { d.completedTutorials.add(name) }) },
    addNews: (name) => {
        if (get().availableNews.has(name)) { return }
        set((d) => { d.availableNews.add(name) })
        domStore.setState({ news: newsList[name] })
    },
    addTutorial: (name) => { set((d) => { d.availableTutorials.add(name) }) },
})), {
    name: localStorageKey,
    version: 1,
    // migrate: (state, version) => {
    //     if (version === 0) { state.foo = "bar" }
    //     return state as State
    // },
    serialize: (s) => { if (destroyed) { throw new Error("destroyed") } return SuperJSON.stringify(s) },
    deserialize: (s) => SuperJSON.parse(s) as any,
}));

(window as any).store = store

export const getState = store.getState
export const subscribe = store.subscribe
export const deleteSaveData = () => {
    store.destroy()
    destroyed = true
    localStorage.removeItem(localStorageKey)
}

getState().addTutorial("wasd")

window.addEventListener("keyup", (ev) => {
    if (["KeyW", "KeyS", "KeyA", "KeyD"].includes(ev.code) &&
        getState().availableTutorials.has("wasd")) {
        getState().completeTutorial("wasd")
    }
})
