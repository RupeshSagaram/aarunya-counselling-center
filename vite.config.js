import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // The Tailwind plugin scans our files for class names and generates only the CSS we actually use.
  plugins: [react(), tailwindcss()],
})
