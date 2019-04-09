import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import App from './App'
import directive from '@/directive/index'
import '@/styles/index.scss'
import store from './store'
import  './permission'
import http from '@/utils/http'
// import Test from '@/plugins/test'
Vue.use(Element)
Vue.use(http)
// Vue.use(Test)
// 注册指令
Object.keys(directive).forEach((key) => {
  Vue.directive(key, directive[key])
})
// Vue.myGlobalMethod()
new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
