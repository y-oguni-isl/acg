# How to Build The Project

1. [Install Node.js](https://nodejs.org/en/download/)
2. ```shell
   corepack enable
   corepack prepare yarn@4.0.0-rc.30 --activate
   yarn

   yarn start
   # or
   yarn build
   python3 -m http.server --bind localhost --directory dist
   ```

I highly recommend using VSCode with the extensions listed in `.vscode/extensions.json` for development.
- `"boyswan.glsl-literal"` highlights the `/* glsl */` syntax in `.frag.ts` and `.vert.ts` files.
- `"bradlc.vscode-tailwindcss"` adds auto-completions and hovers to tailwind classes.
- `"ms-vscode.vscode-typescript-next"` allows us to use the `satisfies` syntax in TypeScript 4.9 before its release.

# 3D Models
You can search models through websites such as [sketchfab](https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=7c23a1ba438d4306920229c12afcb5f9&licenses=b9ddc40b93e34cdca1fc152f39b9f375&type=models).
There are a few things to note:
- We should **not** use 3D models with the **ND license** ("modified versions can not be distributed") because we can't tweak their material to fit it to the game theme.
- The model size should be less than 500KB if possible, and less than 5MB at maximum. On GitHub Pages, 3MB takes around 1 second to load. We don't want to make users wait for minutes before starting the game.
- You can put the downloaded models in `public/models/foobar.glb` and these files can be accessed as `./models/foobar.glb` [because vite copies files in the `public/` directory to the root directory](https://vitejs.dev/guide/assets.html#the-public-directory).

# Directory Structure
| Path | Purpose |
|-|-|
| src/main.ts | The entry point and the main game/render loop |
| src/debug.tsx | exports debugging components that should be removed in production. |
| src/saveData.ts | exports the centralized store of the game state. |
| src/dom/ | Preact components |
| src/webgl/ | Three.js components |
| src/stages/ | Stages |

## How can I add a stage?
Just add a file `<id>_<name>.ts` in src/stages/.

## How can I add enemies to a stage?
1. Download the 3D model for the enemy to public/models/.
2. Add the copyright notice of the 3D model to `public/models/credit.html`.
3. Load the file in `createEnemyPools` in `src/stages/....ts`. We need two models, one alive and one dead.

## How can I add a weapon?
1. Update `upgradeNames` in `constants.tsx`.
2. Add `src/weapons/<name>.ts`.
3. Fix type errors.

# Using Shaders through Three.js
src/webgl/createFog.ts has the most simple shader material. You can learn about the shading in Three.js by reading it and [the documentation of ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial).

Note that `transparent: true` is required to draw semi-transparent objects, and the drawing order of semi-transparent objects is determined by the meshs' [`renderOrder`](https://threejs.org/docs/#api/en/core/Object3D.renderOrder).

# State Management
All state is managed in the [zustand](https://github.com/pmndrs/zustand) store. We don't use ordinary (global) variables to store the game state because that way we don't have to reimplement an integration to react hooks and a mechanic for data persistence that zustand supports.

```typescript
const store = create<{
    foo: number,
    bar: number,
    setFoo: (value: number) => void, // NOTE: We have a utility function `defineActions` to eliminate the need to write this line in util.ts
}>()(persist(immer((set) => ({
    foo: 1,
    bar: 2,
    setFoo: (value) => { set((d) => { d.foo += 10 }) }, 
})), {
    name: "sample-store",  // the name of the store, that is used as a key for the localStorage
}))
store.getState().foo  // 2
store.getState().setFoo(5)
store.setState((d) => { d.foo = 5 }) // Using setState is discouraged, because it makes it difficult to add code to run when the value changes. (You can also use subscribe(), but it obfuscates the execution order.)
store.subscribe((state, prev) => {
    if (state.foo === prev.foo) { return }
    // ... code to run when `foo` is changed
})
```

# Main Game Loop
1. Repeat a number of times proportional to the time elapsed since the previous frame:
   1. Spawn enemies
   2. Move enemies
   3. `onUpdate` event
   4. `onCollisionDetection` event
   5. Delete enemies
   6. Animate dead enemies
   7. Update the autopilot algorithm
   8. Tick the weather system
2. if not `powerSaveMode`:
   1. `onBeforeRender` event
   2. Move camera
   3. `onPreprocess` event
   4. render()

# codegen.js
`codegen.js` is run before every build and updates `src/weapons/index.ts`, `src/stages/index.ts`, and `src/webgl/index.ts`.

# Cheating
The store in `saveData.ts` is set to a property of `window` so that you can modify its value from the [dev tools](https://developer.chrome.com/docs/devtools/open/) console.

```typescript
store.getState().addMoney(10000)
```

# Cross-Browser Support
Currently we are targeting only Chrome because current Firefox (107.0) doesn't support
- Nested `backdrop-filter`: A child element's `backdrop-filter` incorrectly overrides the parent element's `backdrop-filter` in Firefox. You can see difference at top-left window on Chrome and Firefox.
- Animating `dialog::backdrop`: `transition` in `dialog::backdrop` doesn't work in Firefox. 

However, in regard to `-webkit-text-stroke` Firefox does better job than Chrome. You can't read the text when you select text in the `Credits` dialog in Chrome, but you can in Firefox. Also, the scrollbar is prettier in Firefox.
