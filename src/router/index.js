import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
    { path: "/", component: Home },
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