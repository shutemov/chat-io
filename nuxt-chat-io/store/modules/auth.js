import {SET_TOKEN, SET_UPDATING} from "../mutations";
import {LOGIN} from "../actions";

const state = {
  api_token: null,
  updating: false
}

const mutations = {
  [SET_UPDATING](state, updating) {
    state.updating = updating
  },

  [SET_TOKEN](state, token) {
    state.api_token = token
  }
}

const actions = {
  async [LOGIN]({commit, dispatch}, formData) {
    const token = await new Promise(resolve => {
      setTimeout(() => {
        resolve('mock-data-token')
      }, 2000)
    })

    dispatch('SET_TOKEN',token)
  },

  [SET_TOKEN]({commit}, token) {
    commit('SET_TOKEN', token)
  }
}

export default {
  state,
  mutations,
  actions
}
