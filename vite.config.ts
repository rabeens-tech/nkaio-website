import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [
    react(),
    tailwindcss()
  ],
  build:{
    outDir: 'docs',
    emptyOutDir: true, 
  },
  // base:"/nkaio-website/",
  base: mode === 'production' ? '/nkaio-website/' : '/',

  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'), 
    },
  },
}))
