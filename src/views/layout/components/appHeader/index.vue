<template>
  <Header :style="{padding: 0}" class="layout--header--bar">
    <div class='layout--header--top'>
      <div class='layout--header--top--left'>
        <Icon 
          @click.native="_collapsedSider" 
          :class="rotateIcon" 
          :style="{margin: '0 20px'}" 
          type="md-menu" 
          size="24">
        </Icon>
        <span>面包屑</span>
      </div>
      <div class='layout--header--top--right'>
        <span>全屏</span>
        <span>换肤</span>
      </div>
    </div>
  </Header>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  computed:{
    isCollapsed(){
      return this.$store.app.isCollapsed
    }
  },
  methods:{
    ...mapMutations({
     _setIsCollapsed :'app/set-isCollapsed'
    }),
    _collapsedSider(){
      this._setIsCollapsed({
        isCollapsed:!this.isCollapsed
      })
    }
  }
}
</script>
<style lang="less" scoped>
.layout--header--bar {
  .layout--header--top {
    display: flex;
    justify-content: space-between;
    .layout--header--top--right,.layout--header--top--left {
      padding: 0 20px;
    }
  }
}
</style>