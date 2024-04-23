import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
      
// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    base: '/blog-react/',
    plugins: [react()],
    server: {
      port: 8080,
      hot: true
    },
  }
})
