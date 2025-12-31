import type { Meta, StoryObj } from '@storybook/angular';
import { DividerComponent } from './divider.component';

const meta: Meta<DividerComponent> = {
  title: 'Essential/Divider',
  tags: ['autodocs'],
  component: DividerComponent,
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    align: { control: 'radio', options: ['start', 'center', 'end'] },
    inset: { control: 'boolean' },
    dashed: { control: 'boolean' },
  },
  args: {
    orientation: 'horizontal',
    align: 'center',
    inset: false,
    dashed: false,
  },
};

export default meta;
type Story = StoryObj<DividerComponent>;

// Horizontal divider with content
export const Horizontal: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <cc-divider
          [orientation]="orientation"
          [align]="align"
          [inset]="inset"
          [dashed]="dashed"
        >
          OR
        </cc-divider>
      </div>
    `,
  }),
};

// Horizontal divider without content
export const Contentless: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <cc-divider
          [orientation]="orientation"
          [align]="align"
          [inset]="inset"
          [dashed]="dashed"/>
      </div>
    `,
  }),
};

// Horizontal divider, dashed and inset
export const DashedInset: Story = {
  args: {
    dashed: true,
    inset: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <cc-divider
          [orientation]="orientation"
          [align]="align"
          [inset]="inset"
          [dashed]="dashed"
        >
          Content
        </cc-divider>
      </div>
    `,
  }),
};

// Vertical divider — ensure parent has height
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 200px; display: inline-flex; align-items: stretch; gap: 1rem;">
        <span>Left</span>
        <cc-divider
          [orientation]="orientation"
          [inset]="inset"
          [dashed]="dashed"
        ></cc-divider>
        <span>Right</span>
      </div>
    `,
  }),
};

// Vertical divider with dashed line
export const VerticalDashed: Story = {
  args: {
    orientation: 'vertical',
    dashed: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 200px; display: inline-flex; align-items: stretch; gap: 1rem;">
        <span>Left</span>
        <cc-divider
          [orientation]="orientation"
          [inset]="inset"
          [dashed]="dashed"
        ></cc-divider>
        <span>Right</span>
      </div>
    `,
  }),
};
