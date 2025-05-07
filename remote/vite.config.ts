import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 // plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'], // 👈 Important!
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      external: ['react', 'react-dom'], // avoid bundling to share instance
    },
  },
  server: {
    port: 4905,
    strictPort: true,
    cors: {
      origin: '*', // Allow requests only from this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
      credentials: true, // Enable credentials if needed
    }
  }

})
