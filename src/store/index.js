import journal from '../modules/daybook/store/journal'
import auth from '../modules/auth/store/auth'
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    auth,
    journal,
  },
})

export default store
