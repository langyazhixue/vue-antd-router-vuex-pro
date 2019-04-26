<template>
  <a-layout-header
  theme='light'
  class='app--layout--header--container'
  >
      <div class='app--layout--header--left'>
        <app-logo-view/>
      </div>
      <div class='app--layout--header--right'>

      </div>
  </a-layout-header>
</template>
<script>
import { mapMutations } from 'vuex'
import AppLogoView from './components/logo'
export default {
  name: 'AppHeader',
  data(){
    return {
      styleObject:{
        'height':'84px'
      }
    }
  },
  components:{
    AppLogoView
  },
  computed:{
    isCollapsed(){
      return this.$store.state.app.isCollapsed
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

</style>