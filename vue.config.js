const port = 7070
const title = 'vue项目实战'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 服务启在7070，接口调用也在7070，就不存在跨域这个问题

// const bodyParser = require('body-parser')
// const mock = require('./src/mock_local/index')
module.exports = {
  // publicPath: '/best-practice',
  devServer: {
    port,
    proxy: {
      // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
    // before: mock
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
