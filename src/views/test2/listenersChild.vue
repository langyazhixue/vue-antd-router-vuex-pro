<template>
  <div class="hello">
    <my-child
    v-bind ='$attrs'
    v-on="$listeners"
    />
  </div>
  <el-button @click='handlerForceUpdate'>
    $forceUpdate
  </el-button>
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
  },
  beforeCreate(){
    console.log('listenersChild beforeCreate')
  },
  created(){
    console.log('listenersChild created')
  },
  mounted(){
    console.log('listenersChild mounted')
  },
  methods:{
    handlerForceUpdate(){
      this.$forceUpdate()
    }
  }
}
</script>