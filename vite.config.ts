import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import licenseChecker from "license-checker"
import fs from "fs"
import assert from "assert/strict"
import { generate } from "./codegen"
import path from "path"

/** Escapes HTML. */
const escape = (t: string) => t.replaceAll("&", "&amp").replaceAll("<", "&lt").replaceAll(">", "&gt;").replaceAll("'", "&#39;").replaceAll('"', "&quot;")

let watcher: fs.FSWatcher | undefined

/** The configurations passed to vite. */
export default defineConfig({
    plugins: [
        preact(),

        // Run codegen.js before building the project
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
                watcher!.close()
            },
        },

        // Generate public/lib_credit.html with license-checker
        {
            name: "pack_license",
            buildStart: () => {
                licenseChecker.init({
                    production: true,
                    json: true,
                    excludePrivatePackages: true,
                    start: ".",
                }, (err, result) => {
                    if (err) { console.error(err); process.exit(1) }
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

        // Allow default importing .frag,.vert,.glsl files
        {
            name: 'glsl-loader',
            transform(code, id) {
                if (id.endsWith(".frag") || id.endsWith(".vert") || id.endsWith(".glsl")) {
                    return { code: `export default ${JSON.stringify(code)}` }
                }
            }
        }
    ],
    base: "", // Use relative path to reference assets, i.e. <element src="./foo"> instead of <element src="/foo">, to make them work correctly when hosted at a non-root directory
    build: {
        target: "esnext",
        rollupOptions: {
            // Entry points
            input: {
                index: path.resolve(__dirname, "index.html"),
                tab_already_open: path.resolve(__dirname, "tab_already_open.html"),
            },
        },
    },
})
