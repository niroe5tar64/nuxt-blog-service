import { createLocalVue, shallowMount } from '@vue/test-utils';
import Logo from '~/components/Logo.vue';

const localVue = createLocalVue();

describe('', () => {
  it('should ', () => {
    const wrapper = shallowMount(Logo, {
      localVue,
    });
    expect(
      wrapper
        .findAll('div')
        .at(1)
        .name(),
    ).toBe('div');
  });
});
