import { mount } from '@vue/test-utils';
import AppFooter from '~/components/AppFooter.vue';

describe('AppFooter', () => {
  it('renders a <footer> element as root', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.element.tagName).toBe('FOOTER');
  });

  it('displays the current year in copyright text', () => {
    const wrapper = mount(AppFooter);
    const year = new Date().getFullYear().toString();
    expect(wrapper.text()).toContain(year);
  });

  it('contains GitHub link with correct href and attributes', () => {
    const wrapper = mount(AppFooter);
    const link = wrapper.find('a[href="https://github.com/mkvug"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes('target')).toBe('_blank');
    expect(link.attributes('rel')).toBe('noopener noreferrer');
  });

  it('contains LinkedIn link with correct href and attributes', () => {
    const wrapper = mount(AppFooter);
    const link = wrapper.find('a[href="https://www.linkedin.com/in/cneigh/"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes('target')).toBe('_blank');
  });

  it('renders the brand description', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.text()).toContain('Developer, Engineer, & Maker');
  });
});
