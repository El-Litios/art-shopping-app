export default {
    name: 'products',
    component: () => import(/* webpackChunkName: 'product layout' */ '@/modules/products/layouts/ProductsLayout.vue'),
    children: [
         {
            path: '',
            name: 'Products',
            component: () => import(/* webpackChunkName: 'products list' */  '@/modules/products/views/Prducts.vue'),
        }
    ]
}