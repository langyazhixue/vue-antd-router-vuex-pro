<template>
  <a-breadcrumb class="app--breadcrumb--container" separator="/">
    <a-breadcrumb-item
      v-for="(item, $index) in matched"
      :key=" $index"
    >
      <span v-if="$index === (matched.length-1)">{{ item.meta.title }}</span>
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
export default {
  name: 'AppBreadcrumb',
  data() {
    return {
      matched: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => {
        return item.name
      })
      console.log(matched)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
      }
      this.matched = matched
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
