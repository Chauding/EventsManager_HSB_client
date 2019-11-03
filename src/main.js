import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import header from "./components/header.vue";
import drawer from "./components/drawer.vue";
import snackBar from "./components/snackBar.vue";
import vuetify from "./plugins/vuetify";
import {
  store
} from "./store/store";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import VueI18n from "vue-i18n";
// import messages from "./language/strings.json";

Vue.component("app-header", header);
Vue.component("app-drawer", drawer);
Vue.component("app-snackBar", snackBar);

// const i18n = new VueI18n({
//   locale: "en",
//   messages
// });

Vue.config.productionTip = false;
// Vue.use(VueI18n);

new Vue({
  render: h => h(App),
  store,
  router,
  // i18n,
  vuetify,
  components: {
    App
  },
  mounted() {}

}).$mount("#app");