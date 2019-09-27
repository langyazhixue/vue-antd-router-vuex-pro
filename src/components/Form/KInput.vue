<template>
  <div>
    <input :value="value" v-bind="$attrs" @input="onInout">
  </div>
</template>

<script>
export default {
  name: 'KInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInout(e) {
      this.$emit('input', e.target.value)
      // console.log(this.$parent) // 父组件是 KFormItem
      this.$parent.$emit('validate') // 通知父组件去
    }
  }
}
</script>

<style>

</style>
