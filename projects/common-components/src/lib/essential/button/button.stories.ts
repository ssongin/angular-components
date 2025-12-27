import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { fn } from 'storybook/test';

const meta: Meta<ButtonComponent> = {
  title: 'Essential/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'primary'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `<cc-button [variant]="variant" [disabled]="disabled">Button</cc-button>`,
  }),
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `<cc-button [variant]="variant" [disabled]="disabled">Primary Button</cc-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `<cc-button [variant]="variant" [disabled]="disabled">Disabled</cc-button>`,
  }),
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `<cc-button [variant]="variant" [disabled]="disabled">Primary Disabled Button</cc-button>`,
  }),
};
