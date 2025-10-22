import { Meta, StoryObj } from "@storybook/vue3-vite";
import { html } from "@/lib/tags.ts";
import RisChipsInput from "./RisChipsInput.vue";
import { ref } from "vue";

const meta: Meta<typeof RisChipsInput> = {
  component: RisChipsInput,

  tags: ["autodocs"],

  args: {},

  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: ["banane", "apple"],
  },
  render: (args) => ({
    components: { RisChipsInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html` <RisChipsInput v-bind="args" v-model="value" /> `,
  }),
};

export const WithMask: Story = {
  name: "With mask",
  args: {
    modelValue: ["01.01.1970", "01.01.2000"],
    mask: "99.99.9999",
    placeholder: "TT.MM.JJJJ",
  },
  render: (args) => ({
    components: { RisChipsInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html` <RisChipsInput v-bind="args" v-model="value" /> `,
  }),
};

export const WrappedWithLabel: Story = {
  name: "Wrapped with label",
  args: {
    modelValue: ["banane", "apple"],
    inputId: "fruits",
  },
  render: (args) => ({
    components: { RisChipsInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: html`
      <div>
        <label for="fruits">Favorite Fruits</label>
        <RisChipsInput v-bind="args" v-model="value" />
      </div>
    `,
  }),
};
