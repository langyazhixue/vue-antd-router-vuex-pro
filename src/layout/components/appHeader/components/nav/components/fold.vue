<template>
  <div class="app--fold--container" @click="handlerCollapse">
    <a-icon :type="isCollapsed ? 'menu-unfold' : 'menu-fold'" />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppFold',
  computed: {
    isCollapsed() {
      return this.$store.state.app.isCollapsed
    }
  },
  methods: {
    ...mapMutations({
      '_setIsCollapsed': 'app/set-isCollapsed'
    }),
    handlerCollapse() {
      this._setIsCollapsed({
        isCollapsed: !this.isCollapsed
      })
    }
  }
}
</script>

<style lang="less" scoped>
.app--fold--container{
  height: 100%;
  padding-left:14px;
  padding-right:14px;
  display:inline-block;
  position: relative;
  top:2px;
  .anticon{
    font-size:20px;
    cursor: pointer;
  }
}
</style>

