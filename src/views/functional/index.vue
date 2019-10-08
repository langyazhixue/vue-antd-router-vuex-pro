<template>
  <div>
    <div>
      <p>Vue中有一种组件没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法，实际上，它只是一个接受一些Prop的函数。</p>
      <p>在这样场景下，我们可以将组将标记为`functional`,这意味着它为状态(没有`响应式数据`)，也没有实例(没有`this上下文`)</p>
      <p>Stateless(无状态)：组件自身是没有状态的</p>
      <p>Instanceless(无实例)：组件自身没有实例，也就是没有this</p>
    </div>
    <FunctionView :level="'1'" @changeTest="handlerClickTest">
      <div>
        <p>{{ username.name }}</p>

        这是第一个子元素(存在$children中)
      </div>
      <div>
        <p>{{ username.address }}</p>
        这是第一二子元素(存在$children中)
      </div>
      <div slot="name">
        这是一块插槽
      </div>

      <!-- <template slot="name">
        <div>
          this is slot
        </div>
      </template> -->
    </FunctionView>
    <!-- <renderText :level="2">
      我是2
    </renderText>
    <renderText :level="3">
      我是3
    </renderText>
    <renderText :level="4">
      我是4
    </renderText> -->
  </div>
</template>
<script>
import FunctionView from './functional'
export default {
  name: 'TestView',
  components: {
    FunctionView
  },
  data() {
    return {
      username: {
        name: '老梁',
        address: '杭州'
      }
    }
  },
  methods: {
    handlerClickTest(data, $event) {
      // 看看接收到了什么参数
      console.log($event)
      // console.log(data)
    }
  }
}
</script>
