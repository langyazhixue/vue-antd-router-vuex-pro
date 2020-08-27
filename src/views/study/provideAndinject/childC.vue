<template>
  <div>
    <h3 :style="{color: theme.color}">
      组件C
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ChildC',
  // inject: ['theme'] // 不可相应
  inject: {
    theme: {
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
