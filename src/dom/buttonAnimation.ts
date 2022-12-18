// Add animations to buttons clicked
window.addEventListener("click", (ev) => {
    let button: HTMLButtonElement | null
    if (ev.target instanceof Element && (button = ev.target.closest("button"))) {
        button.style.animation = ""
        requestAnimationFrame(() => { requestAnimationFrame(() => { button!.style.animation = "buttonClickAnimation 0.2s linear forwards" }) })
    }
})
