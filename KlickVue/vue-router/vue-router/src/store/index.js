import { createStore } from 'vuex'

export default createStore({
  state: {
    serie: {
      serieEscolhida: ''
    }
  },
  getters: {
    listenState(state) {
      return state.serie.serieEscolhida
    }
  },
  mutations: {
    changeSerie(state, data) {
      console.log(data)
      state.serie.serieEscolhida = data
    }
  },
  actions: {
    changeSerie({commit}, data) {
      commit('changeSerie', data)
    }
  },
  modules: {
  }
})
