import { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

export default {
  title: 'Layout/Layout',
  component: LayoutComponent,
} as Meta<LayoutComponent>;

export const Default: StoryObj<LayoutComponent> = {
  args: {
    type: ""
  },

  render: args => ({
    props: args,

    template: `
      <ui-layout [type]="type">
        <div style="background:#eee;padding:2rem">
          Default fill content
        </div>
      </ui-layout>
    `
  })
};

export const Full: StoryObj<LayoutComponent> = {
  args: {
    type: "full"
  },

  render: args => ({
    props: args,

    template: `
      <ui-layout [type]="type">
        <div style="background:#eee;padding:2rem">
          Fill content
        </div>
      </ui-layout>
    `
  })
};

export const Centered: StoryObj<LayoutComponent> = {
  args: { type: 'centered' },
  render: (args) => ({
    props: args,
    template: `
      <ui-layout [type]="type">
        <div style="background:#eee;padding:2rem">
          Centered content
        </div>
      </ui-layout>
    `,
  }),
};
