// querystring 从字面砂锅的意思就是查询字符串，一般是对http请求所带的数据进行解析
const querystring = require('querystring')

// parse(str,separator,eq,options) 这个方法是将一个字符串反序列化为一个对象。
console.log(querystring.parse('name=whitemu&sex=man&sex=women'))

// querystring.stringify(obj,separator,eq,options)
// stringify这个方法是将一个对象序列化成一个字符串

console.log(querystring.stringify({ name: 'whitemu', sex: ['man', 'women'] }))
