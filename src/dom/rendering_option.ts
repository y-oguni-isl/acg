/** Adds a rendering option and returns the current value saved in the localStorage. */
const renderingOption = (name: string, defaultValue: boolean = true) => {
    const label = document.querySelector("template#optionTemplate")!.content.children[0]!.cloneNode(true) as HTMLLabelElement
    const input = label.querySelector("input")!
    input.checked = defaultValue ?
        localStorage.getItem(`option.${name}`) !== "false" :
        localStorage.getItem(`option.${name}`) === "true"
    input.addEventListener("click", () => {  // when the checkbox is clicked
        // save the new value to localStorage and reload the page.
        localStorage.setItem(`option.${name}`, input.checked + "")
        location.reload()
    })
    label.querySelector("span")!.innerText = name
    document.querySelector("div#options")!.append(label)
    return input.checked
}

export default renderingOption
