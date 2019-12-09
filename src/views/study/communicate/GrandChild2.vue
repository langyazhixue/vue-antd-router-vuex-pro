<template>
  <div>
    <h2>GrandChild2</h2>
    <p>祖先提供的数据:{{ woniu }}</p>
    <button @click="eventBus">
      $bus发布
    </button>
    <h3>{{ msg }}</h3>
    <GrandGrandChild1 />
  </div>
</template>

<script>

import GrandGrandChild1 from './GrandGrandChild1'
export default {
  name: 'GrandChild2',
  inject: ['woniu'],
  components: {
    GrandGrandChild1
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
    this.$on('boardcast', msg => {
      this.msg = '接收boardcast消息：' + msg
    })
  },
  methods: {
    eventBus() {
      this.$bus.$emit('event-bus', '测试eventBus')
    }
  }
}
</script>

<style>

</style>
