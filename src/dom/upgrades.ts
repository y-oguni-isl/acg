type Upgrade = { state: "hidden", value: 0 } | { state: "???" | "visible", value: number, dom: HTMLElement }

const upgradeNames = ["laser", "autopilot"] as const satisfies readonly string[]

const upgrades = Object.fromEntries(upgradeNames.map((name) => [name, { state: "hidden", value: 0 }])) as Record<typeof upgradeNames[number], Upgrade>
export default upgrades

const requirements = {
    laser: 3,
    autopilot: 20,
} satisfies Record<typeof upgradeNames[number], number>

const maxUpgrades = 25

let money = 0

const setUpgradeValue = (name: typeof upgradeNames[number], value: number | "???") => {
    if (upgrades[name].state === "hidden") {
        const div = document.querySelector("template#upgradesTemplate")!.content.children[0].cloneNode(true) as HTMLDivElement
        div.querySelector("span.upgrade-name")!.innerText = "???"
        div.querySelector("span.upgrade-num")!.innerText = "0"
        document.querySelector("div#upgrades")!.append(div)
        div.addEventListener("mousedown", () => {
            const upgrade = upgrades[name]
            if (requirements[name] <= money && upgrade.state === "visible" && upgrade.value < maxUpgrades) {
                setUpgradeValue(name, upgrade.value + 1)
                money -= requirements[name]
                renderUpgrades()
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

setUpgradeValue("laser", "???")
setUpgradeValue("autopilot", "???")

const renderUpgrades = () => {
    for (const [k, v] of Object.entries(upgrades) as [typeof upgradeNames[number], Upgrade][]) {
        if ("dom" in v) {
            const requirement = requirements[k]
            if (v.state === "???" && money >= requirement * 2 / 3) { setUpgradeValue(k, 0) }
            const color = upgrades[k].value >= maxUpgrades ? `255, 0, 0` : money >= requirement ? `0, 255, 255` : `128, 128, 128`
            const progress = upgrades[k].value >= maxUpgrades ? 100 : money / requirement * 100
            v.dom.style.background = `linear-gradient(90deg, rgba(${color}, 0.5) ${Math.min(99, progress)}%,rgba(${color}, 0) ${Math.min(100, progress + 5)}%)`
        }
    }
}

renderUpgrades()
setInterval(() => {
    money += 1
    renderUpgrades()
}, 1000)
