<template>
  <div clss='layout'>
    <Layout>
      <SideNav/>
      <Layout>
          <Header/>
          <AppMain/>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import AppMain from './components/appMain'
import Header from './components/appHeader/index'
import SideNav from './components/sideNav/index'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Header,
    SideNav
  }
}
</script>

