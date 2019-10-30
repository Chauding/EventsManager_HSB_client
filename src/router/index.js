import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// We import the components this way to lazy load them.
const NotFound = () => import("../components/notFound.vue");
const HelloWorld = () => import("../components/HelloWorld.vue");

// The routes for the project.
const routes = [
  { path: "*", component: NotFound },
  { path: "/notFound", name: "notFound", component: NotFound },
  { path: "/home", name: "hellowWorld", component: HelloWorld }
];
const router = new VueRouter({ routes, mode: "history" });

// router.beforeEach((to, from, next) => {

// })

export default router;
