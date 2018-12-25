import request from "../utils/request"

class Index {
  static index() {
    return request.get('/api/index/index', {})
  }
}

export default Index
