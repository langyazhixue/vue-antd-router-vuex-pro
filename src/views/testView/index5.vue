<template>
  <div>
    <child-one></child-one>
  </div>
</template>
<script>
import ChildOne from './components/childone'
export default {
  name:'parent',
  provide: {
    for:'demo'
  },
  mounted() {
    console.log(typeof navigator === 'undefined')
    console.log(typeof a === 'undefined')
  },
  components:{
    ChildOne
  }
}
</script>
