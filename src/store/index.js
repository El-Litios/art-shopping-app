
import { createStore } from 'vuex'
import auth from '@/modules/auth/store/index'
import products from '@/modules/products/store/index'
// Create a new store instance.
const store = createStore({
  modules: {
    auth,
    products
  }
})

export default store
