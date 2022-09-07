import { createStore } from 'vuex'

export default createStore({
  state: {
    lightOn: true
  },
  mutations: {
    TOGGLE_LIGHTS (state) {
      state.lightOn = !state.lightOn
    }
  },
  actions: {
    toggleLights ({ commit }) {
      commit('TOGGLE_LIGHTS')
    }
  },
  getters: {
    isLightOn: state => {
      return state.lightOn
    }
  },
  modules: {
  }
})
