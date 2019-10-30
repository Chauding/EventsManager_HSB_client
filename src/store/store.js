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
    }
  },
  getters: {
    getSnackBar: state => {
      return state.snackBar;
    }
  },
  mutations: {
    setSnackBar(state, data) {
      state.snackBar = data;
    }
  },
  actions: {
    // axiosCaller
  }
});
