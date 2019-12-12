import VueRouter from 'vue-router'
import Vue from 'vue'
import AppLayout from '@/layout/index'
import { pathParameterToJson } from '@/utils/url'
import study from './modules/study'
Vue.use(VueRouter)

/**
 * hidden: true      if `hidden:true` will not show in the sidebar(default is false)
 * meta :{
 *  title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
 * }
*/

// 基于角色去控制路由
// 常量路由
// 有多个子菜单的就配置 meta:{ title, icon },不然就由子路由的唯一个菜单去配置meta:{title,icon}
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: 'Login',
    hidden: true
  },
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashBoard/index'),
        name: 'DashBoard',
        meta: { title: 'dashboard', icon: 'iconshiyongwendang' }
      }
    ]
  }
]

// 动态路由
export const asyncRoutes = [{
  path: '/documentation',
  component: AppLayout,
  redirect: '/documentation/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/documentation/index'),
      name: 'Documentation',
      meta: {
        title: 'documentation',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
},
{
  path: '/guide',
  component: AppLayout,
  redirect: '/guide/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/guide/index'),
      name: 'Guide',
      meta: {
        title: 'guide',
        icon: 'iconshiyongwendang',
        roles: ['admin', 'editor']
      }
    }
  ]
},
study
]
const router = new VueRouter({
  mode: 'hash',
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
  parseQuery(query) {
    let res = {}
    if (query) {
      res = pathParameterToJson(query)
    }
    return res
  }
})
export default router
