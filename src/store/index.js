import { createApp } from 'vue'
import { createStore } from 'vuex'
import AuthModule from '@/modules/auth/store'
import ProductModule from '@/modules/products/store'
// Create a new store instance.
const store = createStore({
  modules: [AuthModule, ProductModule]
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)