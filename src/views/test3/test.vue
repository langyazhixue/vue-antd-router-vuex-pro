<template>
<div>
   <div>test Inject</div>
    <div>{{demo}}</div>
</div>
</template>
<script>
export default {
  name:'ChildOne',
  inject:{
    foo: { 
      from: 'bar',
      default: 'foo' 
    }
  },
  data(){
    return {
      demo:this.foo
    }
  },
  beforeCreate() {
    console.log('test3 child beforeCreate')
  },
  created() {
    console.log('test3 child created')
  },
  beforeMount() {
    console.log('test3 child beforeMount')
  },
  mounted() {
    console.log('test3 child mounted')
  },
  beforeDestroy() {
    console.log('test3 child beforeDestroy')
  },
  destroyed() {
    console.log('test3 child destroyed')
  }
}
</script>

