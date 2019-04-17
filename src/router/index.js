import VueRouter from 'vue-router'
import Vue from 'vue'
import Layout from '@/views/layout/index'
import { pathParameterToJson } from '@/utils/url'
Vue.use(VueRouter)
const constantRouterMap = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component:() => import('@/views/login/index'),
  },
  {
    path: '*',
    component: () => import('@/views/404/index'),
    name: 'errPage'
  }
]

const router = new VueRouter({
  mode: "history",
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) { // 如果路径中有哈希值，就采用锚点定位 // 在history情况下
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) { // 如果路由元信息中存在参数，对参数做进一步判断（此示例代表滚动到顶部）
        position.x = 0
        position.y = 0
      }
      return position
    }
  },
  parseQuery(query){
    let res = {}
    if(query) {
      res = pathParameterToJson(query)
    }
    return res
  }
})
export default router
