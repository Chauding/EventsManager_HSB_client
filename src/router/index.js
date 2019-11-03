import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// We import the components this way to lazy load them.
const NotFound = () => import("../components/notFound.vue");
const HelloWorld = () => import("../components/HelloWorld.vue");
const Login = () => import("../components/login/login.vue");
// The routes for the project.
const routes = [{
    path: "*",
    component: NotFound
  },
  {
    path: "/notFound",
    name: "notFound",
    component: NotFound
  },
  {
    path: "/dashboard",
    name: "hellowWorld",
    component: HelloWorld
  },
  {
    path: "/login",
    name: "login",
    component: Login

  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

// router.beforeEach((to, from, next) => {
// })

export default router;