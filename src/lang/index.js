import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index'
import enLocale from './en'
import zhLocale from './zh'
Vue.use(VueI18n)
const messages = {
  'en_US': {
    ...enLocale
  },
  'zh_CN': {
    ...zhLocale
  }
}
function getLanguage() {
  return store.state.app.language || 'zh_CN'
}
const i18n = new VueI18n({
  // set locale
  // options: zh_CN | en_US
  locale: getLanguage(),
  messages
})

export default i18n
