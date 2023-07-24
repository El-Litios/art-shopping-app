// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AuthRoutes from '@/modules/auth/router'
import ProductsRoutes from '@/modules/products/router'
import AdministationRoutes from '@/modules/administration/router'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/auth',
    ...AuthRoutes
  },
  {
    path: '/products',
    ...ProductsRoutes
  },
  {
    path: '/administration',
    ...AdministationRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
