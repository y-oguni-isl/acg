import glob from "glob"
import fs from "fs"
import path from "path"

/** Updates src/webgl/index.ts based on exports in the files under src/webgl/. */
export const generate = () => {
    let reexports = ""

    const webgl = "src/webgl"

    for (const f of /** @type {string[]} */(glob.sync(webgl + "/**/*.ts"))) {
        if (f === "index.ts" || !/^[^.]+.ts$/.test(f)) { continue }
        const content = fs.readFileSync(f).toString()
        /** @type {string[]} */
        const names = []

        // Default exports
        if (/^export default/m.test(content)) {
            names.push(`default as ${path.basename(f).slice(0, -".ts".length)}`)
        }

        // Named exports
        for (const m of content.matchAll(/^export const (\w+)/mg)) {
            names.push(m[1])
        }

        if (names.length > 0) {
            reexports += `export { ${names.join(", ")} } from "./${path.relative(webgl, f).slice(0, -".ts".length)}"\n`
        }
    }

    fs.writeFileSync(path.join(webgl, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.
import "./lib.glsl"
${reexports}
`)
}

if (process.argv.at(-1).endsWith("/codegen.js")) { generate() }  // when this file is run with `node codegen.js`
