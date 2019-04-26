<template>
  <div>
    <a-menu-item key="1">
      <a-icon type="pie-chart" />
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop" />
      <span>Option 2</span>
    </a-menu-item>
  </div>
</template>
<script>
import path from 'path'
import AppLink from './link'
import AppItem from './item'
export default {
  name:'SideBarItem',
  props:{
    routeItem:{
      reuqired:true,
      type:Object
    },
    basePath:{
      reuqired:true,
      type:String
    }
  },
  data(){
    return {
      onlyOneChild:null,
    }
  },
  components:{
    AppLink,
    AppItem
  },
  methods:{
    hasOneShowingChild(children, parent){
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      debugger
      if(showingChildren.length === 1) {
        return true
      } 
      if(showingChildren.length === 0) {
         this.onlyOneChild = { ... parent, path: '' }
        return true
      }
      return false
    },
    resolvePath(routerPath){
      return path.resolve(this.basePath,routerPath)
    }
  }
}
</script>
<style lang="less" scoped>
.side--bar--item{

}
</style>
