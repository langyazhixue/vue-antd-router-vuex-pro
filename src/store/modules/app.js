
const app = {
  namespaced: true,
  state: {
    isCollapsed: false, // 左边菜单是否收缩
    language: 'zh_CN' // zh_CN  en_US
  },
  mutations: {
    'set-isCollapsed': (state, payload) => {
      state.isCollapsed = payload.isCollapsed
    },
    'set-language': (state, payload) => {
      state.language = payload.language
    }
  }
}
export default app
