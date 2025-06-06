import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import Fluid from "primevue/fluid";
import InputText from "primevue/inputtext";
import ErrorOutline from "~icons/material-symbols/error-outline";

const meta: Meta<typeof InputText> = {
  // @ts-expect-error Component type broken
  component: InputText,

  tags: ["autodocs"],

  args: {
    disabled: false,
    fluid: false,
    placeholder: "Placeholder",
    readonly: false,
    size: "small",
    value: "Text",
    invalid: false,
  },

  argTypes: {
    size: {
      control: "select",
      options: ["large", "small"],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: html`<InputText v-bind="args" />`,
  }),
};

export const WithLabelAndHint: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: html`<div class="flex flex-col gap-2">
      <label class="ris-label2-regular" for="with-top-label">Label</label>
      <InputText
        id="with-top-label"
        aria-describedby="with-top-label-hint"
        v-bind="args"
      />
      <small id="with-top-label-hint">Additional hint text</small>
    </div>`,
  }),
};

export const WithHorizontalLabel: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: html`<div class="flex items-center gap-16">
      <label class="ris-label2-regular" for="with-left-label">Label</label>
      <InputText
        id="with-left-label"
        aria-describedby="with-left-label-hint"
        v-bind="args"
      />
    </div>`,
  }),
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: html`<InputText v-bind="args" />`,
  }),
};

export const Readonly: StoryObj<typeof meta> = {
  args: {
    readonly: true,
  },

  render: (args) => ({
    components: { InputText },
    setup() {
      return { args };
    },
    template: html`<InputText v-bind="args" />`,
  }),
};

export const Invalid: StoryObj<typeof meta> = {
  args: {
    invalid: true,
  },

  render: (args) => ({
    components: { InputText, ErrorOutline },
    setup() {
      return { args };
    },
    template: html`<div class="flex flex-col gap-2">
      <label class="ris-label2-regular" for="invalid">Label</label>
      <InputText id="invalid" aria-describedby="invalid-hint" v-bind="args" />
      <small id="invalid-hint">
        <ErrorOutline /> Error message with helper text goes here
      </small>
    </div>`,
  }),
};

export const FluidProp: StoryObj<typeof meta> = {
  args: {
    fluid: true,
  },

  render: (args) => ({
    components: { InputText, Fluid },
    setup() {
      return { args };
    },
    template: html`<InputText v-bind="args" />`,
  }),
};
