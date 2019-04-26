<template>
  <component v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script>
export default {
  name:'LinkView',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  linkProps(url) {
      return {
        is: 'router-link',
        to: url
    }
  }
}
</script>