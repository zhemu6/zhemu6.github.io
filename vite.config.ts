import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Relative base path for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        // Manual chunking to split large files and group dependencies
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'markdown': ['markdown-it', 'highlight.js/lib/core'],
        }
      }
    },
    // Increase chunk size limit warning
    chunkSizeWarningLimit: 1000
  }
})
