export default {
    name: 'administration',
    component: () => import(/* webpackChunkName: 'administration layout' */ '@/modules/administration/layouts/AdministrationLayout.vue'),
    children: [
         {
            path: '',
            name: 'Administation',
            component: () => import(/* webpackChunkName: 'administration list' */  '@/modules/administration/views/Administration.vue'),
        }
    ]
}