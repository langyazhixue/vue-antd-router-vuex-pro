<template>
  <div class="test-container">
    <test/>
    <span v-show='false'>{{name}}</span>
   <br/>
    <br/> <br/>
     <br/>
      <br/>
       <br/>
        <br/>
         <br/>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <br/> <br/> <br/>
             <br/> <br/> <br/> <br/>
<br/>
    <br/> <br/>
     <br/>
      <br/>
       <br/>
        <br/>
         <br/>
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <br/> <br/> <br/>
             <br/> <br/> <br/> <br/>
             <div id = 'xiaoxiao'>
               xiaoxiao
             </div>

  </div>
</template>
<script>
import test from './test'
export default {
  name: 'TestTHird',
  mounted(){
    console.log(this.$router)
  },
  provide:{
    bar:'tesre'
  },
  data(){
    return {
      name:this.foo
    }
  },
  beforeCreate() {
    console.log('test3 beforeCreate')
  },
  created() {
    console.log('test3 created')
  },
  beforeMount() {
    console.log('test3 beforeMount')
  },
  mounted() {
    console.log('test3 mounted')
  },
  beforeDestroy() {
    console.log('test3 beforeDestroy')
  },
  destroyed() {
    console.log('test3 destroyed')
  },
  components:{test}
}
</script>
