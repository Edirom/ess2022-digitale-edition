import { createStore } from 'vuex'

const parser = new DOMParser()

export default createStore({
  state: {
    lightOn: true,
    mei: null,
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
    },
    meiLoaded: state => {
      return state.mei !== null
    },
    meiAsText: state => {
      return state.mei
    },
    meiQuestion: state => {
      if (state.mei === null) {
        return null
      }
      const mei = parser.parseFromString(state.mei, 'application/xml')
      // const notes = mei.querySelectorAll('rest')
      const title = mei.querySelector('title').textContent
      return title
    },
    sources: state => {
      if (state.mei === null) {
        return []
      }
      const mei = parser.parseFromString(state.mei, 'application/xml')
      // const notes = mei.querySelectorAll('rest')
      const elementsWithSourceAttribute = mei.querySelectorAll('*[source]')

      const obj = {}
      elementsWithSourceAttribute.forEach(elem => {
        const sources = elem.getAttribute('source')
        sources.split(' ').forEach(source => {
          obj[source] = source
        })
      })

      return Object.keys(obj)
    }
  },
  modules: {
  }
})
