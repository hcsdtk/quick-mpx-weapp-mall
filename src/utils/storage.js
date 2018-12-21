export default {
  get(key) {
    let data = wx.getStorageSync(key)
    if (typeof data === "string" && data.indexOf('{') !== -1 && data.indexOf('}') !== -1 && data.indexOf(':') !== -1) {
      data = JSON.parse(data)
    }
    return data
  },
  set(key, data,) {
    if (data instanceof Object) {
      data = JSON.stringify(data)
    }
    if (data instanceof Array && String(data).indexOf('object')) {
      data = JSON.stringify(data)
    }
    wx.setStorageSync(key, data)
  },
  remove(key) {
    wx.removeStorageSync(key)
  }
}
