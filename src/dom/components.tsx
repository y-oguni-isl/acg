import type { ComponentChildren } from "preact"
import { MutableRef, useCallback, useEffect } from "preact/hooks"
import { JSXInternal } from "preact/src/jsx"
import Modal from "react-modal"
import { useBoolean } from "usehooks-ts"
import { removeTooltip, setTooltip } from "./tooltip"
import { forwardRef } from 'preact/compat'
import ja_JP from "./locales/ja-JP"
import i18next from "i18next"

/** A subtype of HTMLDialogElement to reference a <{@link Dialog}>. */
export type DialogRef = Pick<HTMLDialogElement, "showModal" | "close">

/**
 * A drop-in replacement for `<dialog>`.
 * We don't use `<dialog>` because:
 * - `transition` CSS property in `dialog::backdrop` doesn't work in Firefox and Safari as of dec 2022.
 * - A div with `position: absolute` cannot be rendered on top of `<dialog>` (https://stackoverflow.com/questions/41815069/is-it-possible-to-position-a-div-on-top-of-a-dialog-tag-that-is-not-its-parent), which is required for the custom cursor.
 */
export const Dialog = (props: { ref_: MutableRef<DialogRef | null>, class?: string, children?: ComponentChildren, onClose?: () => void }) => {
    const open = useBoolean(false)
    const close = useCallback(() => { open.setFalse(); props.onClose?.() }, [])
    useEffect(() => {
        if (props.ref_ === undefined) { return }
        props.ref_.current = { showModal: open.setTrue, close }
    }, [props.ref_])
    return <Modal
        react-i18next isOpen={open.value}
        closeTimeoutMS={300}
        onRequestClose={close}
        className={"absolute outline-none top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] [max-width:90vw] [max-height:90vh] overflow-auto " + (props.class ?? "")}>{
            props.children as React.ReactNode
        }</Modal>
}

/** The small windows displayed at either side of the screen, e.g. upgrades, stages, etc. */
export const FrostedGlassWindow = (props: { class?: string, visible: boolean, transitionDurationSec: number, children: preact.ComponentChildren }) => {
    return <div
        style={{ transition: `transform ${props.transitionDurationSec}s ease-in-out` }}
        class={props.visible ? ("window " + (props.class ?? "")) : ""}>
        {props.visible && props.children}
    </div>
}

/** We don't use <button> because mouse events including mousehover and window.onclick do not fire on disabled buttons on Chrome. */
export const Button = forwardRef((props: {
    class?: string
    onClick?: JSXInternal.MouseEventHandler<HTMLDivElement>
    onMouseOver?: JSXInternal.MouseEventHandler<HTMLDivElement>
    title?: preact.ComponentChildren
    children?: preact.ComponentChildren
    disabled?: boolean
}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <div
        ref={ref}
        class={`button inline-block text-center ${props.disabled ? "" : "pointer "}` + (props.class ?? "")}
        onClick={function (ev) { if (!props.disabled) { props.onClick?.call(this, ev) } }}
        onMouseOver={function (ev) {
            if (props.title) { setTooltip(ev.currentTarget, props.title) }
            props.onMouseOver?.call(this, ev)
        }}
        onMouseOut={(ev) => {
            if (props.title) { removeTooltip(ev.currentTarget) }
        }}>{props.children}</div>
})
