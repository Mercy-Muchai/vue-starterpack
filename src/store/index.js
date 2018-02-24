import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_SUB } from './actionTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Subcribe: ''
  },
  mutations: {
    [UPDATE_SUB] (state, newSubcribe) {
      state.Subcribe = newSubcribe
    }
  }
})
