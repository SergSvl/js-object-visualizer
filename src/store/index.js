import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    startPage: '',
    notifyPosition: 'top-left',
  },
  getters: {
    startPage(state){
      return state.startPage
    },
  },
  mutations: {
    setStartPage(state, name){
      state.startPage = name
    },
  },
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production',
  // env: process.env,
  // base: process.env.BASE_URL,
  // process: process,
})

