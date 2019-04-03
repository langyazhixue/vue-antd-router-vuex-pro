// process 是一个全局变量

// 描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口，通常在你写本地命令程序的时候有用

// process.on('exit', function(code) {
//   // 以下代码永远不会执行
//   setTimeout(function() {
//     console.log('该代码不会执行')
//   }, 0)
//   console.log('退出码为:', code)
// })
// console.log('程序执行结束')
// Signal 事件
// 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。

var url = require('url') // node url 模块
var http = require('http')
// function start() {
//   function onRequest(request, response) {
//     console.log(url.parse(request.url))
//     console.log(url.parse(request.url, true)) // 会把query 转成对象
//     var pathname = url.parse(request.url).pathname
//     console.log('Request for ' + pathname + ' received.')
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello World')
//     response.end()
//   }

//   http.createServer(onRequest).listen(8888)
//   console.log('Server has started.')
// }
// start()

// process.on('SIGINT', function() {
//   console.log('test')
// })

// stdout 标准输出流
process.stdout.write('test' + '\n')

// argv // argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。

// process.stdin  输入流
console.log(process.argv)

// execArgv  返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数。

console.log(process.execArgv)

// env 返回一个对象，成员为当前 shell 的环境变量
console.log(process.env)

// version 一个属性，包含了 node 的版本和依赖.

// config 以个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。

// pid 当前进程的进程号

// .abort()
console.log(process.pid)

// arch // 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'
console.log(process.arch)
// platform 运行程序所在平台系统 'darwin'

// 方法 process 提供了很多方法，便于我们更好的控制系统的交互

// abort 这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。

//  chdir(directory)  // 改变当前工作进程的目录

// var fs = require('fs')
// try {
//   process.chdir('../globalVar/')
//   var writeStream = fs.createWriteStream('input.txt')
//   writeStream.write('test', 'utf8')
// } catch (err) {
//   console.error('chdir: ${err}')
// }

// cwd() 返回当前进程的工作目录

process.stdout.write(process.cwd() + '\n', 'utf8')

// kill(pid[,signal])  发送信号给进程. pid 是进程id，并且 signal 是发送的信号的字符串描述。信号名是字符串，比如 'SIGINT' 或 'SIGHUP'。如果忽略，信号会是 'SIGTERM'。

// process.kill('385')
// nextTick(callback)

// stdin  // 标准输入流，初始时是被暂停的状态。想要输入数据，首先必须恢复流，并手动编写流事件的响应函数
process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`)
  }
})

process.stdin.on('data', (data) => {
  process.stdout.write(`data: ${data}`)
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
