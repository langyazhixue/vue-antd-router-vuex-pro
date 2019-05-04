<template>
  <div class="one">
    {{ demo }}
    <child-two />
  </div>
</template>
<script>
import ChildTwo from './childtwo.vue'
export default {
  name: 'ChildOne',
  inject: ['for'],
  components: {
    ChildTwo
  },
  data() {
    return {
      demo: this.for
    }
  }
}
</script>
