<template>

<a-layout-content>
  <router-view />
</a-layout-content>
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
  name: 'AppMain'
}
</script>
