import { Meta, StoryObj } from '@storybook/angular';
import { PopupComponent } from './popup.component';
import { ButtonComponent } from '../essential/button.component';
import { TextComponent } from '../essential/text.component';
import { DividerComponent } from '../essential/divider.component';
import { HeaderComponent } from '../essential/header.component';

const meta: Meta<PopupComponent> = {
  title: 'UI/Popup',
  component: PopupComponent,
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
  render: () => ({
    template: `
      <cc-popup [visible]="true" title="Delete item">
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
  render: () => ({
    template: `
      <cc-popup [visible]="true" title="Edit profile">
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
