<template>
  <div>
    <renderText :level="1" @changeTest="changeTest">
      <div>
        test
      </div>
      <div>
        fsd
      </div>
      <template v:slot="name">
        <div>
          this is slot
        </div>
      </template>
    </renderText>
    <!-- <renderText :level="2">
      我是2
    </renderText>
    <renderText :level="3">
      我是3
    </renderText>
    <renderText :level="4">
      我是4
    </renderText> -->
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
      console.log(v)
    }
  }
}
</script>
