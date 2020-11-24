import Vue from 'Vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: {},
    // loading: false
  },

  mutations: {
    setHeroes(state, { page, heroes }) {
      state.heroes[page] = heroes;
    },
  },

  actions: {

  },
  modules: {

  },
});
