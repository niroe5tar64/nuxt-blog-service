import User from '~/models/User';

const state = () => ({
  loginUser: null,
  isLoggedIn: false,
});

const getters = {
  loginUser: (state) => state.loginUser,
  isLoggedIn: (state) => state.isLoggedIn,
};

const mutations = {
  setLoginUser(state, { loginUser }) {
    state.loginUser = loginUser;
    state.isLoggedIn = true;
  },
  clearLoginUser(state) {
    state.loginUser = null;
    state.isLoggedIn = false;
  },
};

const actions = {
  async login({ commit }, { id }) {
    const loginUser = await User.find(id);
    if (!loginUser.id) throw new Error('Invalid user');
    commit('setLoginUser', { loginUser });
  },

  async register({ commit }, { id }) {
    await User.insert({
      data: { id },
    });
    const loginUser = await User.find(id);
    if (!loginUser.id) throw new Error('Invalid user');
    commit('setLoginUser', { loginUser });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
