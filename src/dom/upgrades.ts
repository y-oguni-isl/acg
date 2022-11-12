import { onUpgrade } from "../hooks"
import { dequeueTutorial, enqueueTutorial } from "./tutorial"

type Upgrade = { state: "hidden", value: 0 } | { state: "???" | "visible", value: number, dom: HTMLElement }

export const upgradeNames = ["Laser", "Autopilot", "placeholder0", "placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5", "placeholder6"] as const satisfies readonly string[]

const upgrades = Object.fromEntries(upgradeNames.map((name) => [name, { state: "hidden", value: 0 }])) as Record<typeof upgradeNames[number], Upgrade>
export default upgrades

const basePrice = {
    Laser: 15,
    Autopilot: 60,
    placeholder0: 60 * 15,
    placeholder1: 60 * 15 ** 2,
    placeholder2: 60 * 15 ** 3,
    placeholder3: 60 * 15 ** 4,
    placeholder4: 60 * 15 ** 5,
    placeholder5: 60 * 15 ** 6,
    placeholder6: 60 * 15 ** 7,
} satisfies Record<typeof upgradeNames[number], number>
const price = (name: (typeof upgradeNames)[number]) => basePrice[name] * 1.15 ** upgrades[name].value

const maxUpgrades = 25

let money = 0

const setState = (name: typeof upgradeNames[number], value: number | "???") => {
    if (upgrades[name].state === "hidden") {
        // Create HTML elements
        const div = document.querySelector("template#upgradesTemplate")!.content.children[0]!.cloneNode(true) as HTMLDivElement
        div.querySelector("span.upgrade-name")!.innerText = "???"
        div.querySelector("span.upgrade-num")!.innerText = "0"
        document.querySelector("div#upgrades")!.append(div)
        div.addEventListener("mousedown", () => {
            const upgrade = upgrades[name]
            if (price(name) <= money && upgrade.state === "visible" && upgrade.value < maxUpgrades) {
                onUpgrade.forEach((f) => f(name, upgrades[name].value))

                money -= price(name)
                setState(name, upgrade.value + 1)
                updateDOM()
            }
        })
        upgrades[name] = { state: "???", dom: div, value: 0 }
    }
    const upgrade = upgrades[name]
    if (upgrade.state === "hidden") { throw new Error() }
    if (value !== "???" && (upgrade.state === "???" || upgrade.value !== value)) {
        upgrade.value = value
        upgrade.state = "visible"
        upgrade.dom.querySelector("span.upgrade-name")!.innerText = name
        upgrade.dom.querySelector("span.upgrade-num")!.innerText = "" + value
    }
}

setState("Laser", "???")
setState("Autopilot", "???")
onUpgrade.add((name, prevCount) => {
    if (prevCount !== 0) { return }
    const el = upgradeNames[upgradeNames.indexOf(name) + 2]
    if (el) { setState(el, "???") }
})

const updateDOM = () => {
    for (const [k, v] of Object.entries(upgrades) as [typeof upgradeNames[number], Upgrade][]) {
        if ("dom" in v) {
            const requirement = price(k)
            if (v.state === "???" && money >= requirement * 2 / 3) { setState(k, 0) }
            const color = upgrades[k].value >= maxUpgrades ? `255, 0, 0` : money >= requirement ? `0, 255, 255` : `128, 128, 128`
            const progress = upgrades[k].value >= maxUpgrades ? 100 : money / requirement * 100
            v.dom.style.background = `linear-gradient(90deg, rgba(${color}, 0.5) ${Math.min(99, progress)}%,rgba(${color}, 0) ${Math.min(100, progress + 5)}%)`
        }
    }
}

updateDOM()

export const addMoney = (delta: number) => {
    money += delta
    if (upgrades[upgradeNames[0]].value === 0 && money >= price(upgradeNames[0])) {
        enqueueTutorial("upgrade")
    } else {
        dequeueTutorial("upgrade")
    }
    updateDOM()
}
