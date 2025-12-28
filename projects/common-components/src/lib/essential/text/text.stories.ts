import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan mi eget nisi fermentum, et faucibus lacus placerat. Donec dignissim laoreet mi ultricies pharetra. Etiam condimentum scelerisque sollicitudin. Nullam posuere sodales mi eget egestas. Quisque nec orci maximus, luctus lacus non, dignissim diam. Praesent dui eros, tempor nec magna quis, porta sollicitudin urna. Etiam vitae urna mollis, cursus ipsum ut, sagittis dolor. Pellentesque sit amet porttitor elit. Nulla lectus eros, finibus id eleifend quis, pharetra in urna. Nullam eget odio tellus. Nulla vel lorem dui. Nam consequat efficitur convallis. Fusce commodo convallis felis, ac gravida massa ullamcorper nec.

Phasellus eget metus in lorem malesuada dapibus et nec leo. Praesent placerat, nisi eget mattis ultricies, ante sem laoreet purus, non rutrum erat lacus vitae tellus. Curabitur ornare auctor arcu, finibus maximus libero malesuada ac. Quisque in dignissim purus, vel ultrices lectus. Aliquam erat volutpat. Sed blandit eget sapien vitae euismod. Aenean tempor, enim vehicula convallis feugiat, enim lectus convallis lorem, sit amet semper sapien nunc non quam. Pellentesque vel tellus eget orci gravida condimentum. Sed in nisl nisi. Etiam aliquet, leo ac condimentum viverra, nisl nisi consequat ligula, et mollis erat justo at mi. Pellentesque fermentum, arcu vitae facilisis vulputate, magna libero congue quam, non vestibulum sem magna a magna. Fusce at eros euismod, ornare turpis tincidunt, condimentum augue.

Sed pellentesque lorem sed vestibulum dapibus. Donec sit amet consequat leo, a ornare metus. Fusce sit amet laoreet eros. Sed lorem arcu, semper ut nisi et, placerat aliquam diam. Nulla iaculis felis at magna posuere rhoncus. Donec ac ex quis lacus suscipit congue lacinia vitae odio. Sed pellentesque velit risus, et euismod erat vestibulum sit amet. In eu cursus est. Praesent sed tortor mattis, faucibus velit at, dictum enim.

Aliquam risus diam, egestas vel eleifend at, tempus at nisl. Maecenas vestibulum, nisi at euismod sodales, nunc ex vehicula dolor, quis tincidunt eros odio ac mi. Aenean suscipit commodo justo sit amet tempus. Phasellus luctus arcu vitae libero rutrum pharetra. Sed vitae iaculis lacus, sit amet mattis ipsum. Etiam vitae hendrerit elit. Quisque leo tellus, gravida non lacus a, consectetur tempor turpis. Quisque bibendum quis eros nec malesuada.

Vestibulum ultricies, lorem nec mattis sollicitudin, elit lectus rhoncus massa, at accumsan felis dolor porta tellus. Donec ornare sem sed enim faucibus, et rhoncus magna interdum. Donec euismod neque sit amet risus luctus pulvinar. Pellentesque dignissim tempor cursus. Curabitur eget lacinia mauris, sed ultrices magna. In vel posuere purus. Vivamus rhoncus turpis varius arcu consequat semper. Sed sed erat mi. Curabitur commodo pretium dui. 
`

const meta: Meta<TextComponent> = {
  title: 'Essential/Text',
  component: TextComponent,
  tags: ['autodocs'],
  argTypes: {
    muted: { control: 'boolean' },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    muted: false,
    align: 'left',
  },
  render: (args) => ({
    props: args,
    template: `<cc-text [muted]="muted" [align]="align">${loremIpsum}</cc-text>`,
  }),
};

export const Muted: Story = {
  args: {
    muted: true,
  },
  render: (args) => ({
    props: args,
    template: `<cc-text [muted]="muted">${loremIpsum}</cc-text>`,
  }),
};

export const Centered: Story = {
  render: () => ({
    template: `<cc-text align="center">${loremIpsum}</cc-text>`,
  }),
};

export const RightAligned: Story = {
  render: () => ({
    template: `<cc-text align="right">${loremIpsum}</cc-text>`,
  }),
};
