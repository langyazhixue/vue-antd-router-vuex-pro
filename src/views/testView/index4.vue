<template>
  <div>
    <input v-model="obj.data.cityName" type="text">
    <input v-model="obj.data.address" type="text">
  </div>
</template>
<script>
export default {
  name: 'Watch',
  data() {
    return {
      obj: {
        data: {
          cityName: 'sjamgjao',
          address: '杭州'
        }
      }
    }
  },
  watch: {
    'obj': {
      handler(newVal, oldName) {
        console.log(newVal)
      },
      deep: true
    }
  },
  methods: {
    getAnswer() {
      console.log(this.cityName)
    }
  }
}
</script>

