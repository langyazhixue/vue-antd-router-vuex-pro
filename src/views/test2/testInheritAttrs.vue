<template>
  <div class ='test--container'>
    testInheritAttrs
    <input 
      :readonly='readonly'
      v-bind='$attrs'
    />
  </div>
</template>
<script>
export default {
  name:'testInheritAttrs',
  props:{
    readonly: Boolean,
    name:{
      type:String,
      default:'ww'
    }
  },
  inheritAttrs:false, // 默认情况
  mounted(){
    console.log(this.$props)
    console.log(this.$attrs)
  }
}
</script>

