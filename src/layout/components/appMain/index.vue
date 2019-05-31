<template>
  <transition name="fade-transform" mode="out-in">
    <a-layout-content :key="key">
      <router-view />
    </a-layout-content>
  </transition>
  <!-- <el-main>
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
     <router-view />
  </el-main> -->
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
