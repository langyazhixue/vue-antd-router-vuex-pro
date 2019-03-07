import Vue from 'vue'
import Vuex from 'vuex'
// import test from './modules/test'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    userName:111
  },
  mutations: {
    SET_NAME:(state,payload) => {
      state.userName = payload.userName
    }
  }
})

export default store