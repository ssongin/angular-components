import { Meta } from '@storybook/angular';
import { RowComponent } from './row.component';

export default {
  title: 'Flex/Row',
  component: RowComponent,
} as Meta<RowComponent>;

export const Default = {
  render: () => ({
    template: `
      <ui-row gap="16px">
        <div style="background:#ccc">A</div>
        <div style="background:#bbb">B</div>
        <div style="background:#aaa">C</div>
      </ui-row>
    `,
  }),
};