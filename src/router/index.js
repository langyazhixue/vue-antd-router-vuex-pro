import VueRouter from 'vue-router'
import Vue from 'vue'
import AppLayout from '@/views/layout/index'
import { pathParameterToJson } from '@/utils/url'
import componentsRouter from './modules/components'
import nestedRouter  from './modules/nested'
Vue.use(VueRouter)

/**
 * hidden: true      if `hidden:true` will not show in the sidebar(default is false) 
 * meta :{
 *  title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
 * }
*/
export const constantRouterMap = [
  {
    path: '/login',
    component:() => import('@/views/login/index'),
    name:'Login',
    hidden: true
  },
  {
    path:'/',
    redirect:'/dashboard',
    hidden: true
  },
  {
    path:'',
    component:AppLayout ,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'DashBoard',
        meta: { title: '首页', icon: 'iconshiyongwendang'}
      }
    ],
  },
  {
    path:'/documentation',
    component: AppLayout,

    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'Documentation',
        meta: { title: '文档', icon: 'iconshiyongwendang'}
      }
    ],
  },
  {
    path:'/guide',
    component: AppLayout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: '引导页', icon: 'iconshiyongwendang'}
      }
    ],
  },
  {
    path: '/icon',
    component: AppLayout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/svgIcons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'iconshiyongwendang'}
      }
    ]
  },
  componentsRouter,
  nestedRouter,
  {
    path: '*',
    component: () => import('@/views/404/index'),
    name: 'errPage',
    hidden:true
  }
]

const router = new VueRouter({
  mode: "hash",
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
