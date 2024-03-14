import { fileURLToPath, URL } from 'node:url'
import vitePluginRequire from "vite-plugin-require";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default()
  ],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000/'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
