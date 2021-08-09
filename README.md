# Preact Webext

A [Vite](https://vitejs.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.) starter template with Preact.

## Credits

This boilerplate is a shameless fork of [antfu/vitesse-webext](https://github.com/antfu/vitesse-webext). You can say that I have just forked, edited a few lines and pushed.

oops, I haven't even changed the Readme :p

## Features

- ⚡️ **Instant HMR** - use **Vite** on dev (no more refresh!)
- ⚛ Preact - For my comfort!
- 💬 Effortless communications - powered by [`webext-bridge`](https://github.com/antfu/webext-bridge)
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others
- 📃 Dynamic `manifest.json` with full type support

## Pre-packed

### WebExtension Libraries

- [`webextension-polyfill-ts`](https://github.com/Lusito/webextension-polyfill-ts) - WebExtension browser API Polyfill with types
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - effortlessly communication between contexts

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [tsup](https://github.com/egoist/tsup) - Zero config TypeScript bundler powered by esbuild
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - Run multiple npm-scripts in parallel or sequential

## Use the Template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/PiyushSuthar/preact-webext/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

> If you don't have pnpm installed, run: npm install -g pnpm

```bash
npx degit piyushsuthar/preact-webext my-webext
cd my-webext
pnpm i
```

## Usage

### Folders

- `views` - frontend for the extension (popup, options and new-tab).
- `src` - background scripts and content scripts.
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root, also holds assets.
- `scripts` - development helper scripts.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**,

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`.
