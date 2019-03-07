<template>
  <div>
    <input type="text" v-model="obj.data.cityName">
    <input type="text" v-model="obj.data.address">
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name:'watch',
  data(){
    return {
      obj:{
        data:{
          cityName:'sjamgjao',
          address:'杭州'
        }
      }
    }
  },
  methods:{
    getAnswer(){
      console.log(this.cityName)
    }
  },  
  watch:{
    'obj':{
      handler(newVal,oldName){
        console.log(newVal)
      },
      deep:true
    }
  }
}
</script>



