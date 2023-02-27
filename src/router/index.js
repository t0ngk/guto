import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login}
]

const  router = createRouter({
    history: createWebHistory(),
    routes
})

export default router