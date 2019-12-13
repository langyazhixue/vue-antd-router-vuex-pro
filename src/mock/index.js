
import Mock from 'mockjs'
const data = {
  'id': '@guid',
  'name': '@cname'
}
Mock.mock('/dev-api/api/test', 'post', data)

export default Mock
