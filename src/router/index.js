import {createRouter, createWebHistory} from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Lab from '../components/Lab.vue'
import Register from '../components/Register.vue'
import About from '../components/About.vue'
import Appointment from '../components/Appointment.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login},
    {path: '/lab', component: Lab},
    {path: '/Register', component: Register},
    {path: '/About', component: About},
    {path: '/Appointment', component: Appointment},
]

const  router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
