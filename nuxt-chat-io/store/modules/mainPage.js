import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


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
    userNum: 2
  }, {
    id: 2,
    title: '3 room',
    description: ' small description 3',
    userNum: 3
  }],
})

const mutations = {
  pushMessage(state, payload) {
  }
}

const getters = {
  getRooms: state => {
    return state.roomList
  }
}

export default {state, mutations, getters}
