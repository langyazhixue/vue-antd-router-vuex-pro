<template>
  <a-layout class="app--layout--container">
    <app-side-nav />
    <a-layout>
      <app-header />
      <app-main />
      <right-panel v-if="showSettings">
        <div>test</div>
      </right-panel>
    </a-layout>
  </a-layout>
</template>
<script>
import AppMain from './components/appMain/index'
import AppHeader from './components/appHeader/index'
import AppSideNav from './components/sideNav/index'
export default {
  name: 'AppLayout',
  components: {
    AppMain,
    AppHeader,
    AppSideNav
  },
  computed: {
    showSettings() {
      return this.$store.state.settings.showSettings
    }
  }
}
</script>

