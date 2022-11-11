import audioCredit from "../audio/credit"
import modelCredit from "../models/credit"

// Credits
for (const [k, v] of Object.entries({ ...audioCredit, ...modelCredit })) {
    // <li><h2>{k}</h2>{v}</li>
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    h2.innerText = k
    li.append(h2)
    li.append(v.trim())
    document.querySelector('#creditDialog > ul')!.append(li)
}
document.querySelector("span#creditButton")!.addEventListener("click", () => {
    document.querySelector('dialog#creditDialog')!.showModal()
})
document.querySelector('dialog#creditDialog')!.addEventListener("click", (ev) => {
    // Close the dialog when the user clicks outside the dialog
    if (ev.target === ev.currentTarget) { document.querySelector('dialog#creditDialog')!.close() }
})
