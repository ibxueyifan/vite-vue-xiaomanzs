import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

import AutoImport from 'unplugin-auto-import/vite';
import { PostCssPx2ViewPort } from './plugins/post-css-px2viewport';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue'],
    dts: './src/auto-imports.d.ts',
  })],
  css: {
    postcss: {
      plugins: [
        PostCssPx2ViewPort()
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
