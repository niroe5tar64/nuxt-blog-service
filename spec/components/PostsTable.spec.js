import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import merge from 'lodash.merge';
import PostsTable from '~/components/PostsTable.vue';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(ElementUI);

describe('PostsTableの基本仕様テスト', () => {
  function createStore(overrides) {
    const defaultStoreConfig = {};
    return new Vuex.Store(merge(defaultStoreConfig, overrides));
  }

  function createWrapper(overrides) {
    const defaultMountingOptions = {
      propsData: {
        data: [
          {
            id: 0,
            user_id: 'niro',
            title: 'ダミータイトル1',
            body: 'ダミー',
            created_at: '2019/09/04 15:32:07',
            user: { id: 'niro' },
          },
          {
            id: 1,
            user_id: 'e5tar64',
            title: 'ダミータイトル2',
            body: 'ダミー',
            created_at: '2020/12/17 18:23:51',
            user: { id: 'e5tar64' },
          },
        ],
      },
      mocks: {
        $route: {
          params: { id: '' },
        },
        $router: {
          push: jest.fn((param) => {
            return param;
          }),
        },
      },
      store: createStore(),
      localVue,
    };
    return shallowMount(PostsTable, merge(defaultMountingOptions, overrides));
  }

  test('コンポーネントの構成要素', () => {
    const wrapper = createWrapper();

    expect(wrapper.findAll('el-table-stub')).toHaveLength(1);
    expect(wrapper.findAll('el-table-column-stub')).toHaveLength(3);

    expect(wrapper.find('el-table-stub').name()).toBe('ElTable');
    wrapper.findAll('el-table-column-stub').wrappers.forEach((w) => {
      expect(w.name()).toBe('ElTableColumn');
    });
  });

  test('v-if="hasUser"の動作チェック', () => {
    const wrapper = createWrapper();

    wrapper.setProps({ hasUser: true });
    expect(wrapper.findAll('el-table-column-stub')).toHaveLength(3);
    wrapper.setProps({ hasUser: false });
    expect(wrapper.findAll('el-table-column-stub')).toHaveLength(2);
  });

  test('デフォルト設定での挙動をチェック', () => {
    const wrapper = createWrapper().findAll('el-table-column-stub');

    let attrs;
    attrs = wrapper.at(0).attributes();
    expect(attrs.prop).toEqual('title');
    expect(attrs.label).toEqual('タイトル');

    attrs = wrapper.at(1).attributes();
    expect(attrs.prop).toEqual('user.id');
    expect(attrs.label).toEqual('投稿者');
    expect(attrs.width).toEqual('180');

    attrs = wrapper.at(2).attributes();
    expect(attrs.prop).toEqual('created_at');
    expect(attrs.label).toEqual('投稿日時');
    expect(attrs.width).toEqual('240');
  });

  test('個別設定が通るをチェック', () => {
    const attrsByProps = createWrapper().props();
    const wrapper = createWrapper().findAll('el-table-column-stub');

    let attrs;
    attrs = wrapper.at(0).attributes();
    expect(attrs.prop).toEqual('title');
    expect(attrs.label).toEqual(attrsByProps.labelTitle);

    attrs = wrapper.at(1).attributes();
    expect(attrs.prop).toEqual('user.id');
    expect(attrs.label).toEqual(attrsByProps.labelUser);
    expect(attrs.width).toEqual(attrsByProps.widthUser.toFixed());

    attrs = wrapper.at(2).attributes();
    expect(attrs.prop).toEqual('created_at');
    expect(attrs.label).toEqual(attrsByProps.labelCreatedAt);
    expect(attrs.width).toEqual(attrsByProps.widthCreatedAt.toFixed());
  });

  test('a', () => {
    // const store = createStore({});

    const wrapper = createWrapper();
    const post = wrapper.find('el-table-stub').props().data[0];

    wrapper.find('el-table-stub').vm.$emit('row-click', post);
    //expect(path).toEqual();
    //TODO: $router.push をモックした。
    //      これに対して、パスが通っているかのチェック
  });
});
