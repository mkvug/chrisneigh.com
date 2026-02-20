import { mount } from '@vue/test-utils';
import AppHero from '~/components/AppHero.vue';

describe('AppHero', () => {
  it('renders .hero-standard layout when both title and subtitle slots exist', () => {
    const wrapper = mount(AppHero, {
      slots: {
        title: 'My Title',
        subtitle: 'My Subtitle',
      },
    });
    expect(wrapper.find('.hero-standard').exists()).toBe(true);
    expect(wrapper.find('.hero-title').text()).toBe('My Title');
    expect(wrapper.find('.hero-subtitle').text()).toBe('My Subtitle');
  });

  it('does not render .hero-actions when actions slot is absent', () => {
    const wrapper = mount(AppHero, {
      slots: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
    });
    expect(wrapper.find('.hero-actions').exists()).toBe(false);
  });

  it('renders .hero-actions when actions slot is provided', () => {
    const wrapper = mount(AppHero, {
      slots: {
        title: 'Title',
        subtitle: 'Subtitle',
        actions: '<a href="/">Learn More</a>',
      },
    });
    expect(wrapper.find('.hero-actions').exists()).toBe(true);
    expect(wrapper.find('.hero-actions a').text()).toBe('Learn More');
  });

  it('falls back to default slot when title is missing', () => {
    const wrapper = mount(AppHero, {
      slots: {
        default: '<div class="custom">Custom Content</div>',
      },
    });
    expect(wrapper.find('.hero-standard').exists()).toBe(false);
    expect(wrapper.find('.custom').text()).toBe('Custom Content');
  });

  it('falls back to default slot when subtitle is missing', () => {
    const wrapper = mount(AppHero, {
      slots: {
        title: 'Title Only',
        default: '<div class="custom">Fallback</div>',
      },
    });
    expect(wrapper.find('.hero-standard').exists()).toBe(false);
    expect(wrapper.find('.custom').text()).toBe('Fallback');
  });
});
