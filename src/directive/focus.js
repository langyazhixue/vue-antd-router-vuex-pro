
export default {
  bind(el, binding, vnode) { // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    console.group('bind===============》')
    console.log(el)
    console.log(binding)
    console.log(vnode)
  },
  inserted(el, binding, vnode) { // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    console.group('inserted===============》')
    console.log(el)
    console.log(binding)
    console.log(vnode)
  },
  update(el, binding, vnode, oldVnode) { //
    console.group('update===============》')
    console.log(el)
    console.log(binding)
    console.log(vnode)
    console.log(oldVnode)
  },
  componentUpdated(el, binding, vnode, oldVnode) { // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    console.group('componentUpdated===============》')
    console.log(el)
    console.log(binding)
    console.log(vnode)
    console.log(oldVnode)
  }
}
