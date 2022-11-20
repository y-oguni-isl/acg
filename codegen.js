// @ts-check
import glob from "glob"
import fs from "fs"
import path from "path"

/** Updates src/webgl/index.ts based on exports in the files under src/webgl/. */
export const generate = () => {
    // src/webgl/index.ts
    {
        let reexports = ""

        const dir = "src/webgl"

        for (const f of /** @type {string[]} */(glob.sync(dir + "/**/*.ts"))) {
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
                reexports += `export { ${names.join(", ")} } from "./${path.relative(dir, f).slice(0, -".ts".length)}"\n`
            }
        }

        fs.writeFileSync(path.join(dir, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.
import "./lib.glsl"
${reexports}
`)
    }

    // src/stages/index.ts
    {
        const dir = "src/stages"
        /** @type {string[]} */
        const names = []

        for (const f of /** @type {string[]} */(glob.sync(dir + "/**/*.ts"))) {
            if (/^\d+_[^.]+\.ts/.test(path.basename(f))) {
                names.push(path.basename(f).slice(0, -".ts".length))
            }
        }
        names.sort((a, b) => a.localeCompare(b))

        fs.writeFileSync(path.join(dir, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.
${names.map((name) => `import ${name.split("_").at(-1)} from "./${name}"`).join("\n")}

export default {
${names.map((name) => `    ${name.split("_").at(-1)},`).join("\n")}
} as const
`)
    }
}

if ((process.argv.at(-1) ?? "").endsWith("/codegen.js")) { generate() }  // when this file is run with `node codegen.js`
