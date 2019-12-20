import Vue from 'vue'
import App from './App'
// import router from './router'

// 用自己写的router
import router from './router'
import store from './store'
import i18n from './lang'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Antd from 'ant-design-vue'
import directive from '@/directive/index'
import 'normalize.css'
import '@/styles/index.less'
import emitter from './mixins/emitter'
import '@/mock/index'
import './permission'
// import http from '@/utils/http'
import api from '@/api/index'
import $moment from '@/utils/moment'
import 'moment/locale/zh-cn'
import '@/icons' // svg-icons 组件 在这里加载
// globalComponent
import IconFont from '@/utils/iconfont.js'
import BreadCrumb from '@/components/breadCrumb'
import RightPanel from '@/components/rightPanel'
import service from '@/utils/request'
import SvgIconInline from '@/components/svgIconInline'
Vue.component('icon-font', IconFont)
Vue.component(BreadCrumb.name, BreadCrumb)
Vue.component(RightPanel.name, RightPanel)
Vue.component(SvgIconInline.name, SvgIconInline)
Vue.use(Antd)
// Vue.use(http)
Vue.use(api)
Vue.use($moment)

Vue.prototype.$http = service
Object.keys(directive).forEach((key) => {
  // 注册指令
  Vue.directive(key, directive[key])
})

Vue.mixin(emitter)
/**
 * message bus
 */

Vue.prototype.$bus = new Vue()
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
import { test } from './utils/module/index'
test()
// var EJS = require('ejs')
// var my_supplies = { supplies: ['mop', 'broom', 'duster'] }
// var result = new EJS({ url: 'test.ejs' }).render(my_supplies)
// console.log(result)
// document.getElementById('app').innerHTML = result
