// 实现一个复制文件夹下面所有文件的功能

const readline = require('readline')
const fs = require('fs')
const path = require('path')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
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
    // 读取目录
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

function start() {
  rl.question('请输入目录名称:', (dirName) => {
    if (!dirName) {
      console.log('目录不能为空')
      start()
    } else if (fs.existsSync(`./${dirName}`)) {
      console.log('目录已经存在')
      rl.close()
    } else {
      fs.mkdir(`./${dirName}`, function(err) {
        if (err) {
          rl.close()
          return console.log(err)
        }
        copyFolder('./copySrc', `./${dirName}`, function(err) {
          if (err) {
            return
          }
          // continue
        })
        copyFile()
        rl.close()
      })
    }
  })
}

start()
