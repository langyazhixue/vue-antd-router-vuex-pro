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

// writeFile(file,data[,options],callback) // writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
// fs.writeFile('output.txt', '我是通过fs.writeFile写入文件的内容', function(err) {
//   if (err) {
//     return console.error(err)
//   }
// })
// 读取文件 先open ,在 read

// console.log('fdsfds')
// const buf = Buffer.from('runoob', 'ascii')
// // 输出 72756e6f6f6909090898
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
// var buf = Buffer.alloc(10)
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功！')
//   console.log('准备读取文件！')
//   fs.ftruncate(fd, 5, function(err) { // 通过截取文件来给读
//     if (err) {
//       console.log(err)
//     }
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//       if (err) {
//         console.log(err)
//       }
//       // 仅输出读取的字节
//       if (bytes > 0) {
//         console.log(buf.slice(0, bytes).toString())
//       }

//       // 关闭文件
//       fs.close(fd, function(err) {
//         if (err) {
//           console.log(err)
//         }
//         console.log('文件关闭成功')
//       })
//     })
//   })
// })

// 关闭文件 fs.close(fd,callback)  // 异步模式下截取文件的语法模式
//
// fs.ftruncate(fd, len, callback)  截取文件

// 删除文件 fs.unlink(path,callback)

// fs.unlink('input.txt', function(err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件删除成功！')
// })

// 创建目录  fs.mkdir(path[, options], callback)
// path - 文件路径。
// options 参数可以是：
// recursive - 是否以递归的方式创建目录，默认为 false。
// mode - 设置目录权限，默认为 0777。
// callback - 回调函数，没有参数。

// fs.mkdir('./temp', function(err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('目录创建成功！')
// })

// recursive:true, 这样可以不管 test/test/q 是否存在

// fs.mkdir('./test/test/q', { recursive: true }, function(err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('目录创建成功！')
// })

//  读取目录
// 语法  fs.readdir(path, callback(err,files)）// files为目录下的文件数组列表
// fs.readdir('./test/', function(err, files) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(files)
// })

// 删除目录 fs.rmdir(path,callback)
// 执行前创建一个空的 `/test/test` 目录  ./test/test  下面应该没有 目录
// fs.rmdir('./test/test/q', function(err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('删除成功')
// })

// fs.exits(path,callback) // 检测给定的路径是否存在

// var fs = require('fs')
var path = require('path')
// 复制文件
var copyFile = function(srcPath, tarPath, cb) {
  // 以流的方式写入
  var rs = fs.createReadStream(srcPath)
  rs.on('error', function(err) {
    if (err) {
      console.log('read error', srcPath)
    }
    cb && cb(err)
  })
  var ws = fs.createWriteStream(tarPath)
  ws.on('error', function(err) {
    if (err) {
      console.log('write error', tarPath)
    }
    cb && cb(err)
  })
  ws.on('close', function(ex) {
    cb && cb(ex)
  })
  rs.pipe(ws) // 用管道复制
}

// 复制目录以及子目录

var copyFolder = function(srcDir, tarDir, cb) {
  fs.readdir(srcDir, function(err, files) {
    var count = 0
    var checkEnd = function() {
      ++count === files.length && cb && cb()
    }
    if (err) {
      checkEnd()
      return
    }
    files.forEach(function(file) {
      var srcPath = path.join(srcDir, file)
      var tarPath = path.join(tarDir, file)

      fs.stat(srcPath, function(err, stats) {
        if (err) {
          return
        }
        if (stats.isDirectory()) {
          fs.mkdir(tarPath, function(err) {
            if (err) {
              console.log(err)
              return
            }
            copyFolder(srcPath, tarPath, checkEnd)
          })
        } else {
          copyFile(srcPath, tarPath, checkEnd)
        }
      })
    })
    // 为空时直接回调
    files.length === 0 && cb && cb()
  })
}

copyFolder('./copySrc', './copyTar', function(err) {
  if (err) {
    return
  }
  // continue
})

