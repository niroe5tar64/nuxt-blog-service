import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import merge from 'lodash.merge';
// import { cloneDeep } from 'lodash.clonedeep';
// import auth from '~/store/auth';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe('', () => {
  // function createStore(overrides) {
  //   const defaultStoreConfig = {
  //     propsData: {},
  //   };
  //   return new Vuex.Store(merge(defaultStoreConfig, overrides));
  // }

  // function createWrapper(overrides) {
  //   const dedaultMountingOptions = {
  //     store: createStore(),
  //     localVue,
  //   };
  //   return shallowMount(IndexPage, merge(dedaultMountingOptions, overrides));
  // }

  test('コンポーネントの構成', () => {
    // const wrapper = mount(IndexPage, {
    //   localVue,
    // });
    // console.log(wrapper.html());
  });
});
