import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './states'

const myCustomModule = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
}
export default myCustomModule
