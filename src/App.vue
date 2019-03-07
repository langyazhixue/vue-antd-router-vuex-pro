<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$options)
  }
}
</script>
