<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
var MyComponent = Vue.extend({
  tempalte:'<div>Hello!11111111</div>'
})
var component = new MyComponent().$mount()
export default {
  name: 'App',
  created() {
    console.log(this.$options)
  },
  mounted(){
    //document.getElementById('app').appendChild(component.$el)
  }
}
</script>
