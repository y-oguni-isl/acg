const apply: (() => void)[] = []

/** Adds a rendering option and returns the current value saved in the localStorage. */
const renderingOption = (name: string, defaultValue: boolean = true) => {
    const label = document.querySelector("template#optionTemplate")!.content.children[0]!.cloneNode(true) as HTMLLabelElement
    const input = label.querySelector("input")!
    input.checked = defaultValue ?
        localStorage.getItem(`option.${name}`) !== "false" :
        localStorage.getItem(`option.${name}`) === "true"
    apply.push(() => { localStorage.setItem(`option.${name}`, input.checked + "") })
    label.querySelector("span")!.innerText = name
    document.querySelector("div#options")!.append(label)
    return input.checked
}

document.querySelector("button#applyRenderingOptions")?.addEventListener("click", () => {
    apply.forEach((f) => f())
    location.reload()
})

export default renderingOption
