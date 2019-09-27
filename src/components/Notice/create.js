import Vue from 'vue'

function create(Component, props) {
  // 创建一个Vue新实例
  const vm = new Vue({
    // render函数将传入组件配置对象转换为虚拟dom
    // $mount 可以使用 vm.$mount() 手动地挂载一个未挂载的实例
    render(h) {
      return h(Component, {
        props
      })
    }
  }).$mount() // 执行挂载函数，但未指定挂载目标，表示只执行初始化工作

  // 将生成 dom 元素 追加至 body
  document.body.appendChild(vm.$el)
  // 给组件实例添加销毁方法
  console.log(vm)
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create
