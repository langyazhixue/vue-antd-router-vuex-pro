<template>
  <div>
    <div><span>{{value}}</span><input type="text" ref="input" :value="value" @input="doThis"/></div><!-- 下行注释的语法糖 -->
  </div>
</template>
<script>
export default {
  name:'baseInput',
  props:{
    value:{
      type:String
    }
  },
  data(){
    return {
    }
  },
  methods:{
    doThis() {
      this.$emit('input', this.$refs.input.value)
    }
  }
}
</script>

