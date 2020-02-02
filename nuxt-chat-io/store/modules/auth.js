import {SET_TOKEN, SET_UPDATING} from "../mutations";
import {LOGIN, REGISTRATION} from "../actions";

const state = () => ({
  api_token: undefined,
  updating: false
})

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

    try {
      const {JWToken} = await this.$axios.$post('/auth/login', formData)
      dispatch('SET_TOKEN', JWToken)
    } catch (e) {
      console.log('e', e)
    }
  },

  async [REGISTRATION]({commit, dispatch}, formData) {

    try {
      const user = await this.$axios.$post('/auth/create', formData)
    } catch (e) {
      console.log('e', e)
    }
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
