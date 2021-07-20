import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/views/Home.vue'
import Profile from '/src/views/About_me.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
