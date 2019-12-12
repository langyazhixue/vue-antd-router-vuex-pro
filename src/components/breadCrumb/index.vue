<template>
  <a-breadcrumb class="app--breadcrumb--container" separator="/">
    <a-breadcrumb-item
      v-for="(item, $index) in matched"
      :key=" $index"
    >
      <span v-if="item.redirect==='noRedirect' || $index === (matched.length-1)">{{ item.meta.title }}</span>
      <router-link
        v-else
        class="redirect"
        :to="{
          path:item.path
        }"
      >
        {{ item.meta.title }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'AppBreadcrumb',
  data() {
    return {
      matched: []
    }
  },
  watch: {
    $route: {
      handler(router) {
        this.getBreadcrumb()
      },
      immediate: true
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => {
        return item.meta && item.meta.title
      })
      // console.log(this.$route.matched)
      // console.log(matched)
      // 跟路由
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
      }
      this.matched = matched
    },
    isHome(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(path) {
      const { params } = this.$route
      const toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        // 若存在重定向，按照重定向走
        this.$router.push(redirect)
      } else {
        // 编译path,避免存在路径参数
        this.$router.push(this.pathCompile(path))
      }
    }
  }
}
</script>
<style lang="less" >
@import '~@/styles/variables.less';
.app--breadcrumb--container.ant-breadcrumb {
  display: inline-block;
  span {
    color:@assistant-text-color !important;
  }
  span:last-child {
    color:@assistant-text-color !important;
  }
  .redirect {
    color:@primary-text-color;
    &:hover{
      color:@primary-color;
    }
  }

}
</style>
