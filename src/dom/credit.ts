// Credits
fetch("./audio/credit.html").then((res) => res.text()).then((html) => { document.querySelector('#creditDialog > ul')!.insertAdjacentHTML("beforeend", html) })
fetch("./models/credit.html").then((res) => res.text()).then((html) => { document.querySelector('#creditDialog > ul')!.insertAdjacentHTML("beforeend", html) })

document.querySelector("span#creditButton")!.addEventListener("click", () => {
    document.querySelector('dialog#creditDialog')!.showModal()
})
document.querySelector('dialog#creditDialog')!.addEventListener("click", (ev) => {
    // Close the dialog when the user clicks outside the dialog
    if (ev.target === ev.currentTarget) { (ev.currentTarget as HTMLDialogElement).close() }
})
