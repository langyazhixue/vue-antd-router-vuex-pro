const port = 7070
const title = 'vue项目实战'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
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
  },
  // 自定义loader
  chainWebpack(config) {
    // 1. 让已有svgloader排除icons目录
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))
    // 2. 新增svg-sprite-loader
    // 起一个不同的名字
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
