import moment from 'moment'
moment.locale('en')
export default {
  install(Vue) {
    Vue.prototype.$moment = moment
  }
}
