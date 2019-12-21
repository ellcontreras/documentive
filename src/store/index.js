import Vue from 'vue'
import Vuex from 'vuex'

import { UPDATE_USER } from "./constants";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    [UPDATE_USER](state, { user }) {
      Vue.set(state, 'user', user)
    }
  },
  getters: {
    user: state => state.user
  },
  actions: {
  },
  modules: {
  }
})
