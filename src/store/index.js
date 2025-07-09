import { createStore } from 'vuex';
import { getAllModels } from '@/utils/mockModels';

const store = createStore({
  state: {
    isLoading: false,
    models: [],
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
    setModels(state, models) {
      state.models = models;
    },
  },
  actions: {
    async fetchModels({ commit }) {
      commit('setLoading', true);
      try {
        const models = await getAllModels();
        commit('setModels', models);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    models: (state) => state.models,
  },
});

export default store;
