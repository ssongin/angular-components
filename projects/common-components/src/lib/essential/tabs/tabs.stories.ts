import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { TabsComponent } from '../../group/tabs/tabs.component';
import { TabComponent } from '../../group/tabs/tab.component';
import { TabLabelDirective } from '../../group/tabs/tab-label.directive';

const meta: Meta<TabsComponent> = {
  title: 'Essential/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TabsComponent, TabComponent, TabLabelDirective],
    }),
  ],
  args: {
    position: 'top',
    cached: false,
  },
  argTypes: {
    position: {
      control: 'radio',
      options: ['top', 'left', 'right'],
    },
    cached: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Playground: Story = {
  render: (args) => ({
    props: {
      ...args,
      activeTab: 'overview',
    },
    template: `
      <div style="padding: 12px; min-height: 300px;">

        <cc-tabs
          [position]="position"
          [cached]="cached"
          [(activeId)]="activeTab">

          <cc-tab id="overview">
            <ng-template tabLabel>Overview</ng-template>
            <div>Overview content</div>
          </cc-tab>

          <cc-tab id="analytics">
            <ng-template tabLabel>Analytics</ng-template>
            <div>Analytics content</div>
          </cc-tab>

          <cc-tab id="settings">
            <ng-template tabLabel>Settings</ng-template>
            <div>Settings content</div>
          </cc-tab>

        </cc-tabs>

      </div>
    `,
  }),
};
