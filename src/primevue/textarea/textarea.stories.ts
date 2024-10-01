import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import PrimevueTextarea from "primevue/textarea";
import ErrorOutline from "~icons/material-symbols/error-outline";

// Imported as Btn because somehow formatting sometimes changes
// "PrimevueTextarea" to "PrimevueTextarea", breaking the stories
const meta: Meta<typeof PrimevueTextarea> = {
  component: PrimevueTextarea,

  tags: ["autodocs"],

  args: {
    autoResize: true,
    disabled: false,
    fluid: false,
    placeholder: "Placeholder",
    readonly: false,
    value: "Text",
    invalid: false,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueTextarea },
    setup() {
      return { args };
    },
    template: html`<PrimevueTextarea v-bind="args" />`,
  }),
};

export const WithLabelAndHint: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueTextarea },
    setup() {
      return { args };
    },
    template: html`
      <div class="flex flex-col gap-2">
        <label class="ris-label2-regular" for="with-label">Label</label>
        <PrimevueTextarea
          id="with-label"
          aria-describedby="with-label-hint"
          v-bind="args"
        />
        <small id="with-label-hint">Additional hint text</small>
      </div>
    `,
  }),
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { PrimevueTextarea },
    setup() {
      return { args };
    },
    template: html`<PrimevueTextarea v-bind="args" />`,
  }),
};

export const Readonly: StoryObj<typeof meta> = {
  args: {
    readonly: true,
  },
  render: (args) => ({
    components: { PrimevueTextarea },
    setup() {
      return { args };
    },
    template: html`<PrimevueTextarea v-bind="args" />`,
  }),
};

export const Invalid: StoryObj<typeof meta> = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { PrimevueTextarea, ErrorOutline },
    setup() {
      return { args };
    },
    template: html`
      <div class="flex flex-col gap-2">
        <label class="ris-label2-regular" for="invalid-with-label">Label</label>
        <PrimevueTextarea
          id="invalid-with-label"
          aria-describedby="invalid-with-label-hint"
          v-bind="args"
        />
        <small id="invalid-with-label-hint">
          <ErrorOutline /> Error message with helper text goes here
        </small>
      </div>
    `,
  }),
};

export const FluidProp: StoryObj<typeof meta> = {
  args: {
    fluid: true,
  },
  render: (args) => ({
    components: { PrimevueTextarea },
    setup() {
      return { args };
    },
    template: html`<PrimevueTextarea v-bind="args" />`,
  }),
};
