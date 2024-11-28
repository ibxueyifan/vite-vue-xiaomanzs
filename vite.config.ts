import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path';

import AutoImport from 'unplugin-auto-import/vite';
import { PostCssPx2ViewPort } from './plugins/post-css-px2viewport';
// https://vite.dev/config/
export default ({ mode }: any) => {
  console.log(loadEnv(mode, process.cwd())); //控制台可看到  {VITE_HTTP: 'XXXX'}
  return defineConfig({
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
    },
    server: {
      // dev环境才需要
      proxy: {
        'api': {
          target: 'xx',
          rewrite: (path)=>path.replace(/^\/api$/, '')
        }
      }
    }
  })
}
