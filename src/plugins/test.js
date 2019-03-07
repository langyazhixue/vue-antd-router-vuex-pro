
export default {
  install(Vue) {
    Vue.myGlobalMethod = function() {
      console.log('myGlobalMethod')
    }
    Vue.directive('my-directive', {
      bind(el, binding, vnode, oldVnode) {
        console.log('directive')
      }
    })
    Vue.mixin({
      beforeCreate() {
        console.log('beforeCreate')
      },
      created() {
        console.log('create')
      },
      mounted() {
        console.log('mounted')
      }
    }) // 一旦使用全局混入对象，将会影响到所有之后创建的Vue实例。
    Vue.prototype.$myMethod = function(methodOptions) {
      console.log(methodOptions)
    }
  }
}
