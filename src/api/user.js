import request from '@/utils/request'

export function login(data) {
  // 这个是一个promise,方便外层去调用
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
