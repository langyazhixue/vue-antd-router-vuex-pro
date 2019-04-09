/**
 * 针对业务对axios做简单的封装
 */
import axios from 'axios'
import { Message } from 'element-ui'
// import apiMap from '@/api/index'
// import router from '@/router/index'
// import logout from '@/utils/logout.js'
// import { getAuthModel } from '@/utils/auth'
// import store from '@/store/index'

// import local from '@/utils/local'

const axiosInstance = axios.create()
axiosInstance.defaults.timeout = 15 * 1000

const showErrorMessage = function(msg) {
  Message.error({ message: msg })
}

axiosInstance.interceptors.request.use(
  config => {
    config.headers = {
      'Content-type':'application/json'
    }
    // if (config.url.indexOf(apiMap.login) === -1) {
      // const headers = getAuthModel()
      // if (config.url.indexOf(apiMap.refreshToken) !== -1) {
      //   headers['Authorization'] = store.state.user.base.refreshToken
      // }
      // Object.assign(config.headers, headers)

      /* const diffInSeconds = Math.floor((local.get('expire') - new Date().getTime()) / 1000)
      const refDiffInSeconds = Math.floor((local.get('refreshExpire') - new Date().getTime()) / 1000)
      if (diffInSeconds > 0) {
        config.headers.Authentication = local.get('token') || ''
      } else if (diffInSeconds < 0 && refDiffInSeconds > 0) {
        config.headers.Authentication = local.get('refreshToken') || ''
      } else if (diffInSeconds < 0 && refDiffInSeconds < 0) {
        showErrorMessage('请重新登陆')
        logout()
      } */
    //   config.headers.Authentication = local.get('token') || ''
    //   config.headers.userId = local.get('userId') || ''
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

/**
 * 返回的error格式 { message: '' }
 */
const httpInstance = {
  handleResponse(instance, options = {}) {
    const { silent } = options
    return new Promise((resolve, reject) => {
      instance.then(response => {
        const responseData = response.data
        if (responseData.errmsg) {
          showErrorMessage(responseData.errmsg)
          reject({ code: responseData.errcode, message: responseData.errmsg })
        } else {
          resolve(responseData)
        }
      }).catch(err => {
        if (err.code === 'ECONNABORTED') { // 超时
          if (!silent) {
            showErrorMessage('请求超时')
          }
          reject({ message: '请求超时' })
        } else {
          const statusCode = err.response.status
          if (statusCode === 401) {
            showErrorMessage('请重新登陆')
            logout()
          } else {
            let errorResponse = ''
            if (statusCode === 500) {
              errorResponse = err.response.data.message || '网络异常'
            } else {
              errorResponse = err.response.data.message
            }
            reject({ message: errorResponse })
            if (!silent) {
              showErrorMessage(errorResponse || '哎呀 网络塞车了 请客官重新操作')
            }
          }
        }
      })
    })
  },
  get(url, options) {
    return this.handleResponse(axiosInstance.get(url, options), options)
  },
  post(url, data, options) {
    return this.handleResponse(axiosInstance.post(url, data, options), options)
  },
  put(url, data, options) {
    return this.handleResponse(axiosInstance.put(url, data, options), options)
  },
  delete(url, options) {
    return this.handleResponse(axiosInstance.delete(url, options), options)
  }
}

export const http = httpInstance

export default {
  install(Vue) {
    Vue.prototype.$http = httpInstance
  }
}
