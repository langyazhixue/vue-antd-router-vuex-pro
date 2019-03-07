'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
function resolve(dir) {
  return path.join(__dirname,'..',dir)
}
const HOST = process.env.HOST
const PORT = process.env.POPRT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules:utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true, // 任意的404 都可能需要被替代为index.html
    hot: true,
    compress: true,
    inline:true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    overlay: config.dev.errorOverlay
      ? { warnings:false, errors:true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      poll:config.dev.poll
    }
  },
  plugins:[
    //  定义环境变量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env') 
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      inject:true,
      favicon:resolve('favicon.ico'),
      title: config.dev.assetsPublicPath + config.dev.assetsSubDirectory
    })
  ]
})

module.exports =  new Promise((resolve,reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err,port) => {
   if(err) {
     reject(err)
   } else {
     process.env.PORT = port
     devWebpackConfig.devServer.port = port
     devWebpackConfig.plugins.push(
       new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: ${
            config.dev.https ? 'https' : 'http'}://${
            config.dev.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined,
        clearConsole: true,
       })
     )
     resolve(devWebpackConfig)
   } 
  })
})