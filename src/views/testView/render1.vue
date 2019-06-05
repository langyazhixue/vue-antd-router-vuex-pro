
<script>
export default {
  name: 'RenderText',
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  methods: {
    alert() {
      console.log('fsdfd')
    }
  },
  render: function(createElement) {
    return createElement(
      // 'h' + this.level, // 标签名称
      'input',
      {
        'class': {
          foo: true,
          bar: false
        },
        // 与 `v-bind:style` 的 API 相同，
        // 接受一个字符串、对象，或对象组成的数组
        style: {
          color: 'red',
          fontSize: '14px'
        },
        // 普通的 HTML 特性
        attrs: {
          id: 'foo',
          name: 'test'
        },
        props: {
          myProp: 'bar'
        },
        // DOM 属性
        domProps: {
          value: this.level,
          checked: true,
          type: 'radio'
          // innerHTML: 'baz'
        },
        on: {
          // click: this.alert,
          change: this.alert
        }
      },
      // this.$slots.default // 子节点数组

    )
  }
}
</script>
