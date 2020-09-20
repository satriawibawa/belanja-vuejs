import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    token(state, payload) {
      if (payload === null) {
        // eslint-disable-next-line
        state.token = "";
        localStorage.removeItem("tugas:token");
      } else {
        // eslint-disable-next-line
        state.token = payload;
        localStorage.setItem("tugas:token", payload);
      }
    },
  },
  getters: {
    token(state) {
      return state.token || localStorage.getItem("tugas:token");
    },
  },
});
