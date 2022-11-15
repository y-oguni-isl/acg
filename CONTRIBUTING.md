# 3D Models
You can search models through websites such as https://sketchfab.com/search?features=downloadable&licenses=322a749bcfa841b29dff1e8a1bb74b0b&licenses=7c23a1ba438d4306920229c12afcb5f9&licenses=b9ddc40b93e34cdca1fc152f39b9f375&type=models
- Avoid ND licenses: We should avoid using 3D models with the ND ("modified versions can not be distributed") license because we can't tweak their material, and I don't know if it's okay to put them in the github repository.
- Choose smaller models: The model size should be less than 500KB if possible, and less than 5MB at maximum. On GitHub Pages, 3MB takes around 1 second to load.
- You can put the downloaded models in `public/models/foobar.glb` and these files can be accessed as `./models/foobar.glb` [because vite copies files in the `public/` directory to the root directory](https://vitejs.dev/guide/assets.html#the-public-directory).

# Cheating
The `store` in `saveData.ts` is set to a property of `window` so that you can modify its value from the dev tools console.

```typescript
store.setState({ money: 100 })
```

## Directory Structure
| Path | Purpose |
|-|-|
| src/main.ts | The entry point and the main game/render loop |
| src/debug.tsx | exports debugging components that should be removed in production. |
| src/saveData.ts | exports the centralized store of the game state. |
| src/dom/ | Preact components |
| src/webgl/ | Three.js objects |
