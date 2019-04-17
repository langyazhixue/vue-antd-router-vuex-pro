<template>
  <div class='one'>
      {{demo}}
    <child-two></child-two>
  </div>
</template>
<script>
import ChildTwo from './childtwo.vue'
export default {
  name:'ChildOne',
  inject:['for'],
  data(){
    return {
      demo:this.for
    }
  },
  components:{
    ChildTwo
  }
}
</script>
