import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { TabLabelDirective } from './tab-label.directive';
import { TabContentDirective } from './tab-content.directive';

const meta: Meta<TabsComponent> = {
  title: 'Group/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],

  decorators: [
    moduleMetadata({
      imports: [
        TabsComponent,
        TabComponent,
        TabLabelDirective,
        TabContentDirective,
      ],
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
    cached: {
      control: 'boolean',
    },
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
          [lazy]="lazy"
          [(activeId)]="activeTab">

          <cc-tab id="overview">

            <ng-template ccTabLabel>
              Overview
            </ng-template>

            <ng-template ccTabContent>
              Overview content
            </ng-template>

          </cc-tab>

          <cc-tab id="analytics">

            <ng-template ccTabLabel>
              📊 Analytics
            </ng-template>

            <ng-template ccTabContent>
              Analytics content
            </ng-template>

          </cc-tab>

          <cc-tab id="settings">

            <ng-template ccTabLabel>
              ⚙️ Settings
            </ng-template>

            <ng-template ccTabContent>
              Settings content
            </ng-template>

          </cc-tab>

        </cc-tabs>

      </div>
    `,
  }),
};

export const Positions: Story = {
  render: () => ({
    template: `
      <div style="display: grid; gap: 24px; padding: 12px;">

        <div>
          <h4>Top</h4>

          <cc-tabs position="top">

            <cc-tab id="top-1">
              <ng-template ccTabLabel>Home</ng-template>
              <ng-template ccTabContent>Top tabs content</ng-template>
            </cc-tab>

            <cc-tab id="top-2">
              <ng-template ccTabLabel>Profile</ng-template>
              <ng-template ccTabContent>Profile content</ng-template>
            </cc-tab>

          </cc-tabs>
        </div>

        <div style="height: 250px;">
          <h4>Left</h4>

          <cc-tabs position="left">

            <cc-tab id="left-1">
              <ng-template ccTabLabel>Navigation</ng-template>
              <ng-template ccTabContent>Left tabs content</ng-template>
            </cc-tab>

            <cc-tab id="left-2">
              <ng-template ccTabLabel>Details</ng-template>
              <ng-template ccTabContent>Details content</ng-template>
            </cc-tab>

          </cc-tabs>
        </div>

        <div style="height: 250px;">
          <h4>Right</h4>

          <cc-tabs position="right">

            <cc-tab id="right-1">
              <ng-template ccTabLabel>Activity</ng-template>
              <ng-template ccTabContent>Right tabs content</ng-template>
            </cc-tab>

            <cc-tab id="right-2">
              <ng-template ccTabLabel>Logs</ng-template>
              <ng-template ccTabContent>Logs content</ng-template>
            </cc-tab>

          </cc-tabs>
        </div>

      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="padding: 12px;">

        <cc-tabs>

          <cc-tab id="general">
            <ng-template ccTabLabel>General</ng-template>
            <ng-template ccTabContent>General content</ng-template>
          </cc-tab>

          <cc-tab id="security" [disabled]="true">
            <ng-template ccTabLabel>Security</ng-template>
            <ng-template ccTabContent>Security content</ng-template>
          </cc-tab>

          <cc-tab id="billing">
            <ng-template ccTabLabel>Billing</ng-template>
            <ng-template ccTabContent>Billing content</ng-template>
          </cc-tab>

        </cc-tabs>

      </div>
    `,
  }),
};

export const ComplexLabels: Story = {
  render: () => ({
    template: `
      <div style="padding: 12px;">

        <cc-tabs>

          <cc-tab id="inbox">

            <ng-template ccTabLabel>
              <div style="display:flex;align-items:center;gap:8px;">
                <span>📥</span>
                <span>Inbox</span>
                <span style="padding:2px 6px;border-radius:999px;background:#dbeafe;font-size:12px;">
                  12
                </span>
              </div>
            </ng-template>

            <ng-template ccTabContent>
              Inbox content
            </ng-template>

          </cc-tab>

          <cc-tab id="notifications">

            <ng-template ccTabLabel>
              🔔 Notifications
            </ng-template>

            <ng-template ccTabContent>
              Notifications content
            </ng-template>

          </cc-tab>

        </cc-tabs>

      </div>
    `,
  }),
};

export const LazyRendering: Story = {
  render: () => ({
    template: `
      <div style="padding: 12px;">

        <cc-tabs>

          <cc-tab id="eager">
            <ng-template ccTabLabel>Inherited behaviour</ng-template>
            <ng-template ccTabContent>
              This tab is not cached by parent default.
              <label style="display:flex; gap:8px; align-items:center;">
                <input type="checkbox" />
                Lazy loading
              </label>
            </ng-template>
          </cc-tab>

          <cc-tab id="important" [cached]="true">
            <ng-template ccTabLabel>Cached/Persistent</ng-template>
            <ng-template ccTabContent>
              This tab always stays rendered
              <label style="display:flex; gap:8px; align-items:center;">
                <input type="checkbox" />
                Cached behaviour
              </label>
            </ng-template>
          </cc-tab>

          <cc-tab id="lazy-tab" [cached]="false">
            <ng-template ccTabLabel>Renewable</ng-template>
            <ng-template ccTabContent>
              This tab is not cache
              <label style="display:flex; gap:8px; align-items:center;">
                <input type="checkbox" />
                Lazy Loading
              </label>
            </ng-template>
          </cc-tab>

        </cc-tabs>

      </div>
    `,
  }),
};

