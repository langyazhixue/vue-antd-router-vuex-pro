<template>
  <a-layout-sider
    theme='light'
    v-model="isCollapsed"
  >
  <span v-show='false'>{{defaultOpenKeys}}{{isCollapsed}}</span>
    <a-menu 
      theme='dark'
      mode="inline"
      :defaultSelectedKeys='defaultSelectedKeys'
      :defaultOpenKeys='defaultOpenKeys'
     >
    <template
      v-for='(route) in routerMap'
      >
        <!-- 没有子菜单 -->
        <a-menu-item
          @click='goToComponent'
          v-if='route.children && route.children.length ===1' 
          :key ='resolvePath(route.path,route.children[0].path)'
          :path='resolvePath(route.path,route.children[0].path)'
        >
        <app-item
          :icon='route.children[0].meta.icon'
          :title='route.children[0].meta.title'
        />
      </a-menu-item>
      <!-- 有子菜单 -->
      <a-sub-menu 
        :key='route.path'
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
            :key ='resolvePath(route.path,child.path)'
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
  data(){
    return {
      openKeys : [],
      collapsed:false,
    } 
  },
  components:{
    AppItem
  },
  computed:{
    isCollapsed(){
      let collapsed = this.$store.state.app.isCollapsed
      return collapsed
    },
    routerMap(){
      let router = this.$store.state.app.routerMap
      const routerArrPure = this.filterRouter(router)
      return routerArrPure
    },
    defaultSelectedKeys(){
      return [this.$route.path]
    },
    defaultOpenKeys() {
      // 计算初始情况是否需要展开二级菜单
      let res = []
      let fullPath = this.$route.fullPath
      let matched = this.$route.matched
      let matchedRouter = matched.filter(item => {
        return fullPath === item.path
      })
      if(matchedRouter.length > 0) {
        if(matchedRouter[0].parent) {
          res.push(matchedRouter[0].parent.path)
        }
      }
      return res
    }
  },
  watch: {
    openKeys: {
      handler: function(newVal,oldVal){
        console.log(newVal)
      },  
      deep: true
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
    },
    toggleCollapsed(){
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less" scoped>
</style>
