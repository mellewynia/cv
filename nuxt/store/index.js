
import Vuex from 'vuex'

import general from '~/static/content/general.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      dateUpdate: process.env.dateUpdate,
      general,
      contents: process.env.contents
    }
  })
}

export default createStore
