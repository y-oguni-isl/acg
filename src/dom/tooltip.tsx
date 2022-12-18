/**
 * This file defines setTooltip() and removeTooltip(), which set and remove a tooltip, respectively.
 */

import type { ComponentChildren } from "preact"
import { useEffect, useState } from "preact/hooks"
import { useEventListener } from "usehooks-ts"
import { useStore } from "zustand"
import { onUpdate } from "../hooks"
import { createStore } from "../util"

const store = createStore("tooltipStore", {
    key: null as Element | null,
    content: null as ComponentChildren,
    visible: false,
}, () => { })

/** Sets the tooltip text for the given key, overwriting any existing tooltip. */
export const setTooltip = (key: Element, content: ComponentChildren) => { store.setState({ key, content, visible: true }) }

/** Removes the tooltip text for the given key if the currently displayed tooltip's key matches the given key. */
export const removeTooltip = (key: Element) => {
    if (store.getState().key === key) {
        store.setState({ key: null, visible: false })
    }
}

/** This function renders the tooltip's text into the DOM. */
export const Tooltip = (props: { class?: string, filter: (key: Element) => boolean }) => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const content = useStore(store, (s) => s.key !== null && props.filter(s.key) ? s.content : null)
    const visible = useStore(store, (s) => s.key !== null && props.filter(s.key) && s.visible)
    useEventListener("mousemove", (ev) => {
        setMouseX(ev.clientX)
        setMouseY(ev.clientY)
    })
    useEffect(() => {
        const callback = (t: number) => {
            if (t % 3 === 0 && store.getState().key?.isConnected === false) {
                removeTooltip(store.getState().key!)
            }
        }
        onUpdate.add(callback)
        return () => { onUpdate.delete(callback) }
    }, [])
    return <div style={{
        transform: visible ? "translateY(0%) scaleY(100%)" : "translateY(-50%) scaleY(0%)",
        ...(mouseX < window.innerWidth / 2 ?
            { left: `${mouseX + 50}px`, top: `${mouseY}px` } :
            { right: `${window.innerWidth - mouseX + 50}px`, top: `${mouseY}px` }),
    }} class={"text-gray-100 absolute whitespace-nowrap px-6 py-1 backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] select-none pointer-events-none rounded-sm [font-size:80%] [-webkit-text-stroke:5px_rgba(255,255,255,0.15)] [transition:transform_0.1s_ease-out] " + (props.class ?? "")}>
        {content}
    </div>
}
