import router from '@/router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  minimum: 0.05,
  easing: 'ease',
  speed: 600,
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from, next) => {
  NProgress.done()
})
