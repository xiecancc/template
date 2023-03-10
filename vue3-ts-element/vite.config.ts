import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { extname, resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

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
  ],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: '',
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
        //   // 将vant抽离出来
        //   if (file.includes('node_modules') && file.includes('@vant')) {
        //     return 'vant';
        //   }
        // },
      },
    },
  },
});
