import mpx from '@mpxjs/core'
import mpxFetch from '@mpxjs/fetch'

mpx.use(mpxFetch)

import store from '../store/user'
import Config from "../config/index"
import MockHandle from "../utils/mock"


mpx.xfetch.interceptors.request.use(function (config) {
  console.log(config)
  // 也可以返回promise
  return config
})

mpx.xfetch.interceptors.response.use(function (res) {
  console.log(res)
  // 也可以返回promise
  return res
})

const request = {
  done(url, data = {}, type = "get") {
    if (Config.apiMock) {
      return MockHandle(url)
    }
    url = url.indexOf('https') === -1 ? Config.apiUrl + url : url
    return mpx.xfetch.fetch({
      url: url,
      method: type,
      data: data
    })
  },
  post(url, data = {}) {
    return request.done(url, data, "POST")
  },
  get(url, data = {}) {
    return request.done(url, data, "GET")
  }
};

export default request
