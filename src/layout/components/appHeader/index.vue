<template>
  <a-layout-header
    theme="light"
    class="app--layout--header--container"
  >
    <app-nav />
  </a-layout-header>
</template>
<script>
import { mapMutations } from 'vuex'
import AppNav from './components/nav/index'
export default {
  name: 'AppHeader',
  components: {
    AppNav
  },
  data() {
    return {
      styleObject: {
        'height': '84px'
      }
    }
  },
  computed: {
    isCollapsed() {
      return this.$store.state.app.isCollapsed
    }
  },
  methods: {
    ...mapMutations({
      _setIsCollapsed: 'app/set-isCollapsed'
    }),
    _collapsedSider() {
      this._setIsCollapsed({
        isCollapsed: !this.isCollapsed
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
