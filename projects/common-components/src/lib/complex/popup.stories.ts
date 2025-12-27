import { Meta, StoryObj } from '@storybook/angular';
import { PopupComponent } from './popup.component';
import { ButtonComponent } from '../essential/button/button.component';
import { TextComponent } from '../essential/text.component';
import { DividerComponent } from '../essential/divider/divider.component';
import { HeaderComponent } from '../essential/header.component';

const meta: Meta<PopupComponent> = {
  title: 'UI/Popup',
  component: PopupComponent,
  argTypes: {
    visible: {
      control: 'boolean'
    }
  },
  decorators: [
    (story) => ({
      moduleMetadata: {
        imports: [
          PopupComponent,
          ButtonComponent,
          TextComponent,
          DividerComponent,
          HeaderComponent,
        ],
      },
      template: `
        <div style="height: 100vh; background: #f3f4f6; padding: 40px">
          ${story().template}
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<PopupComponent>;

export const Confirmation: Story = {
  args: {
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <cc-popup [visible]="visible" title="Delete item">
        <div popup-content>
          <cc-text>
            Are you sure you want to delete this item?
          </cc-text>
        </div>

        <div popup-controls>
          <cc-button>Cancel</cc-button>
          <cc-button variant="primary">Delete</cc-button>
        </div>
      </cc-popup>
    `,
  }),
};

export const FormPopup: Story = {
  args: {
    visible: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <cc-popup [visible]="visible" title="Edit profile">
        <div popup-content>
          <label>
            Name
            <input type="text" />
          </label>
        </div>

        <div popup-controls>
          <cc-button>Cancel</cc-button>
          <cc-button variant="primary">Save</cc-button>
        </div>
      </cc-popup>
    `,
  }),
};

export const AboutPopup: Story = {
  render: () => ({
    component: class AboutPopupHost {
      visible = true;
      toggle() { this.visible = !this.visible; }
    },
    template: `
      <cc-button (click)="toggle()">Show About Popup</cc-button>
      <cc-popup [visible]="visible" title="About">
        <div popup-content>
          <cc-text>
            This application is a lightweight UI component library
            built with modern Angular standalone components.
          </cc-text>
          <cc-text muted>Version 0.1.0</cc-text>
        </div>
        <div popup-controls>
          <cc-button variant="primary" (click)="toggle()">Close</cc-button>
        </div>
      </cc-popup>
    `,
    standalone: true,
    imports: [PopupComponent, ButtonComponent, TextComponent, DividerComponent, HeaderComponent]
  })
};