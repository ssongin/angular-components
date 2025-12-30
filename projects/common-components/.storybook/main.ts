import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {

  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "staticDirs": ['../src/styles'],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // "@storybook/addon-essentials",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/angular"
};
export default config;
