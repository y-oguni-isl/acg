import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import * as licenseChecker from "license-checker"
import * as fs from "fs"
import assert from "assert/strict"
import { generate } from "./codegen"
import path from "path"

const escape = (t) => t.replaceAll("&", "&amp").replaceAll("<", "&lt").replaceAll(">", "&gt;").replaceAll("'", "&#39;").replaceAll('"', "&quot;")

/** @type {fs.FSWatcher | undefined} */
let watcher

export default defineConfig({
    plugins: [
        preact(),
        {
            name: "code_gen",
            buildStart: () => {
                generate()
                watcher = fs.watch("src/webgl", (type, filename) => {
                    if (!filename.endsWith("index.ts")) {
                        console.log("codegen")
                        generate()
                    }
                })
            },
            buildEnd: () => {
                watcher.close()
            },
        },
        {
            name: "pack_license",
            buildStart: () => {
                licenseChecker.init({
                    production: true,
                    json: true,
                    excludePrivatePackages: true,
                    start: ".",
                }, (err, result) => {
                    if (err) { console.err(err); process.exit(1) }
                    let html = ""
                    for (const [libraryName, info] of Object.entries(result)) {
                        assert(info.licenseFile)
                        assert(info.repository)
                        const licenseText = `${(typeof info.licenses === "string" ? [info.licenses] : info.licenses ?? []).join(", ")} License`
                        html += `\
<li>
    <h2><a href="${escape(info.repository)}">${escape(libraryName)}</a></h2>
    <details><summary>${escape(licenseText)}</summary><pre>${escape(fs.readFileSync(info.licenseFile).toString())}</pre></details>
</li>
`
                    }
                    if (!fs.existsSync("public/lib_credit.html") || fs.readFileSync("public/lib_credit.html").toString() !== html) {  // prevent vite from reloading the credit file when there are no changes
                        fs.writeFileSync("public/lib_credit.html", html)
                    }
                })
            }
        },
        {
            name: 'glsl-loader',
            transform(code, id) {
                if (id.endsWith(".frag") || id.endsWith(".vert") || id.endsWith(".glsl")) {
                    return { code: `export default ${JSON.stringify(code)}` }
                }
            }
        }
    ],
    base: "",
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "index.html"),
                tab_already_open: path.resolve(__dirname, "tab_already_open.html"),
            },
        },
    },
})
