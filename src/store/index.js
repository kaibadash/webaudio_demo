import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    now: ""
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    now(state, date) {
      state.now = date;
    }
  },
  actions: {},
  modules: {}
});
