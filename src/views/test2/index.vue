<template>
  <div class="test-container">
    <div>组件test2</div>
    <el-input v-model="name" placeholder="请输入姓名" />
  </div>
</template>
<script>
export default {
  name: 'TestTwo',
  data() {
    return {
      name: ''
    }
  },
  beforeCreate() {
    console.log('test2 beforeCreate')
  },
  created() {
    console.log('test2 created')
  },
  mounted() {
    console.log('test2 mounted')
  },
  activated() {
    console.log('test2 activated')
  },
  deactivated() {
    console.log('test2 deactivated')
  }
}
</script>
