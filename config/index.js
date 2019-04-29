'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
const config = require('./prod.env')
const assetPath = config.publishBase.replace(/"/g, '')
module.exports = {
  dev:{
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
    proxyTable:{
      '/user': { // 鉴权系统
        target: 'http://localhost:3000',
        //target: 'http://172.27.39.35:9101',
        changeOrigin: true,
        pathRewrite: {
          // '^/iam': '/iam'
        }
      },
      '/server': { // 鉴权系统
        target: 'http://localhost:3000',
        //target: 'http://172.27.39.35:9101',
        changeOrigin: true,
        pathRewrite: {
          // '^/iam': '/iam'
        }
      }
    },
    // can be overwritten by process.env.HOST
    // if you want dev by ip, please set host: '0.0.0.0'
    host:'0.0.0.0',
    port:9561,
    autoOpenBrowser:true,
    errorOverlay:true,
    notifyOnErrors:true,
    poll:false,
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint:true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorInOverlay:false,
    /**
     * Source Maps
     */
     // https://webpack.js.org/configuration/devtool/#development
     devtool: 'eval-source-map',
     cssSourceMap: false
  },
  build: {
    index:path.resolve(__dirname,'../dist/index.html'),
    assetsRoot:path.resolve(__dirname,'../dist'),
    assetsSubDirectory:'static',
    assetsPublicPath:assetPath,
    /**
     * Source Maps
     */
    productionSourceMap:false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip:false,
    productionGzipExtensions:['js','css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build:prod --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || false,
    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}