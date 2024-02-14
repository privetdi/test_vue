import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../pages/Catalog.vue'
import Busket from '../pages/Busket.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'catalog', path: '/catalog', component: Catalog, alias: '/' },
        { name: 'busket', path: '/busket', component: Busket },
    ]

})