export const state = () => ({
  message: ''
})

export const getters = {
  getMessage: (state) => state.message,
  existsMessage: (state) => state.message !== ''
}

export const mutations = {
  setMessage(state, message) {
    state.message = message
  },
  clearMessage(state) {
    state.message = ''
  },
}

export const actions = {
  setMessage( { commit }, message) {
    commit('setMessage', message)
  },
  clearMessage( { commit } ) {
    commit('clearMessage')
  }
}