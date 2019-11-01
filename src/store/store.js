import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
// import axiosCaller from "../components/axiosCaller.js"
// importing modules
import session from "./modules/session.js";

Vue.use(Vuex);
export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["session"]
    }),
    createPersistedState({
      key: "offline",
      paths: ["offline"]
    })
  ],
  modules: [session],
  state: {
    snackBar: {
      text: "",
      show: false
    },
    drawer: true
  },
  getters: {
    getSnackBar: state => {
      return state.snackBar;
    },
    getDrawer: state => {
      return state.drawer;
    }
  },
  mutations: {
    setSnackBar(state, data) {
      state.snackBar = data;
    },
    setDrawer(state, bool) {
      state.drawer = bool;
    }
  },
  actions: {
    // axiosCaller
  }
});