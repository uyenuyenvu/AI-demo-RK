import { mount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import Button from './Button.vue';

describe('Button.vue', () => {
  it('renders button text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    });
    expect(wrapper.text()).toContain('Click me');
  });
});
