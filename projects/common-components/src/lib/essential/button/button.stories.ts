import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { fn } from 'storybook/test';

const meta: Meta<ButtonComponent> = {
  title: 'Essential/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    size: 'md',
    type: 'button',
    disabled: false,
    clicked: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'primary',
        'warn',
        'critical',
        'link',
      ],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
    disabled: {
      control: 'boolean',
    },
    ariaLabel: {
      name: 'aria-label',
      control: 'text',
    },
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;


export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 5px">
        <cc-button
          [variant]="variant"
          [size]="size"
          [type]="type"
          [disabled]="disabled"
          [attr.aria-label]="ariaLabel"
          (clicked)="clicked($event)"
        >
          Button
        </cc-button>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 5px">
        <cc-button variant="default">Default</cc-button>
        <cc-button variant="outline">Outline</cc-button>
        <cc-button variant="primary">Primary</cc-button>
        <cc-button variant="warn">Warn</cc-button>
        <cc-button variant="critical">Critical</cc-button>
        <cc-button variant="link">Link</cc-button>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; padding: 5px">
        <cc-button size="sm">Small</cc-button>
        <cc-button size="md">Medium</cc-button>
        <cc-button size="lg">Large</cc-button>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 5px">
        <cc-button disabled>Default</cc-button>
        <cc-button variant="primary" disabled>Primary</cc-button>
        <cc-button variant="outline" disabled>Outline</cc-button>
        <cc-button variant="link" disabled>Link</cc-button>
      </div>
    `,
  }),
};

export const AriaLabel: Story = {
  render: () => ({
    template: `
      <div style="padding: 5px">
        <cc-button variant="primary" aria-label="Save changes">
          💾
        </cc-button>
      </div>
    `,
  }),
};

export const Themes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: grid; gap: 5px">
        <div style="padding: 5px; background: #e0e4ecff">
          <cc-button [variant]="variant" [disabled]="disabled" [size]="size">Light theme</cc-button>
        </div>
        <div data-theme="dark" style="padding: 5px; background: #111827">
          <cc-button [variant]="variant" [disabled]="disabled" [size]="size">Dark theme</cc-button>
        </div>
      </div>
    `,
  }),
};
