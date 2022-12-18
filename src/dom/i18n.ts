import i18next from "i18next";
import { useTranslation as _useTranslation } from "react-i18next"
import { initReactI18next } from "react-i18next";
import { createPersistingStore } from "../util";
import en_US from "./locales/en-US"
import ja_JP from "./locales/ja-JP"

export type LanguageCode = "en-US" | "ja-JP"

/** The store to persist display language settings. */
export const displayLanguageStore = createPersistingStore("acgI18Store", 0, {
    lang: "en-US" as LanguageCode
}, (set) => ({
    setLang: (lang: LanguageCode) => {
        i18next.changeLanguage(lang)
        set({ lang })
    },
}))

/** Initialize i18next */
i18next
    .use(initReactI18next)
    .init({
        resources: {
            "en-US": { translation: { ...Object.fromEntries(Object.keys(ja_JP).map((k) => [k, k])), ...en_US } },
            "ja-JP": { translation: ja_JP },
        } satisfies Record<LanguageCode, { translation: Record<string, unknown> }>,
        lng: displayLanguageStore.getState().lang,
        fallbackLng: "en-US" satisfies LanguageCode,
        interpolation: { escapeValue: false },  // react already safes from xss

        // Allow returning JSX https://github.com/i18next/react-i18next/issues/189#issuecomment-630461069
        returnObjects: false,
        returnedObjectHandler: (k, v, options) => v,
    })

/** The type of `i18next.t` */
type t = <T extends keyof typeof ja_JP>(key: T, options?: Record<string, unknown>) =>
    T extends `tutorial-${string}` ? preact.ComponentChildren :
    string

/** Returns the translated text for the key, which is defined in `locales/`. */
export const i18nextT = i18next.t as t

/** The React hook for {@link i18nextT} */
export const useTranslation = _useTranslation as () => { t: t }
