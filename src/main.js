import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import directive from '@/directive/index'
import 'normalize.css'
import '@/styles/index.less'
import '@/assets/fonts/iconfont.js'
import http from '@/utils/http'
import api from '@/api/index'

// globalComponent 
import SvgIcon from '@/components/svgIcon'// svg组件
Vue.component(SvgIcon.name, SvgIcon)

Vue.use(Antd)
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