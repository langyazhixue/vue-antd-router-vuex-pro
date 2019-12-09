<template functional>
  <div>
    <div>
      <slot />
    </div>
    <div>
      {{ data.attrs }}
    </div>
    <p
      v-for="(item,index) in props.list"
      :key="index"
      @click="data.on.itemClick(item)"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyFunctionalView',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return ''
  }
}
</script>

<style>

</style>
