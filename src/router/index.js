import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Lab from "../components/Lab.vue";
import Register from "../components/Register.vue";
import About from "../components/About.vue";
import Appointment from "../components/Appointment.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/lab", component: Lab },
  { path: "/register", component: Register },
  { path: "/about", component: About },
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
