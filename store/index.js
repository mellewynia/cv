
import Vuex from 'vuex'

import general from '~/static/content/general.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      dateUpdate: process.env.dateUpdate,
      general,
      contents: process.env.contents
    },
    getters: {
      getClientById: (state) => (id) => {
        return state.contents.clients.find(client => client.id === id)
      }
    }
  })
}

export default createStore
