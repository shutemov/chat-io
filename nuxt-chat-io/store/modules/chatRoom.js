import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = () => ({
  roomMessages: [],
  roomUsers: [],
  roomName: null,
  roomAdmin: null
})

const mutations = {
  pushMessage(state, message) {
    state.roomMessages.push(message)
  }
}

const getters = {
  getRoomMessages: state => {
    return state.roomMessages
  },
  getRoomUsers: state => {
    return state.roomUsers
  },
  getRoomName: state => {
    return state.roomUsers
  },
  getRoomAdmin: state => {
    return state.roomUsers
  }
}

export default {state, mutations, getters}
