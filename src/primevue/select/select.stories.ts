import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import PrimevueSelect from "primevue/select";
import { ref } from "vue";
import ErrorOutline from "~icons/material-symbols/error-outline";

const meta: Meta<typeof PrimevueSelect> = {
  // @ts-expect-error Component type broken
  component: PrimevueSelect,

  tags: ["autodocs"],

  args: {
    placeholder: "Dropdown",
    disabled: false,
    invalid: false,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Text 1", code: "AB" },
        { name: "Text 2", code: "CD" },
        { name: "Text 3", code: "EF" },
        { name: "Text 4", code: "GH" },
        { name: "Text 5", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html` <PrimevueSelect
      v-bind="args"
      v-model="selectedOption"
      optionLabel="name"
      optionValue="code"
      :options="options"
    />`,
  }),
};

export const WithLabel: StoryObj<typeof meta> = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { PrimevueSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Text 1", code: "AB" },
        { name: "Text 2", code: "CD" },
        { name: "Text 3", code: "EF" },
        { name: "Text 4", code: "GH" },
        { name: "Text 5", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html`<div class="flex flex-col gap-2">
      <label class="ris-label2-regular" for="with-top-label">Label</label>
      <PrimevueSelect
        id="with-top-label"
        v-bind="args"
        v-model="selectedOption"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
    </div>`,
  }),
};

export const WithHorizontalLabel: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimevueSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Text 1", code: "AB" },
        { name: "Text 2", code: "CD" },
        { name: "Text 3", code: "EF" },
        { name: "Text 4", code: "GH" },
        { name: "Text 5", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html`<div class="flex w-1/2 items-center gap-16">
      <label class="ris-label2-regular" for="with-left-label">Label</label>
      <PrimevueSelect
        id="with-left-label"
        v-bind="args"
        v-model="selectedOption"
        optionLabel="name"
        optionValue="code"
        :options="options"
        fluid
      />
    </div>`,
  }),
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { PrimevueSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Text 1", code: "AB" },
        { name: "Text 2", code: "CD" },
        { name: "Text 3", code: "EF" },
        { name: "Text 4", code: "GH" },
        { name: "Text 5", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html` <PrimevueSelect
      id="with-top-label"
      v-bind="args"
      v-model="selectedOption"
      optionLabel="name"
      optionValue="code"
      :options="options"
    />`,
  }),
};

export const Invalid: StoryObj<typeof meta> = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { PrimevueSelect, ErrorOutline },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Text 1", code: "AB" },
        { name: "Text 2", code: "CD" },
        { name: "Text 3", code: "EF" },
        { name: "Text 4", code: "GH" },
        { name: "Text 5", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html` <div class="flex flex-col gap-2">
      <label class="ris-label2-regular" for="invalid"> Dropdown </label>
      <PrimevueSelect
        id="invalid"
        aria-describedby="invalid-hint"
        v-bind="args"
        v-model="selectedOption"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
      <small id="invalid-hint"><ErrorOutline />Invalid date</small>
    </div>`,
  }),
};
