import {createStore} from '@mpxjs/core'

const CartStore = createStore({
  state: {
    list: [],
  },
  getters: {
    cartInfo: state => {
      let info = {
        price: 0,
        num: 0
      }
      state.list.forEach(item => {
        info.price = Math.round(info.price * 100 + (item.price * item.num) * 100) / 100
        info.num = Math.round(info.num * 100 + item.num * 100) / 100
      })
      return info
    }
  },
  mutations: {
    add(state, payload) {
      if (payload.index === undefined) {
        payload.index = state.list.findIndex(item => {
          return (item.id === payload.goods.id)
        })
      }
      if (payload.goods.num === 0) {
        state.list.splice(payload.index, 1)
        return false
      }
      if (payload.index === -1) {
        state.list.push(payload.goods)
      } else {
        let cartObject = JSON.parse(JSON.stringify(state.list))
        cartObject[payload.index].num = payload.goods.num
        state.list = cartObject
      }
    }
  },
  actions: {
    addCart({commit}, payload) {
      commit('add', payload)
    }
  }
})

export default CartStore
