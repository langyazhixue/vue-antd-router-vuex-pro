<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="基础折线图1" name="one">
      <F2BasicLineOne />
    </el-tab-pane>
    <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>

<script>
import F2BasicLineOne from './components/01index'
export default {
  name: 'F2BasicLine',
  components: { F2BasicLineOne },
  data() {
    return {
      activeName: 'one'
    }
  }
}
</script>

<style>

</style>
