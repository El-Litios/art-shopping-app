import state from './states'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const ProductsModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default ProductsModule