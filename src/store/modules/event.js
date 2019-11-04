// uncomment the below out when you need to call axios
// import axiosCaller from "../components/axiosCaller.js"
const state = {
  selectedEvent: {},
  events: [],
  eventDialog: false,
};

// getters
const getters = {
  getSessionUser: state => {
    return state.selectedEvent;
  },
  getEvents: state => {
    return state.selectedEvent;
  },
  getEventDialog: state => {
    return state.eventDialog;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  setEventDialog(state, bool) {
    state.eventDialog = bool;
  },
  setEvents(state, list) {
    state.events = list;
  },
  setSelectedEvents(state, obj) {
    state.selectedEvent = obj;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};