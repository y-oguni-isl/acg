import { displayLanguageStore } from "./src/dom/i18n"

// Close other browser tabs
const broadcastChannel = new BroadcastChannel("acg")
broadcastChannel.addEventListener("message", (ev) => {
    if (ev.data === "hello") {
        location.href = "./tab_already_open.html"
    }
})
broadcastChannel.postMessage("hello")

// setup
if (!displayLanguageStore.getState().chosenByUser) {
    location.href = "./language_select.html"
}
