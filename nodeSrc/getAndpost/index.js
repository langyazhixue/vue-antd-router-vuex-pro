// GET/POST 请求

var http = require('http')
var url = require('url') // url 工具库
var querystring = require('querystring')
var util = require('util')

// 获取get请求内容
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
//   var params = url.parse(req.url, true).query
//   res.write('网站名：' + params.name)
//   res.write('\n')
//   res.write('网站 URL：' + params.url)
//   res.end()
//   // res.end(util.inspect(url.parse(req.url, true)))
//   // /res.end('test')
// }).listen(8000)

// 获取POST请求内容
// POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作

http.createServer(function(req, res) {
  var post = ''
  req.on('data', function(chunk) {
    post += chunk
  })
  req.on('end', function() {
    post = querystring.parse(post)
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end(util.inspect(post))
  })
})
