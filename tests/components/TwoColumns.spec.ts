import { mount } from '@vue/test-utils';
import TwoColumns from '~/components/TwoColumns.vue';

describe('TwoColumns', () => {
  it('renders no .col divs when no slots are provided', () => {
    const wrapper = mount(TwoColumns);
    expect(wrapper.findAll('.col').length).toBe(0);
  });

  it('renders only one .col when only colOne is provided', () => {
    const wrapper = mount(TwoColumns, {
      slots: { colOne: '<p>Column One</p>' },
    });
    const cols = wrapper.findAll('.col');
    expect(cols.length).toBe(1);
    expect(cols[0].text()).toBe('Column One');
  });

  it('renders only one .col when only colTwo is provided', () => {
    const wrapper = mount(TwoColumns, {
      slots: { colTwo: '<p>Column Two</p>' },
    });
    const cols = wrapper.findAll('.col');
    expect(cols.length).toBe(1);
    expect(cols[0].text()).toBe('Column Two');
  });

  it('renders two .col divs when both slots are provided', () => {
    const wrapper = mount(TwoColumns, {
      slots: {
        colOne: '<p>Left</p>',
        colTwo: '<p>Right</p>',
      },
    });
    const cols = wrapper.findAll('.col');
    expect(cols.length).toBe(2);
    expect(cols[0].text()).toBe('Left');
    expect(cols[1].text()).toBe('Right');
  });

  it('root element is a <section> with class "two-columns"', () => {
    const wrapper = mount(TwoColumns);
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain('two-columns');
  });
});
