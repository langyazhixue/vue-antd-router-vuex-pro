
<script>
export default {
  name: 'AppItem',
  functional: true, // 函数式组件
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []
    // jsx 语法
    if (icon) {
      vnodes.push(<icon-font type={icon} />)
    }
    if (title) {
      vnodes.push(<span class='app-menu-text'>{(title)}</span>)
    }
    return h('span', vnodes)
  }
}
</script>
