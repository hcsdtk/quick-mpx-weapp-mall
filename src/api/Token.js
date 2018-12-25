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
      const wxParams = {}
      wx.login({
        success: res => {
          wxParams.code = res.code
          this.getUserInfo().then(result => {
            wxParams.encryptedData = result.encryptedData
            wxParams.iv = result.iv
            wxParams.userInfo = result.userInfo
            store.dispatch('modifyUserInfo', result.userInfo);
            this.requestToken('/plan/login/miniAppsLogin', wxParams).then(res => {
              resolve(res)
            })
          })
        }
      })
    })
  }

  static getUserInfo() {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: result => {
                resolve(result)
              }
            })
          } else {
            getCurrentPages()[getCurrentPages().length - 1].selectComponent('#loginDialog').open().then(result => {
              resolve(result)
            })
          }
        }
      })
    });
  }

  static getToken() {
    return new Promise((resolve) => {
      if (store.getters.checkTokenExpire) {
        this.refreshToken().then(res => {
          const data = {
            token: res.data.member_id,
            expire_time: -1
          }
          store.dispatch('modifyLoginInfo', data);
          resolve(data.token)
        })
      } else {
        resolve(store.getters.token)
      }
    })
  }
}

export default Token
