import Vue from 'vue'
import SvgIcon from '@/components/svgIcon'
// 自动加载svg文件
// false 不递归，在 .svg文件下
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
Vue.component('svg-icon', SvgIcon)
