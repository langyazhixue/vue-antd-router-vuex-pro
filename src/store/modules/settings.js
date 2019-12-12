
import defaultSettings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings
const state = {
  theme: 'red',
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
}
const mutations = {
  'change-setting': (state, payload) => {
    if (state.hasOwnProperty(payload.key)) {
      state[payload.key] = payload.value
    }
  }
}

const actions = {
  changeSetting({ commit }, payload) {
    commit('change-setting', payload)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
