import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Router } from '@angular/router';
import { CcTaskbarComponent } from '../taskbar/taskbar.component';
import { CcTaskbarItemComponent } from '../taskbar/taskbar-item.component';
import { CommonModule } from '@angular/common';

const meta: Meta<CcTaskbarComponent> = {
  title: 'Navigation/Taskbar',
  component: CcTaskbarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CcTaskbarComponent, CcTaskbarItemComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: () => Promise.resolve(true), // stub navigate method
          },
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<CcTaskbarComponent>;

export const Basic: Story = {
  render: () => ({
    template: `
      <cc-taskbar>
        <cc-taskbar-item type="menu" label="Applications">
          <cc-taskbar-item type="item" label="Dashboard" />
          <cc-taskbar-item type="item" label="Settings" />
        </cc-taskbar-item>
      </cc-taskbar>
    `,
  }),
};

export const WithRouterLinks: Story = {
  render: () => ({
    template: `
      <cc-taskbar>
        <cc-taskbar-item type="item" label="Home" routerLink="/home" />
        <cc-taskbar-item type="item" label="Admin" routerLink="/admin" />
      </cc-taskbar>
    `,
  }),
};

export const DisabledItems: Story = {
  render: () => ({
    template: `
      <cc-taskbar>
        <cc-taskbar-item type="item" label="Enabled" />
        <cc-taskbar-item type="item" label="Disabled" [disabled]="true" />
      </cc-taskbar>
    `,
  }),
};

export const DisabledGroups: Story = {
  render: () => ({
    template: `
      <cc-taskbar>
        <!-- Parent menu is disabled; all children inherit disabled state -->
        <cc-taskbar-item type="menu" label="Applications" [disabled]="true">
          <cc-taskbar-item type="item" label="Dashboard" />
          <cc-taskbar-item type="item" label="Settings" />
          <cc-taskbar-item type="menu" label="Network">
            <cc-taskbar-item type="item" label="DNS" />
            <cc-taskbar-item type="item" label="Firewall" />
          </cc-taskbar-item>
        </cc-taskbar-item>

        <!-- Independent enabled menu for contrast -->
        <cc-taskbar-item type="menu" label="Tools">
          <cc-taskbar-item type="item" label="Terminal" />
          <cc-taskbar-item type="item" label="Editor" />
        </cc-taskbar-item>
      </cc-taskbar>
    `,
  }),
};

