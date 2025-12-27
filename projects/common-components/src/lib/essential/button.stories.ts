import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Essential/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'primary'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    props: args,
    template: `<cc-button [variant]="variant">Button</cc-button>`,
  }),
};

export const Primary: Story = {
  render: () => ({
    template: `<cc-button variant="primary">Primary Button</cc-button>`,
  }),
};
