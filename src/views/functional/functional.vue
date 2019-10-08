<script>
export default {
  name: 'FunctionView',
  functional: true,
  props: {
    level: {
      type: String,
      default: '1'
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click', '这是测试数据')
    }
  },
  render: function(createElement, context) {
    console.log(context)
    const { props, scopedSlots, children, listeners, data } = context
    // const data1 = 'ff'
    // console.log(listeners)
    console.log(listeners)
    console.log(scopedSlots)
    console.log(scopedSlots.name())
    console.log(scopedSlots.default())
    return createElement(
      // 'h' + this.level, // 标签名称
      'h' + context.props.level,
      {
        attrs: {
          level: props.level
        },
        // 函数式组件没有实例，事件只能由父组件传递。
        on: {
          click: data.on.changeTest
          // onclick: data.on.changeTest(data1) 不能传递参数
        }
      },
      children// 子节点数组
    )
  }
}
</script>
