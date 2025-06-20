![nuxt-ui-minimal-starter-social-card](https://github.com/nuxt-ui-pro/starter/assets/739984/2ab2f391-718f-4188-95db-20b8768bbf9d)

# Nuxt UI Pro - Starter

This starter lets you get started with [Nuxt UI Pro](https://ui.nuxt.com/pro) quickly.

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)

- [Live demo](https://ui-pro-starter.nuxt.dev)
- [Play on Stackblitz](https://stackblitz.com/github/nuxt-ui-pro/starter)
- [Documentation](https://ui.nuxt.com/pro/getting-started)

[![Deploy to NuxtHub](https://hub.nuxt.com/button.svg)](https://hub.nuxt.com/new?repo=nuxt-ui-pro/starter)

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


```
node_modules/@nuxt/ui-pro/modules/pro/index.ts
```

````
nuxt.hook('build:before', async () => {
  await validateLicense({ key, theme, dir: nuxt.options.rootDir })
})
```