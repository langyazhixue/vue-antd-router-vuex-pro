
// __filename 表示当前正在执行的脚本的文件名，它将输出文件所在位置的绝对路径

console.log(__filename)

// setTimeout

// setInterval
var data = {
  name: 1,
  data: 2
}
console.time('test')
console.log(data)
console.info(data)
console.warn(data)
console.timeEnd('test')
function test() {
  console.trace()
  console.log(__filename)
}

test()

