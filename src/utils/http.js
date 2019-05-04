/**
 * 针对业务对axios做简单的封装
 */
import axios from 'axios'
// import { Message } from 'antd'
// import apiMap from '@/api/index'
// import router from '@/router/index'
// import logout from '@/utils/logout.js'
// import { getAuthModel } from '@/utils/auth'
// import store from '@/store/index'
// import local from '@/utils/local'

const axiosInstance = axios.create()
/*
  设置超时15秒
*/
axiosInstance.defaults.timeout = 15 * 1000
axiosInstance.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

/*
  error弹窗
*/
const showErrorMessage = function(msg) {
  console.log('err')
  // Message.error({ content: msg })
}

/*
  request
*/
axiosInstance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

/*
  response
*/
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

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
          } else {
            let errorResponse = ''
            if (statusCode === 404) {
              errorResponse = 'Not Found'
            } else if (statusCode === 500) {
              errorResponse = err.response.data.message || '网络异常'
            } else {
              errorResponse = err.response.data.message
            }
            if (!silent) {
              showErrorMessage(errorResponse || '哎呀 网络塞车了 请客官重新操作')
            }
            reject({ message: errorResponse })
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
