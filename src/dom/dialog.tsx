import type { ComponentChildren } from "preact"
import { MutableRef, useEffect, useState } from "preact/hooks"
import Modal from "react-modal"

export type DialogRef = Pick<HTMLDialogElement, "showModal" | "close">

/**
 * A drop-in replacement for `<dialog>`.
 * We don't use `<dialog>` because:
 * - `transition` CSS property in `dialog::backdrop` doesn't work in Firefox and Safari as of dec 2022.
 * - A div with `position: absolute` cannot be rendered on top of `<dialog>` (https://stackoverflow.com/questions/41815069/is-it-possible-to-position-a-div-on-top-of-a-dialog-tag-that-is-not-its-parent), which is required for the custom cursor.
 */
const Dialog = (props: { ref_: MutableRef<DialogRef | null>, class?: string, children?: ComponentChildren, onClose?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (props.ref_ === undefined) { return }
        props.ref_.current = {
            showModal: () => { setIsOpen(true) },
            close: () => { setIsOpen(false); props.onClose?.() },
        }
    }, [props.ref_])
    return <Modal
        isOpen={isOpen}
        closeTimeoutMS={300}
        onRequestClose={() => { setIsOpen(false); props.onClose?.() }}
        className={"absolute outline-none top-1/2 left-1/2 right-auto bottom-auto mr-[-50%] [transform:translate(-50%,-50%)] [max-width:90vw] [max-height:90vh] overflow-auto " + (props.class ?? "")}>{
            props.children as React.ReactNode
        }</Modal>
}

export default Dialog
