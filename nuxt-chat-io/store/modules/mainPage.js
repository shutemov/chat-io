import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = () => ({
  roomList:[],
})

const mutations = {
  pushMessage(state, payload) {
  }
}

const getters = {
  getRoomMessages: state => {
    return state.roomList
  }
}

export default {state, mutations, getters}
