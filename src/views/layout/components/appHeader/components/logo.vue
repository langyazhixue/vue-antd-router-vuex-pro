<template>
  <div class='app--header--logo'>
    <div class='app--login--inner'>
      <embed src="/static/img/logo.svg" class="app--login--logo" type="image/svg+xml">
      <embed src="/static/img/text.svg" class="app--login--text" type="image/svg+xml">
    </div>
  </div>
</template>
<script>
export default {
  name:'AppLogoView'
}
</script>
<style lang="less" scoped>
@import '~@/styles/variables.less';
@import '~@/styles/mixins.less';
.app--header--logo{
  padding-left:20px;
  line-height: @header-height;
  box-sizing: border-box;
  .app--login--inner {
    border-right:1px solid @border;
    .app--login--logo{
      height: 30px;
      margin-right: 10px;
      position: relative;
      top:10px;
  }
  .app--login--text{
      width: auto;
      height: 16px;
      position: relative;
      top:6px;
    }
  }
}
</style>
