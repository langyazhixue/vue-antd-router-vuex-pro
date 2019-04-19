<template>
  <Content> 
    <router-view />
  </Content>

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
