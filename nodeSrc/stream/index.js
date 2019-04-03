
var fs = require('fs')
var zlib = require('zlib')
// 写入流
var data = 'tet'

// 创建一个可以写入的流，写入到文件 output.txt 中 如果文件存在，那么会重新覆盖文件中的数据
// const writerStream = fs.createWriteStream('input.txt')
// writerStream.write(data, 'utf8') // 使用 utf8 编码写入数据
// writerStream.end() // 标记文件末尾
// writerStream.on('finish', function() {
//   console.log('写入完成')

//   // 管道读写操作 读取 input.txt 内容，并将内容写入到 output.txt 中
//   var readerStream = fs.createReadStream('input.txt')
//   var writerStream1 = fs.createWriteStream('output.txt')
//   readerStream.pipe(writerStream1)
//   console.log('程序执行完毕')
// })
// writerStream.on('error', function(err) {
//   console.log(err.stack)
// })

// 管道流 链式流
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制 pipe方法是异步操作
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'))
// console.log('文件压缩完成')

// 解压
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'))
console.log('文件解压完成')
