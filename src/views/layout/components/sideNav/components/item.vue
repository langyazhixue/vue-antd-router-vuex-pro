
<script>
export default {
  name:'AppItem',
  functional: true, // 函数式组件
  props:{
    icon:{
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context){
    const { icon, title } = context.props
    let vnodes = []
    // jsx 语法
    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>)
    }
    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return h('span',vnodes)
  }
}
</script>