import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    themes: {
      light: {
        primary: "#712177",
        secondary: "#FBEAFC",
        accent: "#FFFFFF",
        error: "#b71c1c"
      },
      dark: {
        primary: "#712177",
        secondary: "#FBEAFC",
        accent: "#FFFFFF",
        error: "#b71c1c"
      }
    },
  }
});