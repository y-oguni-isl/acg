import { useState, useEffect, useRef } from "preact/hooks"
import { useEventListener } from "usehooks-ts"
import cursorDefault from "../../cursor.png"
import cursorPointer from "../../cursor-pointer.png"

const useParticleImage = () => {
    const [image, setImage] = useState<HTMLImageElement | null>(null)
    useEffect(() => {
        const img = new Image()
        img.src = "./vfx/particle-blue.png"
        img.onload = () => { setImage(img) }
    }, [])
    return image
}

/**
 * We're using a div with `position: absolute` instead of the `cursor: url(...)` CSS property because cursors displayed by `cursor: url(...)` are resized according to the operating system's cursor size setting, and it can reduce the resolution of the cursor images.
 */
export const Cursor = () => {
    const [position, setPosition] = useState<[number, number] | null>(null)
    const [style, setStyle] = useState<"default" | "pointer">("default")
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particleImage = useParticleImage()

    // Listen for mouse events
    useEventListener("mousemove", (ev) => {
        setPosition([ev.clientX, ev.clientY])
        const element = document.elementFromPoint(ev.clientX, ev.clientY)
        setStyle(element?.matches(".pointer,.pointer *,button,button *,a,input,.ReactModal__Overlay") ? "pointer" : "default")
    })
    useEventListener("mouseout", () => { setPosition(null) }, { current: document.body })

    // Draw on the canvas
    useEffect(() => {
        if (!canvasRef.current || !particleImage) { return }
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")!
        if (style === "pointer") {
            let canceled = false
            const loop = () => {
                if (canceled) { return }
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                const drawParticle = (size: number) => { ctx.drawImage(particleImage, canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size) }
                const t = (Date.now() % 1000) / 1000
                ctx.globalCompositeOperation = "lighter"
                ctx.globalAlpha = (1 - t) * 0.5
                drawParticle(20 + t * 60)
                ctx.globalAlpha = 0.5
                drawParticle(15)
                requestAnimationFrame(loop)
            }
            loop()
            return () => { canceled = true }
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }, [style])

    return <>
        <canvas
            ref={canvasRef}
            width="100"
            height="100"
            style={position ? { left: position[0] - 54, top: position[1] - 52 } : {}}
            class={"absolute z-[29] pointer-events-none mix-blend-plus-lighter" + (position ? "" : " hidden")} />
        <img
            src={style === "default" ? cursorDefault : cursorPointer}
            style={position ? { left: position[0] - 10, top: position[1] - 4 } : {}}
            class={"absolute z-30 pointer-events-none" + (position ? "" : " hidden")} />
    </>
}
