/// <reference path="../node_modules/core-dts/src/proposals/stage-2/new-set-methods.d.ts" />
/// <reference path="../node_modules/core-dts/src/proposals/stage-2/map-prototype-emplace.d.ts" />

// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
