<template>
  <div>
    <h2>Child1</h2>
    <p>{{ title }}</p>
    <h3>{{ msg }}</h3>
    <button @click="toParent">
      传递到父元素那里
    </button>
    <button @click="$boardcast('boardcast','我是Child1')">
      广播子元素
    </button>
    <GrandChild1 />
    <GrandChild2 />
  </div>
</template>

<script>

import GrandChild1 from './GrandChild1'
import GrandChild2 from './GrandChild2'
export default {
  name: 'Child1',
  components: {
    GrandChild1,
    GrandChild2
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    this.$on('dispatch', msg => {
      this.msg = '接收dispatch消息：' + msg
    })
    this.$bus.$on('event-bus', msg => {
      this.msg = '接收event-bus消息:msg'
    })
  },
  methods: {
    toParent() {
      this.$emit('getMsg', 'child1向父发出一个命令')
    }
  }
}
</script>

<style>

</style>
