import request from "../utils/request"

class Auth {
  static login() {
    return request.get('/login/index')
  }
}

export default Auth
