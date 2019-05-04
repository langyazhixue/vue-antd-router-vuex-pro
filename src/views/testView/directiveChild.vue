<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>
      <el-button @click="change">
        修改message
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DirectiveChild',
  data() {
    return {
      message: '这是子组件'
    }
  },
  methods: {
    change() {
      this.message = '子组件已更新'
    }
  }
}
</script>
