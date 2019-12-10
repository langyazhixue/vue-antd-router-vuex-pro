const port = 7070
const title = 'vue项目实战'
module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port
  },
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    name: title
  }
}
