1. https://nodejs.org/en/download/
2. ```shell
   corepack enable
   corepack prepare pnpm@7.14.2 --activate
   pnpm i

   pnpm start
   # or
   pnpm build
   python3 -m http.server --directory dist
   ```