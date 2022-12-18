import { render } from "preact"
import { Cursor } from "./src/dom/cursor"
import { useTranslation } from "./src/dom/i18n"
import "./src/dom/buttonAnimation"

const App = () => {
    const { t } = useTranslation()
    return <>
        <h2 class="text-amber-400 text-3xl font-bold mb-4 [-webkit-text-stroke:3px_rgba(255,255,100,0.4)]">
            <i class="ti ti-alert-triangle mr-2"></i>
            {t("Game Opened in Another Tab!")}
        </h2>
        <p class="mb-8 text-gray-300 [-webkit-text-stroke:3px_rgba(255,255,255,0.15)]">
            {t("This game uses auto-save and will not function properly if it is open in multiple browser tabs. To avoid any issues, the game in this tab has been paused. Please close this tab and continue playing the game in the other tab.")}
        </p>
        <button class="px-4 [line-height:1.5] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)]" onClick={() => { location.href = "./" }}><i class="ti ti-arrow-back pr-1"></i>{t("Resume the game on this tab")}</button>
        <div class="absolute left-2 bottom-2 text-gray-300 [-webkit-text-stroke:3px_rgba(255,255,255,0.1)]">Icon font: <a href="https://github.com/tabler/tabler-icons" class="underline">Tabler-icons</a></div>
        <Cursor />
    </>
}
render(<App />, document.body)
