import { Meta } from '@storybook/angular';
import { ColumnComponent } from './column.component';

export default {
  title: 'Flex/Column',
  component: ColumnComponent,
} as Meta<ColumnComponent>;

export const Default = {
  render: () => ({
    template: `
      <ui-column gap="16px">
        <div style="background:#ccc">A</div>
        <div style="background:#bbb">B</div>
        <div style="background:#aaa">C</div>
      </ui-column>
    `,
  }),
};