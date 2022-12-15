import type { ComponentChildren } from "preact"
import { MutableRef, useCallback, useEffect } from "preact/hooks"
import Modal from "react-modal"
import { useBoolean } from "usehooks-ts"

/** A subtype of HTMLDialogElement to reference a <{@link Dialog}>. */
export type DialogRef = Pick<HTMLDialogElement, "showModal" | "close">

/**
 * A drop-in replacement for `<dialog>`.
 * We don't use `<dialog>` because:
 * - `transition` CSS property in `dialog::backdrop` doesn't work in Firefox and Safari as of dec 2022.
 * - A div with `position: absolute` cannot be rendered on top of `<dialog>` (https://stackoverflow.com/questions/41815069/is-it-possible-to-position-a-div-on-top-of-a-dialog-tag-that-is-not-its-parent), which is required for the custom cursor.
 */
const Dialog = (props: { ref_: MutableRef<DialogRef | null>, class?: string, children?: ComponentChildren, onClose?: () => void }) => {
    const open = useBoolean(false)
    const close = useCallback(() => { open.setFalse(); props.onClose?.() }, [])
    useEffect(() => {
        if (props.ref_ === undefined) { return }
        props.ref_.current = { showModal: open.setTrue, close }
    }, [props.ref_])
    return <Modal
        isOpen={open.value}
        closeTimeoutMS={300}
        onRequestClose={close}
        className={"absolute outline-none top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] [max-width:90vw] [max-height:90vh] overflow-auto " + (props.class ?? "")}>{
            props.children as React.ReactNode
        }</Modal>
}

export default Dialog
