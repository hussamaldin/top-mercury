import { createStore } from "vuex";

export default createStore({
  state: {
        nav1:false,
  },
  getters: {},
  mutations: {
    change (state) {
      state.nav1= !state.nav1
    },
  },
  actions: {},
  modules: {},
});
