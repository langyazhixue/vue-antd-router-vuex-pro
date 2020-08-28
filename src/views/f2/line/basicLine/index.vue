<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="基础折线图1" name="one">
      <F2BasicLineOne v-if="activeName==='one'" />
    </el-tab-pane>
    <el-tab-pane label="基础折线图-带点" name="two">
      <F2BasicLineTwo v-if="activeName==='two'" />
    </el-tab-pane>

    <el-tab-pane label="基础折线图-曲线" name="three">
      <F2BasicLineThree v-if="activeName==='three'" />
    </el-tab-pane>
    <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>

<script>
import F2BasicLineOne from './components/01index'
import F2BasicLineTwo from './components/02index'
import F2BasicLineThree from './components/03index'
export default {
  name: 'F2BasicLine',
  components: { F2BasicLineOne, F2BasicLineTwo, F2BasicLineThree },
  data() {
    return {
      activeName: 'one'
    }
  }
}
</script>

<style>

</style>
