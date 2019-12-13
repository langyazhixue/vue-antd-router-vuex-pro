
// 用户状态，用户信息
import { login, getInfo } from '@/api/user'
const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token'),
    // 用户路由信息
    roles: []
  },
  mutations: {
    'set_token': (state, payload) => {
      state.token = payload.token
    },
    'set_roles': (state, payload) => {
      state.roles = payload.roles
    }
  },
  actions: {
    login({ commit }, payload) {
      const userInfo = payload.userInfo
      return login(userInfo)
        .then(res => {
          commit('set_token', {
            token: res.data
          })
          localStorage.setItem('token', res.data)
        })
        // const { username, password } = userInfo
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     if ((username === 'admin') && password === '123456') {
      //       commit('set_token', {
      //         token: username
      //       })
      //       localStorage.setItem('token', username)
      //       resolve()
      //     } else {
      //       reject('用户名、密码错误')
      //     }
      //   }, 1000)
      // })
    },
    getInfo({ commit, state }) {
      // return new Promise(resolve => {
      //   setTimeout(() => {
      //     const roles = state.token === 'admin' ? ['admin'] : ['editor']
      //     commit('set_roles', {
      //       roles
      //     })
      //     resolve({ roles })
      //   }, 1000)
      // })
      return getInfo(state.token)
        .then(({ data: roles }) => {
          commit('set_roles', {
            roles
          })
          return { roles }
        })
    },
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('set_token', {
          username: ''
        })
        commit('set_roles', {
          roles: []
        })
        localStorage.removeItem('token')
        resolve()
      })
    }
  }
}
export default user
