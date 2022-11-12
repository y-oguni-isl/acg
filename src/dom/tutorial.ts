const el = document.querySelector("div#tutorial")!

const tutorialText = {
    wasd: "You have become a fighter pilot that shoots laser beams. This world is peaceful, so your first mission is to protect farmers from harmful birds.\nThe controls are simple, WASD to move and aim your targets.",
    upgrade: "You can now buy upgrades for your aircraft! To do so, click on the button in the upper left corner of the screen.",
}
const completed = new Set<keyof typeof tutorialText>()
const queue: (keyof typeof tutorialText)[] = []

/** Enqueues a tutorial. */
export const enqueueTutorial = (name: keyof typeof tutorialText) => {
    if (queue.includes(name) || completed.has(name)) { return }
    queue.push(name)
    if (queue.length === 1) {
        el.innerText = tutorialText[name]
        el.style.opacity = "1"
    }
}

export const dequeueTutorial = (name: keyof typeof tutorialText) => {
    if (queue[0] !== name) { return }
    completed.add(name)
    queue.shift()
    if (queue.length === 0) {
        el.style.opacity = "0"
    } else {
        el.innerText = tutorialText[queue[0]]
    }
}

enqueueTutorial("wasd")
window.addEventListener("keyup", (ev) => { if (["KeyW", "KeyS", "KeyA", "KeyD"].includes(ev.code)) { dequeueTutorial("wasd") } })
