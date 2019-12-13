
import axios from 'axios'
import { message } from 'ant-design-vue'
import store from '@/store'

function showErrorMessage(errMessage) {
  const content = errMessage || 'error'
  message.error(content, 5 * 1000)
}

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url基础地址，解决不同数据源url变化问题
  timeout: 15 * 1000
  // withCredentials: true // 跨域时若要发送cokkies需要设置该选项
})

// 请求拦截
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截

service.interceptors.response.use(
  response => {
    // 进返回数据部分
    const res = response.data
    // 仅仅返回数据部分
    if (res.code !== 1) {
      showErrorMessage(res.message)
      //  假设：10008 - 非法令牌； 10012-其他客户端已经登陆 10014-令牌过期
      if (res.code === 10008 || res.code === 10012 || res.code === 10014) {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    showErrorMessage(error.message)
    return Promise.reject(error)
  }
)

export default service
