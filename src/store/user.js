import {createStore} from '@mpxjs/core'

const UserStore = createStore({
  state: {
    token: "",
  },
  getters: {
    token: state => state.token
  },
  mutations: {
    modifyToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    modifyToken({commit}, payload) {
      commit('modifyToken', payload)
    }
  }
})
export default UserStore
