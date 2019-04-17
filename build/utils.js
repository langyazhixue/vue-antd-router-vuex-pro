 'use strict'
 const path = require('path')
 const config = require('../config')
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
  const postCssLoader = {
    loader:'postcss-loader',  // 添加css前缀
    options:{
      sourceMap:options.sourceMap
    }
  }

  // generate loader string  to be used width extract text plugin 

  function generateLoaders(loader,loaderOptions) {
    const loaders = []

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if(options.extract) {
      loaders.push(MiniCssExtractPlugin.loader)  // webpack4得使用mini-css-extract-plugin这个插件来单独打包css
    } else {
      loaders.push('vue-style-loader')
    }
    loaders.push(cssLoader)
    if(options.usePostCSS){
      loaders.push(postCssLoader)
    }
    if(loader) {
      loaders.push({
        loader:loader+'-loader',
        options:Object.assign({},loaderOptions,{
          sourceMap:options.sourceMap
        })
      })
    }
    return loaders
  }
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return  {
    css:generateLoaders(),
    postcss:generateLoaders(),
    less:generateLoaders('less',{
      javascriptEnabled: true 
    }),
    sass:generateLoaders('sass',{
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus:generateLoaders('stylus'), //webpack的stylus-loader来将stylus语言转化为原生css
  }
 }

 exports.styleLoaders = function(options){
   const output = []
   const loaders = exports.cssLoaders(options)
   for(const extension in loaders) {
     const loader =loaders[extension]
     output.push({
       test: new RegExp('\\.' + extension + '$'),
       use:loader
     })
   }
   return output
 }
 exports.createNotifierCallback = () => {
   const notifier = require('node-notifier') 
   return (severity,errors) => {
       if(severity !=='error') return
       const error = errors[0]
       const filename = error.file && error.file.split('!').pop()
      notifier.notify({
        title: packageConfig.name,
        message: severity + ':' + error.name,
        subtitle: filename || '',
        icon:path.join(__dirname,'logo.png')
      })
   }
 }