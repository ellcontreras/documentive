import Vue from 'vue'
import Vuex from 'vuex'

import { UPDATE_USER_STATE } from "./constants";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedIn: false,
    user: []
  },
  mutations: {
    [UPDATE_USER_STATE]: (state, payload) => {
      state.user = payload;
      state.logedIn = !state.logedIn;
    }
  },
  actions: {
    [UPDATE_USER_STATE]: ({ commit }) => {
      commit(UPDATE_USER_STATE);
    }
  },
  modules: {
  }
})
