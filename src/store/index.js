
import { createStore } from 'vuex'
import auth from '@/modules/auth/store'
import product from '@/modules/products/store'
// Create a new store instance.
const store = createStore({
  modules: [auth, product]
})
