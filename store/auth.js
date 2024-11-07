export const state = () => ({
  token: true,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = "9as8f67987as698fd7698as67f";
      dispatch("setToken", token);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  logout({ commit }) {
    commit("setToken", null);
  },
  async createUser({ commit, dispatch }, formData) {
    try {
      const token = "9as8f67987as698fd7698as67f";
      dispatch("setToken", token);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
};

export const getters = {
  isAuth: (state) => Boolean(state.token),
};
