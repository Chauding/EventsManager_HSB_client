// uncomment the below out when you need to call axios
// import axiosCaller from "../components/axiosCaller.js"
const state = {
  user: {},
  token: null,
  isLoggedIn: false,
  isDirty: false
};

// getters
const getters = {
  getUser: state => {
    return state.user;
  },
  getToken: state => {
    return state.token;
  },
  isLoggedIn: state => {
    return state.isLoggedIn;
  },
  isDirty: state => {
    return state.isDirty;
  },
  hasRoute: state => key => {
    return state.permissions.routes.includes(key);
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  setSessionUser(state, data) {
    state.user = data;
  },
  setToken(state, token) {
    state.token = token;
  },
  setIsLoggedIn(state, bool) {
    state.isLoggedIn = bool;
  },
  setIsDirty(state, bool) {
    state.isDirty = bool;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
