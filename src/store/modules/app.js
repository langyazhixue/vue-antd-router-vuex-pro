
import { constantRouterMap } from '@/router/index'
const app = {
  namespaced: true,
  state:{
    isCollapsed:false,
    routerMap:constantRouterMap // 左边菜单
  },
  mutations:{
    'set-isCollapsed':(state, payload) => {
      state.isCollapsed = payload.isCollapsed
    }
  }
}
export default app