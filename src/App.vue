<template>
  <a-locale-provider :locale="language==='zh_CN' ? zh_CN : en_US">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en_US from 'ant-design-vue/lib/locale-provider/en_US'

export default {
  name: 'App',
  data() {
    return {
      zh_CN,
      en_US
    }
  },
  computed: {
    language() {
      return this.$store.state.app.language
    }
  },
  watch: {
    language: {
      handler(newVal) {
        if (newVal === 'zh_CN') {
          this.$moment.locale('zh-cn')
        } else {
          this.$moment.locale('en')
        }
      },
      immediate: true
    }
  },
  created() {
    console.log(this.$options)
  },
  mounted() {
    // document.getElementById('app').appendChild(component.$el)
  }
}
</script>
