import { render } from "preact"
import Upgrades from "./upgrades"
import { useStore } from "zustand"
import { deleteSaveData, getState, store, tutorials } from "../save_data"
import create from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist } from "zustand/middleware"
import { entries } from "../util"
import { Ref, useEffect, useRef, useState } from "preact/hooks"
import type { JSXInternal } from "preact/src/jsx"

const tutorialIndices = new Map((Object.keys(tutorials) as (keyof typeof tutorials)[]).map((name, i) => [name, i]))

const Tutorial = () => {
    const tutorial = useStore(store, (s) =>
        [...s.availableTutorials]
            .filter((t) => !s.completedTutorials.has(t))
            .sort((a, b) => tutorialIndices.get(a)! - tutorialIndices.get(b)!)[0])
    return <div style={{ opacity: tutorial === undefined ? "0" : "1" }} class="absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none">
        {tutorial && tutorials[tutorial]}
    </div>
}

export const domStore = create<{
    renderingOptions: Record<string, boolean>
    news: readonly [headline: string, text: string] | null
    loadingMessage: string

    getRenderingOption: (name: string, defaultValue?: boolean) => boolean
    setRenderingOption: (name: string, value: boolean) => void
}>()(persist(immer((set, get) => ({
    renderingOptions: {},
    news: null as readonly [headline: string, text: string] | null,
    loadingMessage: "",

    getRenderingOption: (name, defaultValue = true) => {
        set((d) => { if (!(name in d.renderingOptions)) { d.renderingOptions[name] = defaultValue } })
        return get().renderingOptions[name]!
    },
    setRenderingOption: (name, value) => { set((d) => { d.renderingOptions[name] = value }) }
})), {
    name: "acgRenderingOptions",
}))

export const getRenderingOption = domStore.getState().getRenderingOption

const closeDialogOnClick = (ev: JSXInternal.TargetedMouseEvent<HTMLDialogElement>) => {
    // Close the dialog when the user clicks outside the dialog
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
}

const randomText = Array(10000).fill(0).map(() => Array(Math.floor(Math.random() * 6) + 2).fill(0).map(() => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)]).join("")).join(" ")

const UI = () => {
    const state = useStore(domStore)
    const newsDialog = useRef() as Ref<HTMLDialogElement>
    const creditDialog = useRef() as Ref<HTMLDialogElement>
    const [creditHTML, setCreditHTML] = useState<string>("")

    useEffect(() => {
        fetch("./audio/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + html) })
        fetch("./models/credit.html")
            .then((res) => res.text())
            .then((html) => { setCreditHTML((c) => c + html) })
    }, [])

    useEffect(() => {
        if (state.news === null) { return }
        newsDialog.current!.style.opacity = "0"
        newsDialog.current!.showModal()
        newsDialog.current!.style.opacity = "1"
        newsDialog.current!.addEventListener("close", () => { domStore.setState({ news: null }) }, { once: true })
    }, [state.news])

    return <>
        <Upgrades />
        <Tutorial />
        <div class="absolute right-1 top-1">
            <div class="px-3 pt-1 pb-3 window">
                <h2>Rendering</h2>
                <div>
                    {entries(state.renderingOptions).map(([name, checked]) => <label class="block">
                        <input type="checkbox" class="mr-1" checked={checked} onClick={() => { state.setRenderingOption(name, !checked) }} />
                        <span>{name}</span>
                    </label>)}
                </div>
                <button class="bg-gray-800 bg-opacity-30 px-4 hover:bg-opacity-60" onClick={() => { location.reload() }}>Apply</button>
            </div>
        </div>
        <div class="absolute left-1 bottom-1 px-5 pb-1 window">
            <span class="cursor-pointer" onClick={() => { creditDialog.current!.showModal() }}>Credit</span>
            <span class="cursor-pointer text-red-400 ml-5" onClick={() => {
                if (confirm("Are you sure you want to reset your save data?")) {
                    deleteSaveData()
                    location.reload()
                }
            }}>Reset Progress</span>
        </div>
        <dialog ref={creditDialog} class="p-2" onClick={closeDialogOnClick}>
            <div class="p-5">
                <h1 class="text-xl mb-2">Credit</h1>
                <ul dangerouslySetInnerHTML={{ __html: creditHTML ?? "" }} class="w-full h-full block [&_li]:mb-2 [&_h2]:font-bold"></ul>
            </div>
        </dialog>
        <dialog ref={newsDialog} class="bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [transition:opacity_ease_0.3s]" onClick={closeDialogOnClick}>
            {state.news && <div class="[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden  h-full">
                <h2 class="text-lg font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center">{state.news[0]}</h2>
                <span>{state.news[1]}</span>
                <span class="text-gray-500">{randomText}</span>
            </div>}
        </dialog>
        {state.loadingMessage && <div class="text-white absolute top-[35%] left-0 w-full text-center">{state.loadingMessage}</div>}
    </>
}


render(<UI />, document.body)
