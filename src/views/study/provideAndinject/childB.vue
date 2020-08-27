<template>
  <div>
    <h3>组建B</h3>
    <ChildC />
  </div>
</template>

<script>
import ChildC from './childC'
export default {
  name: 'ChildB',
  components: {
    ChildC
  }
}
</script>

<style>

</style>
