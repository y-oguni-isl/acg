1. https://nodejs.org/en/download/
2. ```shell
   corepack enable
   corepack prepare pnpm@7.15.0 --activate
   pnpm i

   pnpm start
   # or
   pnpm build
   python3 -m http.server --directory dist
   ```

I highly recommend using VSCode for development and installing the extensions listed in .vscode/extensions.json.
