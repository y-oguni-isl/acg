import { render } from "preact"
import { useStore } from "zustand"
import { Button } from "./src/dom/components"
import { Cursor } from "./src/dom/cursor"
import { displayLanguageStore, useTranslation } from "./src/dom/i18n"
import "./src/dom/buttonAnimation"
import { useBoolean } from "usehooks-ts"

const App = () => {
    const { t } = useTranslation()
    const setLang = useStore(displayLanguageStore, (s) => s.setLang)
    const clicked = useBoolean()
    const startGame = () => {
        clicked.setTrue()
        document.body.style.opacity = "0"
        setTimeout(() => { location.href = "./" }, 1100)
    }
    return <>
        <div class="text-center mx-auto w-[50%] mt-[35vh]">
            <h2 class="text-amber-400 text-3xl font-bold mb-12 tracking-wide [-webkit-text-stroke:3px_rgba(255,255,100,0.4)]">{t("Choose a Display Language.")}</h2>
            <Button disabled={clicked.value} class="pointer button--gray-600 !block mx-auto mb-4 min-w-[200px] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)]" onMouseOver={() => { if (!clicked.value) { setLang("en-US") } }} onClick={() => { setLang("en-US"); startGame() }}>English (US)</Button>
            <Button disabled={clicked.value} class="pointer button--gray-600 !block mx-auto mb-4 min-w-[200px] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)]" onMouseOver={() => { if (!clicked.value) { setLang("ja-JP") } }} onClick={() => { setLang("ja-JP"); startGame() }}>日本語</Button>
        </div>
        <Cursor />
    </>
}

// render(<App />, document.body)
render(<App />, document.querySelector("div#app")!)
