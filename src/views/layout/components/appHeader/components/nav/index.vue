<template>
  <div class='app--header--nav'>
      <div>

      </div>
      <div>

      </div>
  </div>
</template>
<script>
export default {
  name:'AppHeaderNav'
}
</script>
<style lang="less" scoped>
@import '~@/styles/variables.less';
@import '~@/styles/mixins.less';
.app--header--nav {
  height: @header-nav-height;
  line-height: @header-nav-height;
  border-bottom:1px solid  @border;
}
</style>