import { createLocalVue, shallowMount } from '@vue/test-utils';
import merge from 'lodash.merge';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ja';
import PostsIndex from '~/pages/posts/index.vue';
import { plugins } from '~/store';
import { dataArray } from '~/data';
import PostsTable from '~/components/organisms/PostsTable.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI, { lang });
localVue.component('login-form');

describe('', () => {
  function createStore(overrides) {
    const defaultStoreConfig = { plugins };
    return new Vuex.Store(merge(defaultStoreConfig, overrides));
  }

  function createWrapper(overrides) {
    const defaultMountingOption = {
      computed: {
        showPosts() {
          return dataArray;
        },
      },
      store: createStore(),
    };
    return shallowMount(PostsIndex, merge(defaultMountingOption, overrides));
  }

  test('PostsTable.props().data に showPosts() が適切に渡っているかチェック ', () => {
    const wrapper = createWrapper({ localVue });
    dataArray.forEach((data, index) => {
      expect(wrapper.find(PostsTable).props().data[index]).toEqual(data);
    });
  });
});
