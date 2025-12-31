import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Essential/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xxlg', 'xlg', 'lg', 'md', 'sm', 'xsm'],
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, undefined],
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <cc-header [size]="size" [level]="level">
        Header text
      </cc-header>
    `,
  }),
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Playground: Story = {
  args: {
    size: 'md',
    level: undefined
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: grid; gap: 12px">
        <cc-header size="xxlg">XXLG — h1</cc-header>
        <cc-header size="xlg">XLG — h2</cc-header>
        <cc-header size="lg">LG — h3</cc-header>
        <cc-header size="md">MD — h4</cc-header>
        <cc-header size="sm">SM — h5</cc-header>
        <cc-header size="xsm">XSM — h6</cc-header>
      </div>
    `,
  }),
};


export const SemanticOverride: Story = {
  render: () => ({
    template: `
      <div style="display: grid; gap: 12px">
        <cc-header size="xxlg" level="3">
          Visually H1, Semantically H3
        </cc-header>

        <cc-header size="lg" level="5">
          Visually H3, Semantically H5
        </cc-header>
      </div>
    `,
  }),
};
