<template>
  <div class="communicate-container">
    <h2>Parent</h2>
    <h3>{{ msg }}</h3>
    <Child1 :title="title1" @getMsg="getMsg" />
    <Child2 />
  </div>
</template>
<script>

import Child1 from './Child1'
import Child2 from './Child2'
export default {
  name: 'CommuncateView',
  provide: {
    woniu: '这是一个vue通信测试案例'
  },
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      msg: '',
      title1: ' 我是你父亲'
    }
  },
  mounted() {
    this.$on('dispatch', msg => {
      this.msg = '接收dispatch消息:' + msg
    })
    this.$bus.$on('event-bus', msg => {
      this.msg = '接收event-bus消息:' + msg
    })
  },
  methods: {
    getMsg(msg) {
      this.msg = msg
    }
  }
}
</script>

<style lang='less' scoped>
.communicate-container {
  border: 3px blue solid;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  div {
    border: 3px blue solid;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
  /* width:50%; */
  }
  h1,
  h2 {
    font-size: 18px;
    margin: 5px 0;
  }
  h3 {
    color: red;
    font-size: 14px;
  }
}

</style>
