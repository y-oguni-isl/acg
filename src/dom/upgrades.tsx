import * as THREE from "three"
import { getState, store } from "../saveData"
import * as constants from "../constants"
import { useStore } from "zustand"
import { ObjectEntries } from "../util"
import { useRef, useLayoutEffect } from "preact/hooks"
import shallow from "zustand/shallow"
import { removeTooltip, setTooltip } from "./tooltip"
import { onBeforeRender } from "../hooks"
import { FrostedGlassWindow } from "./components"

/** Constructs the css property to animate the background color of the buttons in the "Upgrades" window. */
const buildProgressBarStyle = (name: constants.UpgradeName, rowNumber: number) => {
    const price = constants.price(name, getState())
    const count = getState().upgrades[name]
    const money = getState().money
    const progress = count >= constants.maxUpgrades ? 1 : money / price
    const r = count >= constants.maxUpgrades ? 255 : progress >= 1 ? 0 : 128
    const g = count >= constants.maxUpgrades ? 0 : progress >= 1 ? 220 : 128
    const b = count >= constants.maxUpgrades ? 0 : progress >= 1 ? 220 : 128
    const theta0 = Date.now() * 0.004 + rowNumber

    let style = "linear-gradient(90deg"
    for (let i = 0; i <= 1; i += 0.05) {
        const t = (Math.sin(i * 2 - theta0) + 1) / 2 * 70
        style += `,rgba(${r + t},${g + t},${b + t},${i > progress ? 0 : 0.5}) ${i * 100}%`
    }
    return style + ")"
}

/** The list of upgrades shown at the left top corner. */
const Upgrades = (props: { class?: string }) => {
    const upgrades = useStore(store, (s) => ObjectEntries(s.upgrades)
        .filter((_, i, arr) => i < 2 || arr[i - 1]![1] > 0 || arr[i - 2]![1] > 0)
        .map(([k]) => k), shallow)
    return <FrostedGlassWindow visible={true} transitionDurationSec={0.6} class={"pr-3 pl-4 pt-1 pb-3 " + (props.class ?? "")}>
        <h2 class="mb-2 tracking-wide"><i class="ti ti-chevrons-up" /> Upgrades</h2>
        <div class="[&>*:not(:last-child)]:mb-1">
            {upgrades.map((name, i) => <Row key={name} name={name} rowNumber={i} />)}
        </div>
    </FrostedGlassWindow>
}

/** The button in the "Upgrades" window */
const Row = (props: { name: constants.UpgradeName, rowNumber: number }) => {
    const buyUpgrade = useStore(store, (s) => s.buyUpgrade)
    const weather = useStore(store, (s) => s.getWeather())
    const price = useStore(store, (s) => constants.price(props.name, s))
    const isUpgradeNameHidden = useStore(store, (s) => constants.isUpgradeNameHidden(props.name, s))
    const count = useStore(store, (s) => s.upgrades[props.name])
    const disabled = useStore(store, (s) => price > s.money || count >= constants.maxUpgrades)
    const ref = useRef<HTMLButtonElement>(null)

    useLayoutEffect(() => {
        const callback = () => {
            if (!ref.current) { return }
            ref.current.style.background = buildProgressBarStyle(props.name, props.rowNumber)
        }
        onBeforeRender.add(callback)
        return () => { onBeforeRender.delete(callback) }
    }, [ref])

    const debuff = constants.weatherDebuff(props.name, weather)

    return <button
        ref={ref}
        class="relative block w-full drop-shadow-none border-[1px]"
        disabled={disabled}
        onClick={() => {
            if (disabled) { return }
            buyUpgrade(props.name)
        }}>
        <div
            class="px-2"
            onMouseOver={() => { setTooltip(`left:upgrade-${props.name}`, <TooltipContent name={props.name} />) }}
            onMouseOut={() => { removeTooltip(`left:upgrade-${props.name}`) }}>
            <span class="inline-block w-28 tracking-wider whitespace-nowrap">{isUpgradeNameHidden ? "???" : <><i class={"mr-1 ti " + ({
                Laser: "ti-flare",
                Autopilot: "ti-plane",
                Hammer: "ti-hammer",
                "ATK×2": "ti-swords",
                Vacuum: "ti-windmill",
                Missile: "ti-rocket",
                placeholder4: "ti-circle-dotted",
                placeholder5: "ti-circle-dotted",
                placeholder6: "ti-circle-dotted",
            } satisfies Record<constants.UpgradeName, string>)[props.name]} />{props.name}</>}</span>
            <span class="float-right tracking-tight">{count}{debuff !== 0 && <b class="text-red-400"> ({debuff})</b>}</span>
        </div>
    </button>
}

/** Renders the contents of the tooltip that is shown when the mouse cursor is over the one of the buttons in the "Upgrades" window. */
const TooltipContent = (props: { name: constants.UpgradeName }) => {
    const price = useStore(store, (s) => constants.price(props.name, s))
    const atk = useStore(store, (s) => constants.getAtk(s)[props.name])
    const interval = useStore(store, (s) => constants.getInterval(s)[props.name])
    const money = useStore(store, (s) => s.money)
    const isUpgradeNameHidden = useStore(store, (s) => constants.isUpgradeNameHidden(props.name, s))
    const vacuumGain = useStore(store, (s) => constants.getVacuumGain(s).toFixed(2))

    return <table>
        <tr><td class="font-bold tracking-wider pr-2 text-right">Price</td><td><i class="ti ti-moneybag" /> {money} / {price}</td></tr>
        {!isUpgradeNameHidden && <>
            {atk && <tr><td class="tracking-wider text-right pr-2">Damage</td><td><i class="ti ti-swords" /> {atk}</td></tr>}
            {interval && <tr><td class="tracking-wider text-right pr-2">Interval</td><td><i class="ti ti-hourglass" /> {interval}</td></tr>}
            {props.name === "Missile" && <tr><td class="tracking-wider text-right pr-2">Ammo</td><td><i class="ti ti-notes" /> <i class="ti ti-settings" />×1000 / shot</td></tr>}
            {props.name === "Vacuum" && <tr><td class="tracking-wider text-right pr-2">Items</td><td><i class="ti ti-notes" /> ×{vacuumGain}</td></tr>}
        </>}
    </table>
}

export default Upgrades
