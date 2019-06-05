<template>
  <div>
    <renderText :level="1" @changeTest="changeTest">
      我是1
    </renderText>
    <renderText :level="2">
      我是2
    </renderText>
    <renderText :level="3">
      我是3
    </renderText>
    <renderText :level="4">
      我是4
    </renderText>
  </div>
</template>
<script>
import renderText from './render'
export default {
  name: 'TestView',
  components: {
    renderText
  },
  methods: {
    changeTest(v) {
      debugger
      console.log(v)
    }
  }
}
</script>
