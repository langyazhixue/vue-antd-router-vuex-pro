const bodyParser = require('body-parser')
const mock = (app) => {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.post('/dev-api/user/login', (req, res) => {
    console.log(req.body)
    const { username } = req.body
    if (username === 'admin') {
      res.json({
        code: 1,
        data: username
      })
    } else {
      res.json({
        code: 10204,
        message: '用户名或密码错误'
      })
    }
  })
  app.get('/dev-api/user/info', (req, res) => {
    const auth = req.headers['authorization']
    const roles = auth.split(' ')[1] === 'admin' ? ['admin'] : ['editor']
    res.json({
      code: 1,
      data: roles
    })
  })
}
module.exports = mock
