import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

const meta: Meta<TextComponent> = {
  title: 'Essential/Text',
  component: TextComponent,
  argTypes: {
    muted: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<cc-text [muted]="muted">Regular text</cc-text>`,
  }),
};

export const Muted: Story = {
  render: () => ({
    template: `<cc-text muted>Muted helper text</cc-text>`,
  }),
};
