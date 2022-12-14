/**
 * This file defines setTooltip() and removeTooltip(), which set and remove a tooltip, respectively.
 */

import type { ComponentChildren } from "preact"
import { useEffect, useState } from "preact/hooks"
import { useStore } from "zustand"
import { createStore } from "../util"

const store = createStore("tooltipStore", {
    key: "",
    content: null as ComponentChildren,
    visible: false,
}, () => { })

/** Sets the tooltip text for the given key, overwriting any existing tooltip. */
export const setTooltip = (key: string, content: ComponentChildren) => { store.setState({ key, content, visible: true }) }

/** Removes the tooltip text for the given key if the currently displayed tooltip's key matches the given key. */
export const removeTooltip = (key: string) => {
    if (store.getState().key === key) {
        store.setState({ key: "", visible: false })
    }
}

/** This function renders the tooltip's text into the DOM. */
export const Tooltip = (props: { filter: (key: string) => boolean }) => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const content = useStore(store, (s) => props.filter(s.key) ? s.content : null)
    const visible = useStore(store, (s) => props.filter(s.key) && s.visible)
    useEffect(() => {
        const onMousemove = (ev: MouseEvent) => {
            setMouseX(ev.clientX)
            setMouseY(ev.clientY)
        }
        window.addEventListener("mousemove", onMousemove)
    }, [])
    return <div style={{
        transform: visible ? "translateY(0%) scaleY(100%)" : "translateY(-50%) scaleY(0%)",
        ...(mouseX < window.innerWidth / 2 ?
            { left: `${mouseX + 50}px`, top: `${mouseY}px` } :
            { right: `${window.innerWidth - mouseX + 50}px`, top: `${mouseY}px` }),
    }} class={"text-gray-100 absolute whitespace-nowrap px-6 py-1 backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] pointer-events-none rounded-sm [font-size:80%] [-webkit-text-stroke:5px_rgba(255,255,255,0.15)] [transition:transform_0.1s_ease-out]"}>
        {content}
    </div>
}
