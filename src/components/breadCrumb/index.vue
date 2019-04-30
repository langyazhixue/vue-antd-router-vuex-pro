<template>
  <a-breadcrumb class='app--breadcrumb--container' separator="/">
    <template
      v-for='(item, $index) in matched'
    >
      <a-breadcrumb-item
      >
        <router-link v-if='$index === 0' :to='{
          path:item.path
        }'>
            {{item.meta.title}}
        </router-link>
        <span v-else>{{item.meta.title}}</span>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>
<script>
export default {
  name:'AppBreadcrumb',
  data(){
    return {
      matched:[]
    }
  },
  watch:{
    $route() {
      this.getBreadcrumb()
    }
  },
  created(){
    this.getBreadcrumb()
  },
  methods:{
    getBreadcrumb(){
      let matched =  this.$route.matched.filter(item => {
        return item.name
      })
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
      }
      this.matched = matched
    }
  }
}
</script>
<style lang="less" scoped>
.app--breadcrumb--container {
  display: inline-block;
}
</style>
