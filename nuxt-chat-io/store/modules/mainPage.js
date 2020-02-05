import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {GET_ROOM_LIST} from "../actions";
import {SET_ROOMS_TO_ROOM_LIST} from "../mutations";

const state = () => ({
  roomList: [{
    id: 0,
    title: '1 room',
    description: ' small description 1',
    userNum: 1,
    isPassword: true,
  }, {
    id: 1,
    title: '2 room',
    description: ' small description 2',
    userNum: 2,
    isPassword: false,
  }, {
    id: 2,
    title: '3 room',
    description: ' small description 3',
    userNum: 3,
    isPassword: true,
  }],
})

const mutations = {
  [SET_ROOMS_TO_ROOM_LIST](state, payload) {
    console.log('[SET_ROOMS_TO_ROOM_LIST]', payload)
    state.roomList = [].concat(payload)
  }
}

const actions = {
  async [GET_ROOM_LIST]({commit}) {
    try {
      console.log('[GET_ROOM_LIST]')
      const roomList = await this.$axios.$get('/mainPage/getRooms')
      commit('SET_ROOMS_TO_ROOM_LIST', roomList)
    } catch (e) {
      console.log('e', e)
    }
  }
}

const getters = {
  getRooms: state => {
    return state.roomList
  }
}

export default {state, mutations, actions, getters}
