```shell
corepack enable
corepack prepare pnpm@7.14.2 --activate
pnpm i
pnpm start

# or
pnpm build
python3 -m http.server --directory dist
```

TODO:
- blending (Raw)ShaderMaterial and imported objects is hard, so it might be better to fix the camera top-down and overlay the shaders.
