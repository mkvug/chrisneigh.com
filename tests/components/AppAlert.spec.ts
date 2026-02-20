import { mount } from '@vue/test-utils';
import AppAlert from '~/components/AppAlert.vue';

describe('AppAlert', () => {
  it('renders a <span> element as root', () => {
    const wrapper = mount(AppAlert);
    expect(wrapper.element.tagName).toBe('SPAN');
  });

  it('renders text passed via default slot', () => {
    const wrapper = mount(AppAlert, {
      slots: { default: 'Alert message' },
    });
    expect(wrapper.text()).toBe('Alert message');
  });

  it('renders HTML content passed via default slot', () => {
    const wrapper = mount(AppAlert, {
      slots: { default: '<strong>Bold alert</strong>' },
    });
    expect(wrapper.find('strong').exists()).toBe(true);
    expect(wrapper.find('strong').text()).toBe('Bold alert');
  });
});
