import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "primevue/checkbox";
import { ref } from "vue";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,

  tags: ["autodocs"],

  args: {
    disabled: false,
    invalid: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
      <div class="flex items-center">
        <Checkbox
          input-id="checkbox-with-label"
          binary
          v-bind="args"
          v-model="checked"
        />
        <label for="checkbox-with-label">Checkbox with label</label>
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
    `,
  }),
};
