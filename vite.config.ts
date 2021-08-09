import { resolve } from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

const port = parseInt(process.env.PORT || '') || 3303
const r = (...args: string[]) => resolve(__dirname, ...args)

export default defineConfig(({ command }) => {
  return {
    root: r('views'),
    base: command === 'serve' ? `http://localhost:${port}/` : undefined,
    resolve: {
      alias: {
        '~/': `${r('views')}/`,
      },
    },
    server: {
      port,
      hmr: {
        host: 'localhost',
      },
    },
    build: {
      outDir: r('extension/dist'),
      emptyOutDir: false,
      rollupOptions: {
        input: {
          popup: r('views/popup/index.html'),
          options: r('views/options/index.html'),
          newTab: r('views/new-tab/index.html')
        },
      },
    },
    plugins: [
      preact(),
      // rewrite assets to use relative path
      {
        name: 'assets-rewrite',
        enforce: 'post',
        apply: 'build',
        transformIndexHtml(html) {
          return html.replace(/"\/assets\//g, '"../assets/')
        },
      },
    ],

    optimizeDeps: {
      include: [
        'preact',
      ],
    },
  }
})
