<template>
  <a-layout-sider
    theme='light'
  >
    <a-menu 
      theme='light'
      mode="inline"
      :inlineCollapsed="isCollapsed"
     >
      <side-bar-item 
        v-for = '(route) in routerMap'
        :route='route'
        :key='route.path'
        :base-path="route.path"
      />
     </a-menu>
  </a-layout-sider>
</template>
<script>
import SideBarItem from './components/sideBarItem'
export default {
  name: 'AppSideNav',
  components:{
    SideBarItem
  },
  computed:{
    isCollapsed(){
      return this.$store.state.app.isCollapsed
    },
    routerMap(){
      return this.$store.state.app.routerMap
    }
  }
}
</script>
<style lang="less" scoped>
</style>
