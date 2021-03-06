import Vue from 'vue'
import Vuex from 'vuex'
import {SEND_NEW_MESSAGE} from "../mutations";

Vue.use(Vuex)


const state = ()=> ({
  messages: [
    {
      author: 'author 1',
      body: 'message text 1',
      date: new Date().toLocaleTimeString()
    },
    {
      author: 'author 2',
      body: 'message text 2',
      date: new Date().toLocaleTimeString()
    },
    {
      author: 'author 3',
      body: 'message text 3',
      date: new Date().toLocaleTimeString()
    },
    {
      author: 'author 4',
      body: 'message text 4',
      date: new Date().toLocaleTimeString()
    }
  ],
  users: [
    {
      username: 'username 1',
      isOnline: true
    },
    {
      username: 'username 2',
      isOnline: false
    },
    {
      username: 'username 3',
      isOnline: true
    },
  ],
  roomName: null,
  roomAdmin: null
})

const mutations = {
  [SEND_NEW_MESSAGE](state, message){
    state.messages.push(
      {
        author: 'author from mutation',
        body: message,
        date: new Date().toLocaleTimeString()
      }
    )
  }
}

const getters = {
  getRoomMessages: state => {
    return state.messages
  },
  getRoomUsers: state => {
    return state.users
  },
  getRoomName: state => {
    return state.roomName
  },
  getRoomAdmin: state => {
    return state.roomAdmin
  }
}

export default {state, mutations, getters}
