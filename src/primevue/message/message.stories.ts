import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import Message from "primevue/message";

const meta: Meta<typeof Message> = {
  // @ts-expect-error Component type broken
  component: Message,

  tags: ["autodocs"],

  args: {
    severity: undefined,
    closable: true,
  },

  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warn", "error"],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`<Message v-bind="args">Message content</Message>`,
  }),
};

export const Success: StoryObj<typeof meta> = {
  args: {
    severity: "success",
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`<Message v-bind="args">Message content</Message>`,
  }),
};

export const Info: StoryObj<typeof meta> = {
  args: {
    severity: "info",
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`<Message v-bind="args">Message content</Message>`,
  }),
};

export const Warn: StoryObj<typeof meta> = {
  args: {
    severity: "warn",
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`<Message v-bind="args">Message content</Message>`,
  }),
};

export const Error: StoryObj<typeof meta> = {
  args: {
    severity: "error",
  },
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`<Message v-bind="args">Message content</Message>`,
  }),
};

export const WithHeadingAndContent: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Message },
    setup() {
      return { args };
    },
    template: html`
      <Message v-bind="args">
        <p class="ris-body1-bold">Heading</p>
        <p>Message content</p>
      </Message>
    `,
  }),
};
