import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import directive from '@/directive/index'
import 'normalize.css'
import '@/styles/index.less'
import http from '@/utils/http'
import api from '@/api/index'

Vue.use(iView,{
  transfer: true,
  size: 'large',
})
Vue.use(http)
Vue.use(api)

Object.keys(directive).forEach((key) => {
  Vue.directive(key, directive[key])
})

/**
 * message bus
 */
Vue.prototype.$bus = new Vue() 
new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
