<template>
  <div class="app--header--logo">
    <div class="app--login--inner">
      <img src="/static/img/logo.png" class="app--login--logo">
      <h1
        class="app--login--text"
        :style="{
          'display': isCollapsed ? 'none' :'inline-block'
        }"
      >
        Vue Antd Admin
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppLogoView',
  props: {
    isCollapsed: {
      type: Boolean
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/variables.less';
@import '~@/styles/mixins.less';
.app--header--logo{
  padding-left:25px;
  line-height: @header-nav-height;
  box-sizing: border-box;
  background-color: @black-4;
  .app--login--inner {
    .app--login--logo{
      height: 30px;
      margin-right: 10px;
  }
  .app--login--text{
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
