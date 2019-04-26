
import { constantRouterMap } from '@/router/index'

function filterRoute(routerMap) {
  let res = []
  routerMap.forEach(item => {
    if(item.hidden) {
      if(item.children && item.children.length > 0) {
        item.children = filterRoute(item.children)
      }
      res.push(item)
    }
  })
  return routerMap
}

const app = {
  namespaced: true,
  state:{
    isCollapsed:false,
    routerMap:filterRoute(constantRouterMap) // 左边菜单
  },
  mutations:{
    'set-isCollapsed':(state, payload) => {
      state.isCollapsed = payload.isCollapsed
    }
  }
}
export default app