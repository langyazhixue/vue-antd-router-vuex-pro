<template>
  <div class='side--bar--item' v-if="!route.hidden&&route.children">
    <template v-if="hasOneShowingChild(route.children, route) && !onlyOneChild.children">
        <a-menu-item 
          :key ='onlyOneChild.name ||onlyOneChild.path'
        >
        <app-item
          :icon='onlyOneChild.meta.icon'
          :title='onlyOneChild.meta.title'
        />
      </a-menu-item>
    </template>
    <template v-else >
      <a-submenu >
        <!-- title -->
        <template slot='title'>
          <app-item
          v-if='route.meta'
          :icon='route.meta.icon'
          :title='route.meta.title'
        />
        </template>
        <!--  -->
        <template
          v-for='(child) in route.children'
        >
          <side-bar-Item
            v-if="child.children&&child.children.length>0"
            :route='child'
            :key='child.path'
            class='nest-menu'
            :base-path="resolvePath(child.path)"
        />
          <a-menu-item  
            v-else
            v-if ="!child.hidden"
            :key='child.name || child.path'
          >
            <app-item
              :icon='onlyOneChild.meta.icon'
              :title='onlyOneChild.meta.title'
            />
          </a-menu-item>
        </template>
      </a-submenu>
    </template>
  </div>
</template>
<script>
import path from 'path'
import AppLink from './link'
import AppItem from './item'
export default {
  name:'SideBarItem',
  props:{
    route:{
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
