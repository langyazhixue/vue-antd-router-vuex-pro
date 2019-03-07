export default {
  namespaced:true,
  state:{
    userName:111
  },
  mutations: {
    SET_NAME:(state,payload) => {
      state.userName = payload.userName
    }
  }
}