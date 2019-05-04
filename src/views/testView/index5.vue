<template>
  <div>
    <child-one />
  </div>
</template>
<script>
import ChildOne from './components/childone'
export default {
  name: 'Parent',
  provide: {
    for: 'demo'
  },
  components: {
    ChildOne
  },
  mounted() {
    console.log(typeof navigator === 'undefined')
    console.log(typeof a === 'undefined')
  }
}
</script>
