<template>
  <div>
    <MyFunctionalView id="1" :list="list" @itemClick="itemClick">
      <div>
        test
      </div>
    </MyFunctionalView>
  </div>
</template>

<script>
import MyFunctionalView from './functional'
export default {
  name: 'FunctionalView',
  components: {
    MyFunctionalView
  },
  data() {
    return {
      list: [{
        name: 'test',
        id: '1'
      }]
    }
  },
  methods: {
    itemClick(item) {
      alert(item.name)
    }
  }
}
</script>

<style>

</style>
