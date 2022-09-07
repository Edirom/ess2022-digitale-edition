import { createStore } from 'vuex'

export default createStore({
  state: {
    lightOn: true,
    mei: 'howDoWeGetItHere?',
    loading: false
  },
  mutations: {
    TOGGLE_LIGHTS (state) {
      state.lightOn = !state.lightOn
    },
    LOAD_MEI (state, mei) {
      state.mei = mei
    },
    SET_LOADING (state, bool) {
      state.loading = bool
    }
  },
  actions: {
    toggleLights ({ commit }) {
      commit('TOGGLE_LIGHTS')
    },
    loadMEI ({ commit }) {
      commit('SET_LOADING', true)
      fetch('edition.xml')
        .then(res => res.text())
        .then(mei => {
          commit('LOAD_MEI', mei)
          commit('SET_LOADING', false)
        })
        .catch(err => {
          console.log('we broke it: ' + err)
        })
    }
  },
  getters: {
    isLightOn: state => {
      return state.lightOn
    },
    isLoading: state => {
      return state.loading
    }
  },
  modules: {
  }
})
