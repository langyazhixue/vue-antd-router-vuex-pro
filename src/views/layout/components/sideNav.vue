<template>
  <el-aside width="240px">
    <el-menu
      default-active="test/test1"
      class="el-menu-vertical-demo"
      router
    >
      <el-submenu index="test">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航1</span>
        </template>
        <el-menu-item index="/test/test1">
          组件1
        </el-menu-item>
        <el-menu-item index="/test/test2">
          组件2
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/other/test3">
        <i class="el-icon-document" />
        <span slot="title">
          组件3
        </span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: 'SideNav'
}
</script>
<style lang="scss" scoped>
</style>
