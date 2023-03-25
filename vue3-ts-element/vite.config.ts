import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { extname, resolve } from 'path';
// 按需导入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// CDN加速
// import { Plugin as ImportFromCDN } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
    //     {
    //       name: 'element-plus',
    //       var: 'ElementPlus',
    //       path: '//unpkg.com/element-plus',
    //       css: '//unpkg.com/element-plus/dist/index.css',
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
        rewrite: (path) => path.replace(/^\/api/, ''),
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
        assetFileNames(chunkInfo) {
          // 获取资源文件扩展名
          const ext = extname(chunkInfo.name).toLowerCase();
          // 处理图片资源
          if (['.webp', '.png', '.jpg', '.jpeg', '.gif', '.tpg'].includes(ext)) {
            return 'imgs/[name].[hash].[ext]';
          }
          // 其他资源
          return '[ext]/[name].[hash].[ext]';
        },
        // 创建自定义共享公共块
        // manualChunks(file) {
        //   // 将element-plus抽离出来
        //   if (file.includes('node_modules') && file.includes('@element-plus')) {
        //     return 'element-plus';
        //   }
        // },
      },
    },
  },
});
