import type { StorybookConfig } from "@storybook/vue3-vite";
import Icons from "unplugin-icons/vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-docs"],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  staticDirs: ["../public"],

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [Icons({ autoInstall: true })],

      resolve: {
        alias: {
          // Temporarily alias imports from @storybook/addon-actions to the
          // new storybook/actions package (required for Storybook 9). See
          // https://github.com/NickMcBurney/storybook-vue3-router/issues/68
          "@storybook/addon-actions": "storybook/actions",
        },
      },
    });
  },
};

export default config;
