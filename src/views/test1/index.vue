<template>
  <div id="app">
    <RenderTest msg="Render Test" :level="3" :items="items">
      <div class="header">default header</div>
      <p slot="header">slot header</p>
    </RenderTest>
  </div>
</template>
<script>
import RenderTest from './renderTest.vue'
export default {
  name: 'TestOne',
  components: {
    RenderTest
  },
  data() {
    return {
      items: [
        {
          name: 'hello'
        },
        {
          name: 'vue'
        },
        {
          name: 'js'
        }
      ]
    }
  }
}
</script>

