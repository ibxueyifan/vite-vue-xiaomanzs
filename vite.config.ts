import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

import AutoImport from 'unplugin-auto-import/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue'],
    dts: './src/auto-imports.d.ts',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
