import router from '@/router/index'
import NProgress from 'nprogress'
import store from './store'
import 'nprogress/nprogress.css'
NProgress.configure({
  minimum: 0.05,
  easing: 'ease',
  speed: 600,
  showSpinner: false
})
const whiteList = ['/login'] // 无需令牌白名单
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 获取令牌判断用户是否登陆
  const hasToken = localStorage.getItem('token')
  if (hasToken) {
    if (to.path === 'login') {
      next({ path: '/' })
    } else {
      // 去其他路由
      // 接下来执行用户角色逻辑，todo
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')
          const accessedRoutes = await store.dispatch('permission/generateRoutes', {
            roles
          })
          router.addRoutes(accessedRoutes)
          // 路由再进来一次
          next({ ...to })
        } catch (error) {
          await store.dispatch('user/resetToken')
          next()
          // 出错需要重置领跑并重新登陆(令牌过期，网络错误等原因)
          // next({
          //   path: '/login',
          //   query: {
          //     redirect: to.path
          //   }
          // })
          // alert(error || '未知错误')
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  }
})
router.afterEach((to, from, next) => {
  NProgress.done()
})
