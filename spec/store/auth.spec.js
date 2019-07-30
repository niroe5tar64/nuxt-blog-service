import Vuex from 'vuex';
import auth from '~/store/auth';
import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import User from '~/models/User';
import VuexORM from '@vuex-orm/core';
import database from '~/database';

jest.mock('~/models/user');

let localVue = createLocalVue();
localVue.use(Vuex);

function createUser(id = 'test_user') {
  return new User({ id });
}

describe('getters', () => {
  test('should ', () => {
    const state = {
      loginUser: createUser(),
      isLoggedIn: true,
    };
    const result = {
      loginUser: auth.getters.loginUser(state),
      isLoggedIn: auth.getters.isLoggedIn(state),
    };
    expect(state.loginUser).toEqual(result.loginUser);
    expect(state.isLoggedIn).toEqual(result.isLoggedIn);
  });
});

describe('mutations', () => {
  test('setLoginUser の動作確認', () => {
    const state = {
      loginUser: null,
      isLoggedIn: false,
    };
    expect(state.loginUser).toEqual(null);
    expect(state.isLoggedIn).toEqual(false);

    auth.mutations.setLoginUser(state, { loginUser: createUser() });
    expect(state.loginUser).toEqual(createUser());
    expect(state.isLoggedIn).toEqual(true);
  });
  test('clearLoginUser の動作確認', () => {
    const state = {
      loginUser: createUser(),
      isLoggedIn: true,
    };
    expect(state.loginUser).toEqual(createUser());
    expect(state.isLoggedIn).toEqual(true);

    auth.mutations.clearLoginUser(state);
    expect(state.loginUser).toEqual(null);
    expect(state.isLoggedIn).toEqual(false);
  });
});

describe('actions', () => {
  test('should ', async () => {
    const store = new Vuex.Store({
      modules: { auth: cloneDeep(auth) },
      plugins: [VuexORM.install(database)],
    });
    const loginUser = createUser();

    User.find = jest.fn().mockImplementation((id) => {
      return createUser(id);
    });

    await store.dispatch('login', loginUser.id);
    expect(store.getters['loginUser']).toEqual(loginUser);
    expect(store.getters['isLoggedIn']).toEqual(true);

    jest.restoreAllMocks();
  });
});
