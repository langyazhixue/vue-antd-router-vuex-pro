const apiMap = {
  login:'/user/login'
}

export const api = apiMap
export default {
  install(Vue) {
    Vue.prototype.$api = apiMap
  }
}