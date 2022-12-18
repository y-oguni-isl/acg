// Add animations to buttons clicked
window.addEventListener("click", (ev) => {
    let button: HTMLElement | null
    if (ev.target instanceof Element && (button = ev.target.closest("button,.button") as HTMLElement | null)) {
        button.style.animation = ""
        requestAnimationFrame(() => { requestAnimationFrame(() => { button!.style.animation = "buttonClickAnimation 0.2s linear forwards" }) })
    }
})
