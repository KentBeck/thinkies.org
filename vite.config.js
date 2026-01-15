import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: '/twc_website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
