<template>
  <div class="hello">
    <my-child
    v-bind ='$attrs'
    v-on="$listeners"
    />
  </div>
</template>
<script>
import MyChild from './child.vue'
export default {
  data () {
    return {
      num: 100
    }
  },
  components:{
    MyChild
  }
}
</script>