// uncomment the below out when you need to call axios
// import axiosCaller from "../components/axiosCaller.js"
const state = {
  selectedEvent: {},
  events: [{
      name: 'Research Seminar – Kyle Martin – The Wonderful World of Deep Metric Learning',
      details: 'Deep Metric Learners (DMLs) are a group of neural network architectures which learn to optimise case representations for similarity-based return by training upon multiple cases simultaneously to incorpo',
      start: '2019-11-02',
      location: 'N106, Sir Ian Wood Building',
      color: 'primary'
    },
    {
      name: 'Research Seminar – James Littlejohn (Dsensor.org) – The DIY HealthScience Toolkit, Mobile and Peer-to-Peer Network',
      details: 'The talk will demo the DIY HealthScience toolkit based on real data from wearable and Luftdaten air quality sensors. The rest of the talk will introduce the technology used to design the user experience, perform the data science and the use of cryptography to create the KBLedger (knowledge Bundle Ledger) that guarantees data interoperability and computational compatibility.',
      start: '2019-11-06',
      location: 'N336, Sir Ian Wood Building',
      color: 'primary'
    }, {
      name: 'Research Seminar – Tom Inns (cofink Ltd) – TBC',
      details: '',
      start: '2019-11-13',
      location: 'N336, Sir Ian Wood Building',
      color: 'primary'
    }, {
      name: 'Research Discussion',
      details: 'Internal school discussion about upcoming research opportunities .',
      start: '2019-11-12',
      location: 'N310, Sir Ian Wood Building',
      color: 'primary'
    }, {
      name: 'Research Seminar – Anjana Wijekoon – Reasoning with Multi-modal for Personalising Human Activity Recognition',
      details: '',
      start: '2019-11-27',
      location: 'N336, Sir Ian Wood Building',
      color: 'primary'
    }
  ],
  eventDialog: false,
};

// getters
const getters = {
  getSelectedEvent: state => {
    return state.selectedEvent;
  },
  getEvents: state => {
    return state.events;
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
  setSelectedEvent(state, obj) {
    state.selectedEvent = obj;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};