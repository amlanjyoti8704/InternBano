import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss(),
    react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // your backend server port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
