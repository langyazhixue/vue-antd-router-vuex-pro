<template>
  <div class="test-container">
    <div>组件test1</div>
    <div @click='goto'>去组件4</div>
    <el-input v-model="name" placeholder="请输入姓名" />
    <Test :data='obj'/>
    <el-button @click='change'>改变obj</el-button>
  </div>
</template>
<script>
import Test from './test11.vue'
export default {
  name: 'TestOne',
  data() {
    return {
      name: '',
      test:'test1',
      obj:{
        name:'上海'
      }
    }
  },
  components:{ Test },
  methods:{
    change(){
      this.obj = {
        name:'杭州'
      }
    }
  },
  beforeRouteEnter(to,from,next){
    debugger
    next()
  },
  beforeCreate() {
    console.log('test1 beforeCreate')
  },
  created() {
    console.log('test1 created')
  },
  beforeMount(){
    console.log('test1 beforeMount')
  },
  mounted() {
    console.log('test1 mounted')
  },
  activated() {
    console.log('test1 activated')
  },
  deactivated() {
    console.log('test1 deactivated')
  },
  beforeDestroy() {
    console.log('test1 beforeDestroy')
  },
  destroyed() {
    console.log('test1 destroyed')
  },
  methods:{
    goto(){
      this.$router.push({
        name:'test4'
      })
    }
  }
}
</script>

