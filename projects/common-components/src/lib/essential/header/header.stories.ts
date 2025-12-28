import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Essential/Header',
  tags: ['autodocs'],
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    label: 'Header Title',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    label: 'Small header Title',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large header Title',
    size: 'lg',
  },
};
