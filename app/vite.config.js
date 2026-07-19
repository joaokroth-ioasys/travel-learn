import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // /api isn't served by Vite. Proxy it to `vercel dev --listen 3000` running
  // alongside, so local UI dev gets the real functions without the prod CSP
  // (which blocks Vite's inline dev preamble under `vercel dev`).
  server: { proxy: { '/api': 'http://localhost:3000' } },
})
