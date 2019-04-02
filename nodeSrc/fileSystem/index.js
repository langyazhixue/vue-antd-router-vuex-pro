// 文件系统

var fs = require('fs')
// // 读取文件 fs.readFile() // 异步读取，有回调函数

// //
// fs.readFile('input.txt', function(err, data) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('异步读取' + data.toString())
// })

// // 同步读取 fs.readFileSync

// var data = fs.readFileSync('input.txt', 'utf8')
// console.log('同步读取' + data.toString())

// // 打开文件

// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功！')
// })

// // 获取文件信息,读取文件状态
// // 语法

// fs.stat('input.txt', function(err, stats) {
//   console.log(err)
//   console.log(stats)
//   console.log(stats.size) // 获取文件的大小
//   console.log('最后一次访问的时间:' + stats.atime.toLocaleString()) // 获取文件最后一次访问的时间
//   console.log('最后创建的时间:' + stats.birthtime.toLocaleString()) // 文件创建的时间
//   console.log('文件最后一次修改时间:' + stats.mtime.toLocaleString()) // 文件最后一次修改时间
//   console.log(stats.isFile()) // 判断是否是目录
//   console.log(stats.isDirectory()) // 判断是否是文件
// })

// // 写入文件
// fs.writeFile('output.txt', '我是通过fs.writeFile写入文件的内容', function(err) {
//   if (err) {
//     return console.error(err)
//   }
// })

//  读取文件 先open ,在 read

// console.log('fdsfds')
// const buf = Buffer.from('runoob', 'ascii')
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'))

// const buf1 = Buffer.alloc(10)
// buf1.write('test', 0, 'utf8')
// console.log(buf1.toString('utf8'))

// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功！')
//   console.log('准备读取文件')
//   fs.read(fd, 0, buf.length, 0, function(error, bytes) {
//     if (error) {
//       console.log(error)
//     }
//     console.log(bytes + '  字节被读取')
//     // 仅输出读取的字节
//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString())
//     }

//     // 关闭文件
//     fs.close(fd, function(err) {
//       if (err) {
//         console.log(err)
//       }
//       console.log('文件关闭成功')
//     })
//   })
// })
var buf = Buffer.alloc(10)
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err)
  }
  console.log('文件打开成功！')
  console.log('准备读取文件！')
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
      console.log(err)
    }

    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }

    // 关闭文件
    fs.close(fd, function(err) {
      if (err) {
        console.log(err)
      }
      console.log('文件关闭成功')
    })
  })
})

