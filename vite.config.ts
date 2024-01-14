import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), Vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
