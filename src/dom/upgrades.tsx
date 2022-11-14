import * as THREE from "three"
import { getState, isUpgradeNameHidden, price, store, upgradeNames } from "../saveData"
import { useStore } from "zustand"
import { entries } from "../util"
import { useEffect, useState } from "preact/hooks"

const maxUpgrades = 25

const buildProgressBarStyle = (name: typeof upgradeNames[number], rowNumber: number) => {
    const baseColor = getState().upgrades[name] >= maxUpgrades ? new THREE.Vector4(255, 0, 0, 1) : getState().money >= price(name) ? new THREE.Vector4(0, 220, 220, 1) : new THREE.Vector4(128, 128, 128, 1)
    const progress = getState().upgrades[name] >= maxUpgrades ? 1 : getState().money / price(name)

    let style = "linear-gradient(90deg,"
    for (let i = 0; i <= 1; i += 0.05) {
        const color = baseColor.clone()
        const t = (Math.sin(i * 2 - Date.now() * 0.004 + rowNumber) + 1) / 2
        color.x += t * 70
        color.y += t * 70
        color.z += t * 70
        if (i > progress) {
            color.w = 0
        } else {
            color.w = 0.5
        }
        style += `rgba(${color.toArray().join(",")}) ${i * 100}%,`
    }

    return `${style.slice(0, -1)})`
}

/** The list of upgrades shown at the left top corner. */
const Upgrades = () => {
    const upgrades = useStore(store, (s) => s.upgrades)
    const money = useStore(store, (s) => s.money)
    const buyUpgrade = useStore(store, (s) => s.buyUpgrade)

    const [, update] = useState({})

    useEffect(() => {
        const timer = setInterval(() => { update({}) }, 1000 / 60)
        return () => { clearTimeout(timer) }
    }, [])

    return <div class="absolute left-1 top-1">
        <div class="px-3 pt-1 pb-3 window">
            <h2 class="mb-2">Upgrades</h2>
            {entries(upgrades)
                .filter((_, i, arr) => i < 2 || arr[i - 1]![1] > 0 || arr[i - 2]![1] > 0)
                .map(([name, count], i) => <div
                    key={name}
                    class="block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600"
                    style={{ background: buildProgressBarStyle(name, i) }}
                    disabled={price(name) > money || count >= maxUpgrades}
                    onMouseDown={() => {
                        if (price(name) > money || count >= maxUpgrades) { return }
                        buyUpgrade(name)
                    }}>
                    <div class="px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]">
                        <span class="inline-block w-28">{isUpgradeNameHidden(name) ? "???" : name}</span>
                        <span class="float-right">{count}</span>
                    </div>
                </div>)}
        </div>
    </div>
}

export default Upgrades
