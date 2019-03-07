'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname,'..',dir)
}

const seen = new Set()
const nameLength = 4

const webpackConfig = merge(baseWebpackConfig,{
  mode: 'production',
  module:{
    rules:utils.styleLoaders({
      sourceMap:config.build.sourceMap,
      extract:true,
      usePostCSS:true
    })
  },
  output:{
    path:config.build.assetsRoot,
    filename:utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename:utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':require('../config/prod.env')
    }),
    new CleanWebpackPlugin(['dist']),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].css')
    }),
    new HtmlWebpackPlugin({
      finame:config.build.index,
      template:'index.html',
      inject:true,
      favicon:resolve('favicon.ico'),
      title:'vue-element-admin',
      path:config.build.assetsRoot + config.build.assetsSubDirectory,
      minify:true // 有默认的配置项
    }),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      const modules = Array.from(chunk.modulesIterable)
      if (modules.length > 1) {
        const hash = require('hash-sum')
        const joinedHash = hash(modules.map(m => m.id).join('_'))
        let len = nameLength
        while (seen.has(joinedHash.substr(0, len))) len++
        seen.add(joinedHash.substr(0, len))
        return `chunk-${joinedHash.substr(0, len)}`
      } else {
        return modules[0].id
      }
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ],
  // 优化配置
  optimization:{
    minimize: true,
    splitChunks:{
      chunks: 'all',
      cacheGroups:{
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: 'chunk-elementUI', // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]element-ui[\\/]/
        },
        commons: {
          name: 'chunk-commons',
            test: resolve('src/components'), // 可自定义拓展你的规则
            minChunks: 3, // 最小公用次数
            priority: 5,
            reuseExistingChunk: true
        }
      }
    },
    runtimeChunk:'single',
    minimizer:[
      new TerserPlugin({
        include:[resolve('src')],
        cache: true,
        parallel: true,
        sourceMap: config.build.sourceMap,
      }),
      // Compress extracted Css, We are useing this plugin so that possible
      // duplicated CSS from different components can be deduped.
      new OptimizeCSSAssetsPlugin()
    ]
  }
})
module.exports = webpackConfig