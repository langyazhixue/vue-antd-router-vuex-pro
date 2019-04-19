<template>
  <Sider 
    hide-trigger   
    :width='180' 
    collapsible 
    :collapsed-width='78' 
    v-model='isCollapsed'
    ref='appSide'
  >
     <Menu 
     mode='vertical'
     theme='dark'
     accordion
     >
      <side-bar-item 
        v-for = '(route,$index) in routerMap'
        :route='route'
        :key='$index'
      />
     </Menu>
  </Sider>
</template>
<script>
import SideBarItem from './component/sideBarItem'
export default {
  name: 'SideNav',
  components:{
    SideBarItem
  },
  computed:{
    isCollapsed(){
      return this.$store.app.isCollapsed
    },
    routerMap(){
      return this.$store.app.routerMap
    }
  }
}
</script>
<style lang="less" scoped>
</style>