import { defineConfig } from 'vite'
import react from '@vitejs/plugin-reagit ct'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
