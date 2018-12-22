 'use strict'
 const path = require('path')
 const config = reuqire('../config')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 const packageConfig = require('../package.json')

 // 资源路径函数
 exports.assetsPath = function(_path){
  const assetsSubDirectory = 
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory,_path)
 }

 exports.cssLoaders = function(options) {
  options = options || {}
  const cssLoader = {
    loader:'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
 }