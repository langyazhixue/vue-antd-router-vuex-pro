
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
  CHANGE_SETTING: (state, payload) => {
    if (state.hasOwnProperty(payload.key)) {
      state[payload.key] = payload.value
    }
  }
}

const actions = {
  changeSetting({ commit }, payload) {
    commit('CHANGE_SETTING', payload)
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
