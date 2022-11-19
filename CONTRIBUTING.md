# How to Build The Project

1. [Install Node.js](https://nodejs.org/en/download/)
2. ```shell
   corepack enable
   corepack prepare pnpm@7.15.0 --activate
   pnpm i

   pnpm start
   # or
   pnpm build
   python3 -m http.server --directory dist
   ```

I highly recommend using VSCode with the extensions listed in `.vscode/extensions.json` for development.

# 3D Models
You can search models through websites such as [sketchfab](https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=7c23a1ba438d4306920229c12afcb5f9&licenses=b9ddc40b93e34cdca1fc152f39b9f375&type=models).
- Avoid ND licenses: We should avoid using 3D models with the ND ("modified versions can not be distributed") license because we can't tweak their material to fit it to the game theme.
- Choose smaller models: The model size should be less than 500KB if possible, and less than 5MB at maximum. On GitHub Pages, 3MB takes around 1 second to load. We don't want to make users wait for minutes before starting the game.
- You can put the downloaded models in `public/models/foobar.glb` and these files can be accessed as `./models/foobar.glb` [because vite copies files in the `public/` directory to the root directory](https://vitejs.dev/guide/assets.html#the-public-directory).

# Directory Structure
| Path | Purpose |
|-|-|
| src/main.ts | The entry point and the main game/render loop |
| src/debug.tsx | exports debugging components that should be removed in production. |
| src/saveData.ts | exports the centralized store of the game state. |
| src/dom/ | Preact components |
| src/webgl/ | Three.js objects |

## How can I add a stage?
1. Add the map name to `stageNames` in `saveData.ts`.
2. Fix all type errors.

## How can I add enemies to a stage?
1. Download the 3D model for the enemy to public/models/.
1. Add the copyright notice of the 3D model to `public/models/credit.html`.
2. Load the file as object pools at `// Parallel download` in `main.ts`. We need two models, one alive and one dead.
3. Add the object pools to the arrays `enemiesAlive` and `enemiesDead` in `main.ts`.
4. Define the spawning condition of the enemy at `// Spawn enemies` in `main.ts`.

# Using Shaders through Three.js
src/webgl/createFog.ts has the most simple shader material. You can learn about the shading in Three.js by reading it and [the documentation of ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial).

Note that `transparent: true` is required to draw semi-transparent objects, and the drawing order of semi-transparent objects is determined by the meshs' [`renderOrder`](https://threejs.org/docs/#api/en/core/Object3D.renderOrder).

# State Management
All state is managed in the [zustand](https://github.com/pmndrs/zustand) store. We don't use ordinary (global) variables to store the game state because that way we don't have to reimplement an integration to react hooks and a mechanic for data persistence that zustand supports.

```typescript
const store = create<{
    foo: number,
    bar: number,
    setFoo: (value: number) => void,
}>()(persist(immer((set) => ({
    foo: 1,
    bar: 2,
    setFoo: (value) => { set((d) => { d.foo = value }) },
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

# Cheating
The store in `saveData.ts` is set to a property of `window` so that you can modify its value from the [dev tools](https://developer.chrome.com/docs/devtools/open/) console.

```typescript
store.addMoney(10000)
```
