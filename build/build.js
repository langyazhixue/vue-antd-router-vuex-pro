'use strict';
const ora = require('ora') // 要用来实现node.js命令行环境的loading效果,和显示各种状态的图标等
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const connect = require('connect')
var serveStatic = require('serve-static')

const spinner = ora(
  'building for ' + 'production'
)
spinner.start()

// rimraf 删除 目录内容听
rm(path.join(config.build.assetsRoot),err => {
  if(err) {
    throw err
  }
  webpack(webpackConfig,(err,stats) => {
    spinner.stop()
    process.stdout.write(
      stats.toString({
        colors:true,
        modules:false,
        children:false,
        chunks:false,
        chunkModules:false,
      }) + '\n\n'
    )
    if(stats.hasErrors()) {
      console.log(chalk.red(' Build failed width errors.\n'))
      process.exit(1)
    }
    console.log(chalk.cyan(' Build complete.\n '))
    console.log(
      chalk.yellow(
        ' Tip: built files are meant to be serve over an HTTP server.\n' + 
        " Opening index.htm over file:// won't work.\n"
      )
    )
    if(process.env.npm_config_preview) {
      const port = 9526
      const host = 'http://localhost:' + port
      const basePath = config.build.assetsPublicPath
      const app = connect()
      app.use(
        basePath,
        serveStatic('./dist', {
          index: ['index.html', '/']
        })
      )
    }
  })
})