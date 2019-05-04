<template>
  <a-button size="small" @click="handlerChangeLanguage">
    {{ language === 'zh_CN' ? 'english' : '中文' }}
  </a-button>
</template>
<script>
//  语言国际化
import { mapMutations } from 'vuex'
export default {
  name: 'AppLanguage',
  computed: {
    language() {
      return this.$store.state.app.language
    }
  },
  methods: {
    ...mapMutations({
      '_setLanguage': 'app/set-language'
    }),
    handlerChangeLanguage() {
      const language = this.language === 'zh_CN' ? 'en_US' : 'zh_CN'
      this.$i18n.locale = language
      this._setLanguage({
        language
      })
      this.$message.success('Switch Language Success')
    }
  }
}
</script>

