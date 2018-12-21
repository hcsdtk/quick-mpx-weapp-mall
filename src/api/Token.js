import store from '../store/user'
import Config from "../config";

class Token {
  static requestToken(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: Config.apiUrl + url,
        data: data,
        method: "POST",
        success: res => {
          resolve(res.data)
        },
        fail: e => {
        }
      })
    })
  }

  static refreshToken() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          this.requestToken('/api/login/index', {code: res.code}).then(res => {
            resolve(res)
          })
        }
      })
    })
  }

  static getToken() {
    return new Promise((resolve) => {
      console.log(store.getters.checkTokenExpire);
      if (store.getters.checkTokenExpire) {
        this.refreshToken().then(res => {
          store.dispatch('modifyLoginInfo', res.data);
          resolve(res.data.token)
        })
      } else {
        resolve(store.getters.token)
      }
    })
  }
}

export default Token
