// @ts-check
import {defineConfig} from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'

// Shared Astro config for all templates
const BASE = (typeof process !== 'undefined' && process.env?.ASTRO_BASE) || '/'

if (process.env.NODE_ENV === 'production') {
  if (!BASE || BASE === '/') {
    throw new Error('[templates] ASTRO_BASE is required in production builds. Set ASTRO_BASE="/t/<template>/" when building templates.')
  }
}

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'middleware' }),
  // Base path is provided at build time: e.g., /t/<template>/
  base: BASE,
  vite: {
    plugins: [tailwindcss()],
  },
})
