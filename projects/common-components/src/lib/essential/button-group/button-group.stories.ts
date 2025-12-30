import { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Essential/Button Group',
  component: ButtonGroupComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export default meta;
type Story = StoryObj<ButtonGroupComponent>;


export const Default: Story = {
  render: () => ({
		moduleMetadata: {
			imports: [ButtonGroupComponent, ButtonComponent],
  	},
    template: `
      <cc-button-group aria-label="Pagination">
        <cc-button>Previous</cc-button>
        <cc-button variant="primary">Next</cc-button>
      </cc-button-group>
    `,
  }),
};

export const Vertical: Story = {
  render: () => ({
		moduleMetadata: {
			imports: [ButtonGroupComponent, ButtonComponent],
  	},
    template: `
      <cc-button-group
        orientation="vertical"
        aria-label="Media controls"
      >
        <cc-button variant="outline">+</cc-button>
        <cc-button variant="outline">−</cc-button>
      </cc-button-group>
    `,
  }),
};


export const WithDisabled: Story = {
  render: () => ({
		moduleMetadata: {
			imports: [ButtonGroupComponent, ButtonComponent],
  	},
    template: `
      <cc-button-group aria-label="Actions">
        <cc-button>Save</cc-button>
        <cc-button disabled>Delete</cc-button>
      </cc-button-group>
    `,
  }),
};

export const LabelledBy: Story = {
  render: () => ({
		moduleMetadata: {
			imports: [ButtonGroupComponent, ButtonComponent],
  	},
    template: `
      <h3 id="group-title">Zoom controls</h3>

      <cc-button-group aria-labelledby="group-title">
        <cc-button variant="outline">+</cc-button>
        <cc-button variant="outline">−</cc-button>
      </cc-button-group>
    `,
  }),
};
