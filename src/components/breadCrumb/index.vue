<template>
  <a-breadcrumb class="app--breadcrumb--container" separator="/">
    <transition-group name="breadcrumb" tag="div">
      <a-breadcrumb-item
        v-for="(item, $index) in matched"
        :key=" $index"
      >
        <span v-if="item.redirect==='noRedirect' || $index === (matched.length-1)" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else class="redirect" @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      <!-- <router-link
        v-else
        class="redirect"
        :to="{
          path:item.path
        }"
      >
        {{ item.meta.title }}
      </router-link> -->
      </a-breadcrumb-item>
    </transition-group>
  </a-breadcrumb>
</template>
<script>
const pathToRegexp = require('path-to-regexp')
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
      console.log(pathToRegexp)
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
        const compilePath = this.pathCompile(path)
        this.$router.push(compilePath)
      }
    }
  }
}
</script>
<style lang="less" >
@import '~@/styles/variables.less';
.app--breadcrumb--container.ant-breadcrumb {
  display: inline-block;
  font-size: 14px;
  .no-redirect {
    color:@assistant-text-color !important;
  }
  .redirect {
    color:@primary-text-color !important;
    &:hover{
      color:@primary-color;
    }
  }
}
.ant-breadcrumb>div {
  span:last-child {
    .ant-breadcrumb-separator {
      display: none
    }
  }
}
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}
 .breadcrumb-enter, .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }
.breadcrumb-move {
  transition: all .5s;
}
.breadcrumb-leave-active {
  position: absolute;
}

</style>
