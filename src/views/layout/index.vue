<template>
    <a-layout class='app--layout--container'>
        <app-header/>
      <a-layout>
        <app-side-nav/>
        <app-main/>
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
  }
}
</script>


