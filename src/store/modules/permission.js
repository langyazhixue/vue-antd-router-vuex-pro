// 1，保存路由表
// 2. 可以过滤出当前用户可访问的路由表
import { constantRouterMap, asyncRoutes } from '@/router/index'

const permission = {
  namespaced: true,
  state: {
    routes: constantRouterMap, // 完整路由表
    addRoutes: [] // 用户可访问路由表
  },
  // getters: {
  //   permission_routes: state => state.routes
  // },
  mutations: {
    'set_routes': (state, payload) => {
      state.addRoutes = payload.routes
      state.routes = constantRouterMap.concat(payload.routes)
    }
  },
  actions: {
    // 路由生成，在得到用户角色后会第一时间调用
    generateRoutes({ commit }, payload) {
      const roles = payload.roles
      return new Promise(resolve => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        commit('set_routes', {
          routes: accessedRoutes
        })
        resolve(accessedRoutes)
      })
    }
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    // 复制一份
    const tmp = { ...route }
    // 如果用户有访问权限则加入结果路由表
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    // 没有设置 roles则无需判定即可访问
    return true
  }
}

export default permission
