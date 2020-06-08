import request from '../utils/request'

class Auth {
  static login () {
    return request.get('/api/index/index', {
      member_id: 1,
      bigVersion: 'v3',
      version: '3.1.1.8',
      scene: 1001
    })
  }
}

export default Auth
