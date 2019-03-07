
const URI = require('urijs')


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
  const url = URI(oldUrl)
  return pathParameterToJson(url._parts.query)
}