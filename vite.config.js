import { defineConfig } from 'vite'
import preact from "@preact/preset-vite"
import * as licenseChecker from "license-checker"
import * as fs from "fs"
import assert from "assert/strict"
import { generate } from "./codegen"

const escape = (t) => t.replaceAll('&', '&amp').replaceAll('<', '&lt').replaceAll('>', '&gt;').replaceAll("'", '&#39;').replaceAll('"', '&quot;')

export default defineConfig({
    plugins: [
        preact(),
        {
            name: "code_gen",
            buildStart: () => {
                generate()
                fs.watch("src/webgl", (type, filename) => {
                    if (!filename.endsWith("index.ts")) {
                        console.log("codegen")
                        generate()
                    }
                })
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
                    if (fs.readFileSync("public/lib_credit.html").toString() !== html) {  // prevent vite from reloading the credit file when there are no changes
                        fs.writeFileSync("public/lib_credit.html", html)
                    }
                })
            }
        },
    ],
    base: '',
    build: {
        target: "esnext",
    },
})
