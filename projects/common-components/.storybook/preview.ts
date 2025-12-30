import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  // wrap the story by merging the story output instead of using <story /> element
  decorators: [
    (story, context) => {
      const storyResult = story();
      return {
        ...storyResult,
        template: `<div [attr.data-theme]="theme" style="height:100%; background-color: var(--cc-body-bg)">${storyResult.template || ''}</div>`,
        props: { ...(storyResult.props || {}), theme: context.globals?.['theme'] },
        // preserve moduleMetadata / standalone imports if provided by the story
        moduleMetadata: { ...(storyResult.moduleMetadata || {}) },
      };
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: { icon: 'circlehollow', items: ['light', 'dark'] },
  },
};

export default preview;