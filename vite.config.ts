import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    'process.env.VITE_DEV_SERVER_URL': JSON.stringify(process.env.VITE_DEV_SERVER_URL),
  }
})
