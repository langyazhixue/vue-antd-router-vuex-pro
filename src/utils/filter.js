

const path = require('path')


function filterFilterRouter(routerArrayPure) {
  let res = []
  routerArrayPure.map(item => {
    if(item.children.length === 1) {
      if(!item.children[0].children || item.children[0].children.length ===0) {
        res.push({
          meta:item.children[0].meta,
          key:item.children[0].key,
          path: path.resolve(item.path,item.children[0].path)
        })
      } else {
        res.push(item)
      }
    } else {
      res.push(item)
    }
  })
  return res
}
export function filterRouter(router) {
  // 菜单目前只有2层
  let res = []
  router.forEach(item => {
    if(!item.hidden && item.children && item.children.length > 0) {
      res.push(item)
    }
  })
  return filterFilterRouter(res)
}