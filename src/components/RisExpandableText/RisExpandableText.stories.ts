import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import RisExpandableText from ".";

const meta: Meta<typeof RisExpandableText> = {
  component: RisExpandableText,

  tags: ["autodocs"],

  args: {
    length: 3,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { RisExpandableText },
    setup() {
      return { args };
    },
    template: html`<div class="max-w-320">
      <RisExpandableText v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </RisExpandableText>
    </div>`,
  }),
};

export const TooShortToExpand: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { RisExpandableText },
    setup() {
      return { args };
    },
    template: html`<div class="max-w-320">
      <RisExpandableText v-bind="args">
        This text is so short, it doesn't need to be truncated.
      </RisExpandableText>
    </div>`,
  }),
};
