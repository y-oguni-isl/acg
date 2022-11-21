import * as THREE from "three"
import { getState, store } from "../saveData"
import * as constants from "../constants"
import { useStore } from "zustand"
import { ObjectEntries } from "../util"
import { useRef, useState, useLayoutEffect } from "preact/hooks"
import shallow from "zustand/shallow"

const maxUpgrades = 25

const buildProgressBarStyle = (name: constants.UpgradeName, rowNumber: number) => {
    const price = constants.price(name, getState())
    const count = getState().upgrades[name]
    const money = getState().money
    const baseColor = count >= maxUpgrades ? new THREE.Vector4(255, 0, 0, 1) : money >= price ? new THREE.Vector4(0, 220, 220, 1) : new THREE.Vector4(128, 128, 128, 1)
    const progress = count >= maxUpgrades ? 1 : money / price

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
    const upgrades = useStore(store, (s) => ObjectEntries(s.upgrades)
        .filter((_, i, arr) => i < 2 || arr[i - 1]![1] > 0 || arr[i - 2]![1] > 0)
        .map(([k]) => k), shallow)
    return <div class="absolute left-1 top-1 w-56">
        <div class="px-3 pt-1 pb-3 window">
            <h2 class="mb-2 tracking-wide"><i class="ti ti-chevrons-up" /> Upgrades</h2>
            {upgrades.map((name, i) => <Row key={name} name={name} rowNumber={i} />)}
        </div>
        {getState().canTranscend && <div class="px-3 pt-1 pb-3 window gold mt-1">
            <p class="text-xs mb-2">
                You have reached the point of singularity and can transcended to a higher plane of existence.
            </p>
            {/* Higher plane of existence = enemies have more HP and money */}
            <button class="w-full" tabIndex={-1} onClick={() => { getState().transcend() }}>Show Bonus</button>
        </div>}
    </div>
}

const Row = (props: { name: constants.UpgradeName, rowNumber: number }) => {
    const buyUpgrade = useStore(store, (s) => s.buyUpgrade)
    const [mouseHover, setMouseHover] = useState(false)
    const weather = useStore(store, (s) => s.getWeather())
    const price = useStore(store, (s) => constants.price(props.name, s))
    const isUpgradeNameHidden = useStore(store, (s) => constants.isUpgradeNameHidden(props.name, s))
    const count = useStore(store, (s) => s.upgrades[props.name])
    const disabled = useStore(store, (s) => price > s.money || count >= maxUpgrades)
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const timer = setInterval(() => {
            if (!ref.current) { return }
            ref.current.style.background = buildProgressBarStyle(props.name, props.rowNumber)
        }, 1000 / 60) // Update animation
        return () => { clearTimeout(timer) }
    }, [ref])

    return <div
        ref={ref}
        class="relative block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] rounded-sm border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600"
        disabled={disabled}
        onMouseDown={() => {
            if (disabled) { return }
            buyUpgrade(props.name)
        }}
        onMouseEnter={() => { setMouseHover(true) }}
        onMouseLeave={() => { setMouseHover(false) }}>
        <div class="px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]">
            <span class="inline-block w-28 tracking-wider">{isUpgradeNameHidden ? "???" : props.name}</span>
            <span class="float-right tracking-tight">{count}{props.name === "Autopilot" && weather?.enabled && <b class="text-red-400"> (-5)</b>}</span>
        </div>
        {mouseHover && <Tooltip name={props.name} />}
    </div>
}

const Tooltip = (props: { name: constants.UpgradeName }) => {
    const price = useStore(store, (s) => constants.price(props.name, s))
    const atk = useStore(store, (s) => constants.getAtk(s)[props.name])
    const interval = useStore(store, (s) => constants.getInterval(s)[props.name])
    const money = useStore(store, (s) => s.money)
    const isUpgradeNameHidden = useStore(store, (s) => constants.isUpgradeNameHidden(props.name, s))

    return <div class="absolute left-full top-0 ml-7 px-6 py-1 backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] whitespace-nowrap pointer-events-none rounded-sm [font-size:80%]">
        <table>
            <tr><td class="font-bold tracking-wider pr-2 text-right">Price</td><td><i class="ti ti-moneybag" /> {money} / {price}</td></tr>
            {!isUpgradeNameHidden && <>
                {atk && <tr><td class="tracking-wider text-right pr-2">Damage</td><td><i class="ti ti-swords" /> {atk}</td></tr>}
                {interval && <tr><td class="tracking-wider text-right pr-2">Interval</td><td><i class="ti ti-hourglass" /> {interval}</td></tr>}
            </>}
        </table>
    </div>
}

export default Upgrades
