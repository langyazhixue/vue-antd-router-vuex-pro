<template>
  <div class='app--header--nav'>
      <div class='app--header--nav--left'>
          <app-fold/>
          <app-breadcrumb/>
      </div>
      <div class='app--header--nav--right'>

      </div>
  </div>
</template>
<script>
import AppFold  from './components/fold.vue'
export default {
  name:'AppHeaderNav',
  components:{
    AppFold
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/variables.less';
@import '~@/styles/mixins.less';
.app--header--nav {
  height: @header-nav-height;
  line-height: @header-nav-height;
  border-bottom:1px solid  @border;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .app--header--nav--left {
    
  }
}
</style>