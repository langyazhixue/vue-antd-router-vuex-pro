
// 使用node工具库
const { URL } = require('url')

export const pathParameterToJson = function(path) {
  const result = {}
  const paramList = path.split('&')
  paramList.forEach(query => {
    const queryModel = query.split('=')
    result[queryModel[0]] = queryModel[1]
  })
  return result
}

export const getParam = function(oldUrl) {
  const myURL = new URL(oldUrl)
  const params = myURL.searchParams.toString()
  return pathParameterToJson(params)
}
