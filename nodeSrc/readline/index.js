// readline 逐行读取
// readline 模块提供了一个接口，用于 一次一行的读取`可读流`(例如 process.stdin) 中的数据。

// `readline.Interface` 类的实例是使用 `readline.createInterface()` 方法构造的。
// 每个实例都关联一个 `input` 可读流和一个 `output` 可写流。 `output` 流用于为到达的用户输入打印提示，
// 并从 `input` 流读取。
// 一旦触发 'close' 事件，则 readline.Interface 实例就完成了。
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('你如何看待 Node.js 中文网？', (answer) => {
  // TODO：将答案记录在数据库中。
  console.log(`感谢您的宝贵意见：${answer}`)
  rl.close()
})

// line事件  每当 `input` 流接受到行尾输入(`\n`,`\r`,`\r\n`) 时就会触发‘line’ 这种情况通常发生在当用户按下 <Enter> 键或 <Return>
rl.on('line', (input) => {
  console.log(`接收到：${input}`)
})
