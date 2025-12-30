import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import Checkbox from "primevue/checkbox";
import { ref } from "vue";

const meta: Meta<typeof Checkbox> = {
  // @ts-expect-error Component type broken
  component: Checkbox,

  tags: ["autodocs"],

  args: {
    disabled: false,
    invalid: false,
    indeterminate: false,
    size: "small",
  },

  argTypes: {
    size: {
      control: "select",
      options: ["small", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: html`<Checkbox binary v-bind="args" v-model="checked" />`,
  }),
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: html`<Checkbox binary v-bind="args" v-model="checked" />`,
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: html`
      <div class="flex flex-col gap-24">
        <div class="flex items-center">
          <Checkbox input-id="checkbox-with-label" binary v-model="checked" />
          <label for="checkbox-with-label">Checkbox with label</label>
        </div>
        <div class="flex items-center">
          <Checkbox
            input-id="checkbox-with-label-large"
            binary
            size="large"
            v-model="checked"
          />
          <label for="checkbox-with-label-large">Checkbox with label</label>
        </div>
      </div>
    `,
  }),
};

export const WithErrorMessage: Story = {
  args: {
    invalid: true,
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: html`
      <div>
        <div class="mb-4 flex items-center">
          <Checkbox
            input-id="checkbox-with-error"
            binary
            v-bind="args"
            v-model="checked"
          />
          <label for="checkbox-with-error">Checkbox with label</label>
        </div>
        <span class="ris-body2-regular text-red-800">Error description</span>
      </div>
    `,
  }),
};
