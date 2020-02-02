import {SET_TOKEN, SET_UPDATING} from "../mutations";
import {LOGIN} from "../actions";

const state = () => ({
  api_token: undefined,
  updating: false
})

const mutations = {
  [SET_UPDATING](state, updating) {
    state.updating = updating
  },

  [SET_TOKEN](state, token) {
    console.log('mutation set_token', token)
    console.log('mutation set_token', state)

    state.api_token = token
  }
}

const actions = {

  async [LOGIN]({commit, dispatch}, formData) {
    const token = await new Promise(resolve => {
      let b = setTimeout(() => {
        resolve('mock-data-token')
      }, 2000)
    })

    dispatch('SET_TOKEN', token)
  },

  [SET_TOKEN]({commit}, token) {
    commit('SET_TOKEN', token)
  }
}

const getters = {
  isAuth: state => {
    return state.api_token
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
