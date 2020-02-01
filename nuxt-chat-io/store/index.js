import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import chatRoom from './modules/chatRoom'
import mainPage from './modules/mainPage'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production'

const store = () => new Vuex.Store({
  modules: {
    chatRoom,
    mainPage,
    auth
  },
  strict: debug,
})

export default store
