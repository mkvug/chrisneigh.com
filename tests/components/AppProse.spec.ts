import { mount } from '@vue/test-utils';
import AppProse from '~/components/AppProse.vue';

describe('AppProse', () => {
  it('renders a <section> with class "prose"', () => {
    const wrapper = mount(AppProse);
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain('prose');
  });

  it('renders slot content inside the section', () => {
    const wrapper = mount(AppProse, {
      slots: { default: '<p>Hello world</p>' },
    });
    expect(wrapper.find('p').text()).toBe('Hello world');
  });

  it('renders empty when no slot is provided', () => {
    const wrapper = mount(AppProse);
    expect(wrapper.text()).toBe('');
  });
});
