import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Lab from '../components/Lab.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login},
    {path: '/lab', component: Lab}
]

const  router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
