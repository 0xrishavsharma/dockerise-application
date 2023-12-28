import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // we need to define on which port our application will run when we'll execute "yarn preview"
  // and using host: true will allow us to access our application from other devices on the same network
  preview: {
    host: true,
    port: 8080
  }
})
