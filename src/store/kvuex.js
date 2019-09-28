
let Vue
function install(_vue) {
  Vue = _vue
  Vue.mixin({
    beforeCreate() {
      this.$store = this.$options.store
    }
  })
}

// 2. 实现 store

class Store {
  constructor(optoins = {}) {
    //  响应话处理
    this.state = new Vue({
      data: optoins.state
    })
    this.mutations = optoins.mutations || {}
    this.actions = optoins.mutations || {}
  }

  // type  是 mutations 中的 函数名字
  commit = (type, arg) => {
    this.mutations[type](this.state, arg)
  }

  diapatch(type, arg) {
    this.actions[type]({
      commit: this.commit,
      state: this.state
    }, arg)
  }
}

export {
  Store,
  install
}
