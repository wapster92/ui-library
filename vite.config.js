import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import ElementPlus from 'unplugin-element-plus/vite';
import eslintPlugin from 'vite-plugin-eslint';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/library/index.js'),
      name: 'UI',
      fileName: format => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'vue-router', 'luxon'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'pinia',
          'vue-router': 'vueRouter',
          luxon: 'luxon',
        },
      },
    },
  },
  plugins: [
    peerDepsExternal(),
    vue(),
    svgLoader(),
    ElementPlus({ useSource: true }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src/library'),
    },
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
});
