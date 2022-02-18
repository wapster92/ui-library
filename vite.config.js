import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import ElementPlus from 'unplugin-element-plus/vite';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/library/index.js'),
      name: 'UI',
      fileName: format => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), svgLoader(), ElementPlus() /*eslintPlugin()*/],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src/library'),
    },
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
});
