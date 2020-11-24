/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'Vue';
import Vuex from 'Vuex';

import axiosInstance from '@/api/index';

import CHARACTERS_BY_PAGE from '@/api/routes';

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
    fetchHeroes(page) {
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },

  },
  modules: {

  },
});
