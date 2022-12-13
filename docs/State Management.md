# State Management
All state is managed in the [zustand](https://github.com/pmndrs/zustand) store. We don't use ordinary (global) variables to store the game state because that way we don't have to reimplement an integration to react hooks and a mechanic for data persistence that zustand supports.

```typescript
const store = create<{
    foo: number,
    bar: number,
    setFoo: (value: number) => void, // NOTE: We have a utility function `defineActions` to eliminate the need to write this line in util.ts
}>()(persist((set) => ({
    foo: 1,
    bar: 2,
    setFoo: (value) => { set({ foo: get().foo + 10 }) }, 
}), {
    name: "sample-store",  // the name of the store, that is used as a key for the localStorage
}))
store.getState().foo  // 2
store.getState().setFoo(5)
store.setState({ foo: 5 }) // Using setState is discouraged, because it makes it difficult to add code to run when the value changes. (You can also use subscribe(), but it obfuscates the execution order.)
store.subscribe((state, prev) => {
    if (state.foo === prev.foo) { return }
    // ... code to run when `foo` is changed
})
```

zustand has an [immer](https://github.com/immerjs/immer) support but we don't use it because it runs slow for game development.
