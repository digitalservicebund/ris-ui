import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import RisCopyableLabel from ".";

const meta: Meta<typeof RisCopyableLabel> = {
  component: RisCopyableLabel,

  tags: ["autodocs"],

  args: {
    text: "Copy to clipboard",
    value: undefined,
    name: undefined,
  },

  argTypes: {
    value: String,
    name: String,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { RisCopyableLabel },
    setup() {
      return { args };
    },
    template: html`<RisCopyableLabel v-bind="args" />`,
  }),
};

export const CustomValue: StoryObj<typeof meta> = {
  args: {
    text: 'Copy "test" to clipboard',
    value: "test",
  },

  render: (args) => ({
    components: { RisCopyableLabel },
    setup() {
      return { args };
    },
    template: html`<RisCopyableLabel v-bind="args" />`,
  }),
};
