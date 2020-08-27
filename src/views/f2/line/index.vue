<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="基础折线图" name="basicLine">
        <BasicLine />
      </el-tab-pane>
    <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import BasicLine from './basicLine/index'
export default {
  name: 'F2Line',
  components: { BasicLine },
  data() {
    return {
      activeName: 'basicLine'
    }
  }
}
</script>

<style>

</style>
