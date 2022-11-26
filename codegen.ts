import glob from "glob"
import fs from "fs"
import path from "path"

/** Updates src/<dir>/index.ts based on the exports in the files under src/<dir>/. */
export const generate = () => {
    // src/webgl/index.ts
    {
        let reexports = ""

        const dir = "src/webgl"

        for (const f of /** @type {string[]} */(glob.sync(dir + "/**/*.ts"))) {
            if (path.basename(f) === "index.ts" || !/^[^.]+.ts$/.test(path.basename(f))) { continue }
            const content = fs.readFileSync(f).toString()
            /** @type {string[]} */
            const names = []

            // List default exported identifiers
            if (/^export default/m.test(content)) {
                names.push(`default as ${path.basename(f).slice(0, -".ts".length)}`)
            }

            // List named exported identifiers
            for (const m of content.matchAll(/^export (?:const|class) (\w+)/mg)) {
                names.push(m[1])
            }

            // Reexport the identifiers
            if (names.length > 0) {
                reexports += `export { ${names.join(", ")} } from "./${path.relative(dir, f).slice(0, -".ts".length)}"\n`
            }
        }

        fs.writeFileSync(path.join(dir, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.

import * as THREE from "three"
import snoise from "./snoise.glsl"
THREE.ShaderChunk["snoise"] = snoise

${reexports}
`)
    }

    // src/stages/index.ts
    {
        const dir = "src/stages"
        /** @type {string[]} */
        const names = []

        // List files whose name matches to `<id>_<name>.ts` in the directory
        for (const f of /** @type {string[]} */(glob.sync(dir + "/**/*.ts"))) {
            if (/^\d+_[^.]+\.ts/.test(path.basename(f))) {
                names.push(path.basename(f).slice(0, -".ts".length))
            }
        }
        names.sort((a, b) => a.localeCompare(b))

        // Reexport the files
        fs.writeFileSync(path.join(dir, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.
${names.map((name) => `import ${name.split("_").at(-1)} from "./${name}"`).join("\n")}

export default {
${names.map((name) => `    ${name.split("_").at(-1)},`).join("\n")}
} as const
`)
    }

    // src/weapons/index.ts
    {
        const dir = "src/weapons"
        /** @type {string[]} */
        const names = []

        // List files in the directory
        for (const f of /** @type {string[]} */(glob.sync(dir + "/**/*.ts"))) {
            if (/^[^.]+\.ts/.test(path.basename(f)) && path.basename(f) !== "index.ts") {
                names.push(path.basename(f).slice(0, -".ts".length))
            }
        }
        names.sort((a, b) => a.localeCompare(b))

        // Reexport the files
        fs.writeFileSync(path.join(dir, "index.ts"), `\
// This file is auto-generated with \`node codegen.js\`.
${names.map((name) => `import ${name.split(".").at(0)} from "./${name}"`).join("\n")}

export default [
${names.map((name) => `    ${name.split(".").at(0)},`).join("\n")}
]
`)
    }
}

if ((process.argv.at(-1) ?? "").endsWith("/codegen.js")) { generate() }  // if this file is run with `node codegen.js`
