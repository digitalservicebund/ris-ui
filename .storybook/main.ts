import type { StorybookConfig } from "@storybook/vue3-vite";
import Icons from "unplugin-icons/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  staticDirs: ["../public"],

  async viteFinal(config) {
    if (!config.plugins) config.plugins = [];
    config.plugins.push(Icons({ autoInstall: true }));
    return config;
  },
};

export default config;
