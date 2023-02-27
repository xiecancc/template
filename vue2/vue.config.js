const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     // 对以 /api 开头的请求，启用跨域
  //     '/api': {
  //       target: '', // 跨域目标
  //       changeOrigin: true, // 改变域名
  //       pathRewrite: {
  //         '^/api': '', // 在实际请求中去掉 /api
  //       },
  //     },
  //   },
  // },
});
