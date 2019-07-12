import User from '~/models/User';

export const state = () => ({
  loginUser: null,
  isLoggedIn: false,
});

export const getters = {
  loginUser: (state) => state.loginUser,
  isLoggedIn: (state) => state.isLoggedIn,
};

export const mutations = {
  setLoginUser(state, { loginUser }) {
    state.loginUser = loginUser;
    state.isLoggedIn = true;
  },
};

export const actions = {
  async login({ commit }, { id }) {
    const loginUser = await User.find(id);
    if (!loginUser.id) throw new Error('Invalid user');
    commit('setLoginUser', { loginUser });
  },
  async register({ commit }, { id }) {
    await User.insert({
      data: { id: id },
    });

    const loginUser = await User.find(id);
    if (!loginUser.id) throw new Error('Invalid user');
    commit('setLoginUser', { loginUser });
  },
};
