<template>
  <div>
    <el-container>
      <Header />
      <side-nav />
      <app-main />
    </el-container>
  </div>
</template>
<script>
import AppMain from './components/appMain.vue'
import Header from './components/header.vue'
import SideNav from './components/sideNav.vue'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Header,
    SideNav
  }
}
</script>

