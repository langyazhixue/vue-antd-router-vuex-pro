<template>
  <div>
    <input type="text" v-model='price'><!-- 下行注释的语法糖 -->
    <!-- <input :value="price" @input="price = $event.target.value"> -->
  </div>
</template>
<script>
export default {
  name:'baseInput',
  data(){
    return {
      price:20
    }
  }
}
</script>

