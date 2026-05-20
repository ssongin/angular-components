import type { Meta, StoryObj } from '@storybook/angular';

import { BlockComponent } from './block.component';

const meta: Meta<BlockComponent> = {
  title: 'Group/Block',
  component: BlockComponent,

  tags: ['autodocs'],

  argTypes: {
    label: {
      control: 'text',
    },

    position: {
      control: 'inline-radio',
      options: ['left', 'center', 'right'],
    },
  },

  args: {
    label: 'Block Label',
    position: 'left',
  },

  render: (args) => ({
    props: args,

    template: `
      <div style="padding: 24px; background: var(--cc-color-bg, #fff);">
        <cc-block
          [label]="label"
          [position]="position"
        >
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div>
              Example content inside the block component.
            </div>

            <input
              type="text"
              placeholder="Focusable input"
              style="
                padding:8px 12px;
                border:1px solid #d1d5db;
                border-radius:8px;
              "
            />

            <button
              style="
                width:max-content;
                padding:8px 14px;
                border-radius:8px;
                border:1px solid #d1d5db;
              "
            >
              Example Button
            </button>
          </div>
        </cc-block>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<BlockComponent>;

export const Default: Story = {};

export const Left: Story = {
  args: {
    label: 'Left Label',
    position: 'left',
  },
};

export const Center: Story = {
  args: {
    label: 'Centered Label',
    position: 'center',
  },
};

export const Right: Story = {
  args: {
    label: 'Right Label',
    position: 'right',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
};

export const LongLabel: Story = {
  args: {
    label:
      'Very Long Block Label Example That Demonstrates Border Interruption',
    position: 'center',
  },
};

export const Small: Story = {
  render: (args) => ({
    props: args,

    template: `
      <div style="padding:24px;">
        <cc-block
          class="cc-block--sm"
          [label]="label"
          [position]="position"
        >
          Small block content
        </cc-block>
      </div>
    `,
  }),

  args: {
    label: 'Small',
    position: 'left',
  },
};

export const Large: Story = {
  render: (args) => ({
    props: args,

    template: `
      <div style="padding:24px;">
        <cc-block
          class="cc-block--lg"
          [label]="label"
          [position]="position"
        >
          Large block content
        </cc-block>
      </div>
    `,
  }),

  args: {
    label: 'Large',
    position: 'left',
  },
};

export const FormExample: Story = {
  render: () => ({
    template: `
      <div
        style="
          padding:24px;
          display:flex;
          flex-direction:column;
          gap:24px;
          max-width:500px;
        "
      >
        <cc-block label="User Information">
          <div
            style="
              display:flex;
              flex-direction:column;
              gap:12px;
            "
          >
            <input
              type="text"
              placeholder="First Name"
              style="
                padding:10px 12px;
                border:1px solid #d1d5db;
                border-radius:8px;
              "
            />

            <input
              type="text"
              placeholder="Last Name"
              style="
                padding:10px 12px;
                border:1px solid #d1d5db;
                border-radius:8px;
              "
            />
          </div>
        </cc-block>

        <cc-block
          label="Centered Settings"
          position="center"
        >
          <div style="padding:8px 0;">
            Settings content
          </div>
        </cc-block>

        <cc-block
          label="Actions"
          position="right"
        >
          <div
            style="
              display:flex;
              gap:12px;
            "
          >
            <button
              style="
                padding:8px 14px;
                border-radius:8px;
                border:1px solid #d1d5db;
              "
            >
              Cancel
            </button>

            <button
              style="
                padding:8px 14px;
                border-radius:8px;
                border:1px solid #d1d5db;
              "
            >
              Save
            </button>
          </div>
        </cc-block>
      </div>
    `,
  }),
};