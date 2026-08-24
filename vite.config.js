import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'

export default defineConfig({
  base: '/portfolios/',
  plugins: [
    react(),
    {
      name: 'spa-github-pages',
      closeBundle() {
        if (existsSync('dist/index.html')) {
          copyFileSync('dist/index.html', 'dist/404.html')
        }
      },
    },
  ],
})
