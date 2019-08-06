// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import Vuex from 'vuex';
// import LoginForm from '~/components/organisms/LoginForm.vue';
// import lang from 'element-ui/lib/locale/lang/ja';
// import ElementUI from 'element-ui';

// const localVue = createLocalVue();
// localVue.use(Vuex);
// localVue.use(ElementUI, { lang });

// describe('LoginFormの基本仕様テスト', () => {
//   function createWrapper() {
//     return shallowMount(LoginForm, { localVue });
//   }

//   test('コンポーネントの構成要素', () => {
//     const wrapper = createWrapper();
//     expect(wrapper.contains('el-input-stub')).toBeTruthy();
//     expect(wrapper.findAll('el-input-stub')).toHaveLength(1);

//     expect(wrapper.contains('el-checkbox-stub')).toBeTruthy();
//     expect(wrapper.findAll('el-checkbox-stub')).toHaveLength(1);

//     expect(wrapper.contains('el-button-stub')).toBeTruthy();
//     expect(wrapper.findAll('el-button-stub')).toHaveLength(1);
//   });

//   test('フォームの動作確認 ', () => {
//     const checkbox = createWrapper().find('el-checkbox-stub');
//     checkbox.attributes().checked = false;
//     expect(checkbox.props().checked).toEqual(false);
//     checkbox.element.value = true;
//     console.log(checkbox.trigger('click'));
//   });
//   // test('should ', () => {
//   //   const wrapper = createWrapper();
//   //   // const wrapperDeep = mount(LoginForm, { localVue });
//   //   console.log(wrapper.html());
//   //   // console.log(wrapperDeep.html());
//   //   console.log(wrapper.find('el-checkbox-stub').name());
//   //   console.log(wrapper.find('el-checkbox-stub').props());
//   // });
// });
