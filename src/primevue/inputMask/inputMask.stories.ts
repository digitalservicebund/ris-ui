import { Meta, StoryObj } from "@storybook/vue3";
import InputMask from "primevue/inputmask";
import { html } from "@/lib/tags";
import Fluid from "primevue/fluid";
import { ref } from "vue";
import ErrorOutline from "~icons/material-symbols/error-outline";

const meta: Meta<typeof InputMask> = {
  component: InputMask,

  tags: ["autodocs"],

  args: {
    disabled: false,
    fluid: false,
    placeholder: "TT.MM.JJJJ",
    mask: "99.99.9999",
    readOnly: false,
    invalid: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof meta> = {
  args: {
    modelValue: "12.12.2023",
  },
  render: (args) => ({
    components: { InputMask },
    setup() {
      return { args };
    },
    template: html` <InputMask id="basic" v-bind="args" /> `,
  }),
};

export const WithLabelAndHint: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputMask },
    setup() {
      return { args };
    },
    template: html`<div class="flex w-2/5 flex-col gap-2">
      <label class="ris-label2-regular" for="with-top-label">Date</label>
      <InputMask id="with-top-label" v-bind="args" />
      <small id="with-top-label-hint">Additional hint text</small>
    </div>`,
  }),
};

export const WithHorizontalLabel: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputMask },
    setup() {
      return { args };
    },
    template: html`<div class="flex items-center gap-16">
      <label class="ris-label2-regular" for="with-left-label">Label</label>
      <InputMask id="with-left-label" v-bind="args" />
    </div>`,
  }),
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },

  render: (args) => ({
    components: { InputMask },
    setup() {
      return { args };
    },
    template: html`<InputMask id="basic" v-bind="args" />`,
  }),
};

export const Readonly: StoryObj<typeof meta> = {
  args: {
    readonly: true,
  },

  render: (args) => ({
    components: { InputMask },
    setup() {
      return { args };
    },
    template: html`<InputMask id="basic" v-bind="args" />`,
  }),
};

export const Invalid: StoryObj<typeof meta> = {
  args: {
    invalid: true,
  },

  render: (args) => ({
    components: { InputMask, ErrorOutline },
    setup() {
      return { args };
    },
    template: html`<div class="flex w-1/4 flex-col gap-2">
      <InputMask id="invalid" aria-describedby="invalid-hint" v-bind="args" />
      <small id="invalid-hint"> <ErrorOutline /> Invalid date </small>
    </div>`,
  }),
};

export const StartWithEndDate: Story = {
  render: () => ({
    components: { InputMask },
    setup() {
      const startDate = ref("");
      const endDate = ref("");
      return { startDate, endDate };
    },
    template: html`
      <div class="flex items-center gap-4">
        <div class="flex flex-col">
          <InputMask
            id="start-date"
            v-model="startDate"
            v-bind="args"
            placeholder="TT.MM.JJJJ"
            mask="99.99.9999"
          />
        </div>
        <span class="mx-2">–</span>
        <div class="flex flex-col">
          <InputMask
            id="end-date"
            v-model="endDate"
            v-bind="args"
            placeholder="TT.MM.JJJJ"
            mask="99.99.9999"
          />
        </div>
      </div>
    `,
  }),
};

export const ThreeFields: StoryObj<typeof meta> = {
  render: () => ({
    components: { InputMask },
    setup() {
      const day = ref("");
      const month = ref("");
      const year = ref("");

      return { day, month, year };
    },
    template: html`
      <div class="flex flex-col gap-2">
        <label for="date-input-group" class="mb-1 block">Datum</label>
        <div id="date-input-group" class="flex items-center gap-2">
          <div class="flex w-64 flex-col">
            <InputMask
              id="day-input"
              v-model="day"
              mask="99"
              placeholder="TT"
            />
          </div>
          <div class="flex w-64 flex-col">
            <InputMask
              id="month-input"
              v-model="month"
              mask="99"
              placeholder="MM"
            />
          </div>

          <div class="flex w-128 flex-col">
            <InputMask
              id="year-input"
              v-model="year"
              mask="9999"
              placeholder="JJJJ"
            />
          </div>
        </div>
      </div>
    `,
  }),
};
export const FluidProp: StoryObj<typeof meta> = {
  args: {
    fluid: true,
  },

  render: (args) => ({
    components: { InputMask, Fluid },
    setup() {
      return { args };
    },
    template: html`<InputMask id="basic" v-bind="args" />`,
  }),
};
