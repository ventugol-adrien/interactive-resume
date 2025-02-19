import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
  },
  server: {
    allowedHosts: ["interactive-resume-963898814835.europe-west1.run.app","localhost"],
    host: '0.0.0.0',
    port: 8080
  }
})
