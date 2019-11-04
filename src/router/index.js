import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// We import the components this way to lazy load them.
const NotFound = () => import("../components/notFound.vue");
const HelloWorld = () => import("../components/home/HelloWorld.vue");
const Login = () => import("../components/login/login.vue");
const Calendar = () => import("../components/calendar/calendarList.vue")
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
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});

// router.beforeEach((to, from, next) => {
// })

export default router;