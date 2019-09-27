<script>
export default {
  name: 'RenderText',
  functional: true,
  render: function(createElement, context) {
    console.log(context)
    return createElement(
      // 'h' + this.level, // 标签名称
      'h' + context.props.level,
      {
        ...context.data
      },
      context.children // 子节点数组
    )
  }
}
</script>
