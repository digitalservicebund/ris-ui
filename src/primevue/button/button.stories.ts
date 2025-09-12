import { Meta, StoryObj } from "@storybook/vue3-vite";
import PrimevueButton from "primevue/button";
import IconCheck from "~icons/material-symbols/check";
import { html } from "@/lib/tags.ts";

// Imported as PrimevueButton because somehow formatting sometimes changes
// "Button" to "button", breaking the stories
const meta: Meta<typeof PrimevueButton> = {
  // @ts-expect-error Component type broken
  component: PrimevueButton,

  tags: ["autodocs"],

  args: {
    disabled: false,
    label: "Button",
    loading: false,
    severity: undefined,
    size: undefined,
    text: false,
    rounded: false,
  },

  argTypes: {
    size: { control: "select", options: ["small", "normal", "large"] },
    severity: {
      control: "select",
      options: ["primary", "secondary", "danger", "info"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args" />`,
  }),
};

export const Primary: Story = {
  args: {
    severity: "primary",
  },
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args" />`,
  }),
};

export const Secondary: Story = {
  args: {
    severity: "secondary",
  },
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args" />`,
  }),
};

export const Danger: Story = {
  args: {
    severity: "danger",
  },
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args" />`,
  }),
};

export const Text: Story = {
  args: {
    text: true,
  },
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args" />`,
  }),
};

export const WithIcon: Story = {
  args: {
    iconPos: undefined,
  },
  argTypes: {
    iconPos: { options: ["left", "right"] },
  },
  render: (args) => ({
    components: { PrimevueButton, IconCheck },
    setup() {
      return { args };
    },
    template: html`
      <PrimevueButton v-bind="args">
        <template #icon="slotProps">
          <IconCheck :class="slotProps.class" />
        </template>
      </PrimevueButton>
    `,
  }),
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Button",
    label: undefined,
  },
  render: (args) => ({
    components: { PrimevueButton, IconCheck },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args">
      <template #icon>
        <IconCheck />
      </template>
    </PrimevueButton>`,
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { PrimevueButton },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args"></PrimevueButton>`,
  }),
};

export const Pill: Story = {
  args: {
    size: "small",
    rounded: true,
    outlined: true,
    severity: "info",
  },
  render: (args) => ({
    components: { PrimevueButton, IconCheck },
    setup() {
      return { args };
    },
    template: html` <PrimevueButton v-bind="args">
      <template #icon>
        <IconCheck />
      </template>
    </PrimevueButton>`,
  }),
};
