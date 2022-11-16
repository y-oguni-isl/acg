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

    return <div class="absolute left-1 top-1 w-56">
        <div class="px-3 pt-1 pb-3 window">
            <h2 class="mb-2">Upgrades</h2>
            {entries(upgrades)
                .filter((_, i, arr) => i < 2 || arr[i - 1]![1] > 0 || arr[i - 2]![1] > 0)
                .map(([name, count], i) => <Row key={name} name={name} count={count} rowNumber={i} />)}
        </div>
        {getState().canTranscend && <div class="px-3 pt-1 pb-3 window gold mt-1">
            <p class="text-xs mb-2">
                You have reached the point of singularity and can transcended to a higher plane of existence. All your progress will be reset, but you will receive a bonus based on your previous progress.
            </p>
            {/* Higher plane of existence = enemies have more HP and money */}
            <button class="w-full" tabIndex={-1} onClick={() => { getState().transcend() }}>Transcend</button>
        </div>}
    </div>
}

const Row = (props: { name: typeof upgradeNames[number], count: number, rowNumber: number }) => {
    const buyUpgrade = useStore(store, (s) => s.buyUpgrade)
    const money = useStore(store, (s) => s.money)
    const [mouseHover, setMouseHover] = useState(false)
    const [, update] = useState({})
    const weather = useStore(store, (s) => s.getWeather())

    useEffect(() => {
        const timer = setInterval(() => { update({}) }, 1000 / 60) // Update animation
        return () => { clearTimeout(timer) }
    }, [])

    return <div
        key={props.name}
        class="relative block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600"
        style={{ background: buildProgressBarStyle(props.name, props.rowNumber) }}
        disabled={price(props.name) > money || props.count >= maxUpgrades}
        onMouseDown={() => {
            if (price(props.name) > money || props.count >= maxUpgrades) { return }
            buyUpgrade(props.name)
        }}
        onMouseEnter={() => { setMouseHover(true) }}
        onMouseLeave={() => { setMouseHover(false) }}>
        <div class="px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]">
            <span class="inline-block w-28">{isUpgradeNameHidden(props.name) ? "???" : props.name}</span>
            <span class="float-right">{props.count}{props.name === "Autopilot" && weather?.enabled && " (-5)"}</span>
        </div>
        {mouseHover && <div class="absolute left-full top-0 ml-1 px-3 tooltip whitespace-nowrap">
            {money} / {price(props.name)}
        </div>}
    </div>
}

export default Upgrades
