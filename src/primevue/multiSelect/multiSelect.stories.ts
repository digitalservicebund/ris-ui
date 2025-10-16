import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import PrimeVueMultiSelect from "primevue/multiselect";
import { ref } from "vue";

const meta: Meta<typeof PrimeVueMultiSelect> = {
  // @ts-expect-error Component type broken
  component: PrimeVueMultiSelect,

  tags: ["autodocs"],

  args: {
    placeholder: "Dropdown",
    disabled: false,
    invalid: false,
    appendTo: "body",
  },
  argTypes: {
    appendTo: {
      options: ["self", "body"],
      control: {
        type: "select",
        labels: ["self", "body"],
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimeVueMultiSelect },
    setup() {
      const selectedOptions = ref();
      const options = ref([
        { name: "Some really quite long text", code: "AB" },
        { name: "And then some even longer text here", code: "CD" },
        { name: "Some more long text", code: "EF" },
        { name: "Some text", code: "GH" },
        { name: "Text", code: "IJ" },
      ]);
      return { args, selectedOptions, options };
    },
    template: html` <PrimeVueMultiSelect
      v-bind="args"
      v-model="selectedOptions"
      optionLabel="name"
      optionValue="code"
      :options="options"
      
    />`,
  }),
};

export const Chips: StoryObj<typeof meta> = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { PrimeVueMultiSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Some really quite long text", code: "AB" },
        { name: "And then some even longer text here", code: "CD" },
        { name: "Some more long text", code: "EF" },
        { name: "Some text", code: "GH" },
        { name: "Text", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html`<div class="flex flex-col gap-2">
      <PrimeVueMultiSelect
        v-bind="args"
        v-model="selectedOption"
        display="chip"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
    </div>`,
  }),
};

export const WithLabel: StoryObj<typeof meta> = {
  args: {
    disabled: false,
  },
  render: (args) => ({
    components: { PrimeVueMultiSelect },
    setup() {
      const selectedOption = ref();
      const options = ref([
        { name: "Some really quite long text", code: "AB" },
        { name: "And then some even longer text here", code: "CD" },
        { name: "Some more long text", code: "EF" },
        { name: "Some text", code: "GH" },
        { name: "Text", code: "IJ" },
      ]);
      return { args, selectedOption, options };
    },
    template: html`<div class="flex flex-col gap-2">
      <label class="ris-label2-regular" for="with-top-label">Label</label>
      <PrimeVueMultiSelect
        v-bind="args"
        v-model="selectedOption"
        labelId="with-top-label"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
    </div>`,
  }),
};

export const WithHorizontalLabel: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { PrimeVueMultiSelect },
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
      <PrimeVueMultiSelect
        v-bind="args"
        v-model="selectedOption"
        labelId="with-left-label"
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
    components: { PrimeVueMultiSelect },
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
      <PrimeVueMultiSelect
        v-bind="args"
        v-model="selectedOption"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
    </div>`,
  }),
};


export const Invalid: StoryObj<typeof meta> = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { PrimeVueMultiSelect },
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
      <PrimeVueMultiSelect
        v-bind="args"
        v-model="selectedOption"
        optionLabel="name"
        optionValue="code"
        :options="options"
      />
    </div>`,
  }),
};
