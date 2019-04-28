<template>
  <a-layout-sider
    theme='light'
  >
    <a-menu 
      theme='dark'
      mode="inline"
      :inlineCollapsed="isCollapsed"
     >
    <template
      v-for='(route) in routerMap'
      >
        <!-- 没有子菜单 -->
        <a-menu-item
          @click='goToComponent'
          v-if='route.children && route.children.length ===1' 
          :key ='route.children[0].key'
          :path='resolvePath(route.path,route.children[0].path)'
        >
        <app-item
          :icon='route.children[0].meta.icon'
          :title='route.children[0].meta.title'
        />
      </a-menu-item>
      <!-- 有子菜单 -->
      <a-sub-menu 
        :key='route.key'
        v-else
      >
        <span slot='title'>
          <app-item
            :icon='route.meta.icon'
            :title='route.meta.title'
          />
        </span>
          <template
            v-for='child in route.children'
          >
            <a-menu-item
            @click='goToComponent'
            :key ='child.key'
            v-if='!child.hiddex'
            :path = 'resolvePath(route.path,child.path)'
            >
            <app-item
              :icon='child.meta.icon'
              :title='child.meta.title'
            />
            </a-menu-item>
          </template>
      </a-sub-menu>
    </template>
    </a-menu>
  </a-layout-sider>
</template> 
<script>
import SideBarItem from './components/sideBarItem'
const path = require('path')
import AppItem from './components/item'
export default {
  name: 'AppSideNav',
  components:{
    SideBarItem
  },
  components:{
    AppItem
  },
  computed:{
    isCollapsed(){
      return this.$store.state.app.isCollapsed
    },
    routerMap(){
      let router = this.$store.state.app.routerMap
      const routerArrPure = this.filterRouter(router)
      return routerArrPure
    }
  },
  methods:{
    goToComponent(item,key,keyPath) {
      this.$router.push( {
        path:item.item.$attrs.path
      })
    },
    filterRouter(router) {
      // 菜单目前只有2层
      let res = []
      router.forEach(item => {
        if(!item.hidden && item.children && item.children.length > 0) {
          res.push(item)
        }
      })
      return res
    },
    resolvePath(basePath,routerPath){
      return path.resolve(basePath,routerPath)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
