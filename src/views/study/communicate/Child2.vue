<template>
  <div>
    <h2>Child2</h2>
    <h3>{{ msg }}</h3>
    <GrandChild2 />
  </div>
</template>

<script>
import GrandChild2 from './GrandChild2'

export default {
  name: 'Child2',
  components: {
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
      this.msg = '接收dispatch消息:' + msg
    })
  }
}
</script>

<style>

</style>
