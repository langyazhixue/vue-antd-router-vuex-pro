import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import directive from '@/directive/index'
import 'normalize.css'
import '@/styles/index.less'
import http from '@/utils/http'

Vue.use(iView)
Vue.use(http)
Object.keys(directive).forEach((key) => {
  Vue.directive(key, directive[key])
})
new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
