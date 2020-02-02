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

    try {
      console.log("formData", formData)
      const {JWToken} = await this.$axios.$post('/auth/login', formData)
      dispatch('SET_TOKEN', JWToken)
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
