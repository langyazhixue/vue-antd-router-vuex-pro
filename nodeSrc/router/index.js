
var url = require('url') // node url 模块
var http = require('http')
function start() {
  function onRequest(request, response) {
    console.log(url.parse(request.url))
    console.log(url.parse(request.url, true)) // 会把query 转成对象
    var pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + ' received.')
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Hello World')
    response.end()
  }
  http.createServer(onRequest).listen(8888)
  console.log('Server has started.')
}
start()

