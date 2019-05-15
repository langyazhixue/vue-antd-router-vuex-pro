<template>
  <div>
    <template v-if="$slots.header">
      <slot name="header" />
    </template>
    <!-- <template v-if='$slots.default'>
      <slot></slot>
    </template> -->
    <slot :data="data" />
  </div>
</template>
<script>
export default {
  name: 'TestChild',
  data() {
    return {
      data: {
        text: 'I Am slotProps'
      }
    }
  },
  mounted() {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
  }
}
</script>
