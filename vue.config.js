const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/ceres': {
        target: 'https://www.simonland.me',
        changeOrigin: true,
        pathRewrite: { '^/ceres/api': '/ceres/api' }
      }
    },
    port: 8000
  }
});