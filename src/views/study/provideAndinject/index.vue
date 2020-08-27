<template>
  <div>
    <h1>A组件</h1>
    <button @click="handlerChage">
      改变color
    </button>
    <ChildB />
  </div>
</template>

<script>
import ChildB from './childB'
import Vue from 'vue'
export default {
  name: 'ProviderCoom',
  components: {
    ChildB
  },
  data() {
    return {
      color: 'red'
    }
  },
  // provide: {
  //   theme: this.color // 不可相应
  // },
  // provide() {
  //   return {
  //     theme: this// 方法一：提供祖先组件的实例
  //   }
  // },
  provide() {
    this.theme = Vue.observable({
      color: 'red'
    })
    return {
      theme: this.theme
    }
  },
  methods: {
    handlerChage() {
      this.theme.color = this.theme.color === 'blue' ? 'red' : 'blue'
    }
    // handlerChage() {
    //   this.color = this.color === 'red' ? 'blue' : 'red'
    //   console.log(this.color)
    // }
  }
}
</script>

<style>

</style>
