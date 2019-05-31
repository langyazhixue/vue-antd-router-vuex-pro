import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Antd from 'ant-design-vue'
import directive from '@/directive/index'
import 'normalize.css'
import '@/styles/index.less'
import './permission'
import http from '@/utils/http'
import api from '@/api/index'
import $moment from '@/utils/moment'
import 'moment/locale/zh-cn'
// globalComponent
import SvgIcon from '@/components/svgIcon'// svg组件
import IconFont from '@/utils/iconfont.js'
import BreadCrumb from '@/components/breadCrumb'
import RightPanel from '@/components/rightPanel'
Vue.component(SvgIcon.name, SvgIcon)
Vue.component('icon-font', IconFont)
Vue.component(BreadCrumb.name, BreadCrumb)
Vue.component(RightPanel.name, RightPanel)

Vue.use(Antd)
Vue.use(http)
Vue.use(api)
Vue.use($moment)

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
  store: store,
  i18n,
  render: h => h(App)
})
