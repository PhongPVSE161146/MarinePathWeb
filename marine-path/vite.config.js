import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ thêm dòng này để asset load đúng trên Vercel
  build: {
    chunkSizeWarningLimit: 2000,
  },
})
