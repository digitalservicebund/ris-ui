import { Meta, StoryObj } from "@storybook/vue3";
import Btn from "primevue/button";
import IconCheck from "~icons/ic/baseline-check";
import { html } from "@/lib/tags.ts";

// Imported as Btn because somehow formatting sometimes changes
// "Button" to "button", breaking the stories
const meta: Meta<typeof Btn> = {
  component: Btn,

  tags: ["autodocs"],

  args: {
    disabled: false,
    label: "Button",
    loading: false,
    severity: undefined,
    size: undefined,
    text: false,
  },

  argTypes: {
    size: { control: "select", options: ["small", "large"] },
    severity: { control: "select", options: ["primary", "secondary"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Btn },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args" />`,
  }),
};

export const Primary: Story = {
  args: {
    severity: "primary",
  },
  render: (args) => ({
    components: { Btn },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args" />`,
  }),
};

export const Secondary: Story = {
  args: {
    severity: "secondary",
  },
  render: (args) => ({
    components: { Btn },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args" />`,
  }),
};

export const Text: Story = {
  args: {
    text: true,
  },
  render: (args) => ({
    components: { Btn },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args" />`,
  }),
};

export const WithIcon: Story = {
  args: {
    iconPos: undefined,
  },
  argTypes: {
    iconPos: { type: "select", options: ["left", "right"] },
  },
  render: (args) => ({
    components: { Btn, IconCheck },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args">
      <template #icon>
        <IconCheck />
      </template>
    </Btn>`,
  }),
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Button",
    label: undefined,
  },
  render: (args) => ({
    components: { Btn, IconCheck },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args">
      <template #icon>
        <IconCheck />
      </template>
    </Btn>`,
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { Btn },
    setup() {
      return { args };
    },
    template: html` <Btn v-bind="args"></Btn>`,
  }),
};
