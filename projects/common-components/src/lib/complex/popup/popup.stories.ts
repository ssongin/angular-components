import { Meta, StoryObj } from '@storybook/angular';
import { PopupComponent } from './popup.component';
import { ButtonComponent } from '../../essential/button/button.component';
import { TextComponent } from '../../essential/text/text.component';
import { DividerComponent } from '../../essential/divider/divider.component';
import { HeaderComponent } from '../../essential/header/header.component';

interface StoryArgs { visible?: boolean; title?: string }

const meta: Meta<StoryArgs> = {
  title: 'UI/Popup',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    visible: { control: 'boolean' },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Confirmation: Story = {
  args: { visible: true, title: 'Delete item' },
  render: (args) => ({
    props: args,
    // provide imports to Storybook wrapper via moduleMetadata
    moduleMetadata: {
      imports: [PopupComponent, ButtonComponent, TextComponent, DividerComponent, HeaderComponent],
    },
    template: `
      <cc-popup [visible]="visible" [title]="title">
        <div popup-content>
          <cc-text>Are you sure you want to delete this item?</cc-text>
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
  args: { visible: true, title: 'Edit profile' },
  render: (args) => ({
    props: args,
    moduleMetadata: {
      imports: [PopupComponent, ButtonComponent, TextComponent, DividerComponent, HeaderComponent],
    },
    template: `
      <cc-popup [visible]="visible" [title]="title">
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
  args: { visible: false, title: 'About' },
  render: (args) => ({
    props: args,
    moduleMetadata: {
      imports: [PopupComponent, ButtonComponent, TextComponent, DividerComponent, HeaderComponent],
    },
    template: `
      <button (click)="visible = true">Open</button>
      <cc-popup [visible]="visible" [title]="title">
        <div popup-content>
          <cc-text>
            This application is a lightweight UI component library
            built with modern Angular standalone components.
          </cc-text>
          <cc-text muted>Version 0.1.0</cc-text>
        </div>
        <div popup-controls>
          <cc-button (click)="visible = false" variant="primary">Close</cc-button>
        </div>
      </cc-popup>
    `,
  }),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Open'));
    await userEvent.click(canvas.getByText('Close'));
  },
};