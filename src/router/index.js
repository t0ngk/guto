import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Appointment from "../views/Appointment.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/appointment", component: Appointment },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const publicPages = ["/login", "/register", "/", "/petcare", "/petheath"];
    const authRequired = !publicPages.includes(to.path);
    const userId = localStorage.getItem("user");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = userId
      ? users.find((u) => {
          return u.id == userId;
        })
      : null;
  
    //Check If User is Logged In And Trying To Access Login Or Register Page.
    if (["/login", "/register"].includes(to.path) && user) {
      return next("/");
    }
  
    //Check If User is Not Logged In And Trying To Access Other Pages.
    if (authRequired && !user) {
      return next("/login");
    }
  
    next();
  });
  
  export default router;