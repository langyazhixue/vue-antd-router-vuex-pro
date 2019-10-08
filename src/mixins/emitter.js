function $dispatch(eventName, data) {
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}
function boardcast(eventName, data) {
  // 找所有孩子
  this.$children.forEach(child => {
    child.$emit(eventName, data)
    if (child.$children && child.$children.length) {
      // 递归调用，通过call 修改 this 指向 child
      boardcast.call(child, eventName, data)
    }
  })
}

export default {
  // 可以 通过 Vue.mixin() 注入全局事件
  methods: {
    $dispatch,
    $boardcast: function(eventName, data) {
      boardcast.call(this, eventName, data)
    }
  }
}
