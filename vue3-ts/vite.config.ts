import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { extname, resolve } from 'path';
// import { Plugin as ImportFromCDN } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ImportFromCDN({
    //   // 对模块进行 CDN 加速
    //   modules: [
    //     {
    //       name: 'vue',
    //       var: 'Vue',
    //       path: '//unpkg.com/vue@3.2.45/dist/vue.global.js',
    //     },
    //     {
    //       name: 'vue-router',
    //       var: 'VueRouter',
    //       path: '//unpkg.com/vue-router@4/dist/vue-router.global.js',
    //     },
    //     {
    //       name: 'axios',
    //       var: 'axios',
    //       path: '//unpkg.com/axios/dist/axios.min.js',
    //     },
    //   ],
    // }),
  ],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames(chunkInfo: { name: string }) {
          // 获取资源文件扩展名
          const ext = extname(chunkInfo.name).toLowerCase();
          // 处理图片资源
          if (['.webp', '.png', '.jpg', '.jpeg', '.gif', '.tpg'].includes(ext)) {
            return 'imgs/[name].[hash].[ext]';
          }
          // 其他资源
          return '[ext]/[name].[hash].[ext]';
        },
      },
    },
  },
});
