import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import RadioButton from "primevue/radiobutton";
import { ref } from "vue";

const meta: Meta<typeof RadioButton> = {
  // @ts-expect-error Component type broken
  component: RadioButton,

  tags: ["autodocs"],

  args: {
    disabled: false,
    invalid: false,
    size: "normal",
  },

  argTypes: {
    size: { control: "select", options: ["small", "normal"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const checked = ref("");
      return { args, checked };
    },
    template: html`<RadioButton
      v-bind="args"
      v-model="checked"
      name="radio"
      value="radio"
    />`,
  }),
};

export const Small: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const checked = ref("");
      args.size = "small";
      return { args, checked };
    },
    template: html`<RadioButton
      v-bind="args"
      v-model="checked"
      name="radio"
      value="radio"
    />`,
  }),
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const checked = ref("radio");
      return { args, checked };
    },
    template: html`
      <div class="flex items-center pb-24">
        <RadioButton
          input-id="small-with-label"
          v-bind="args"
          v-model="checked"
          name="small"
          value="small"
          size="small"
        />
        <label for="small-with-label">Small radio with label</label>
      </div>
      <div class="flex items-center">
        <RadioButton
          input-id="radio-with-label"
          v-bind="args"
          v-model="checked"
          name="radio"
          value="radio"
        />
        <label for="radio-with-label">Radio with label</label>
      </div>
    `,
  }),
};

export const Group: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const checked = ref("radio-1");
      return { args, checked };
    },
    template: html`
      <div class="flex gap-32">
        <div class="flex items-center">
          <RadioButton
            input-id="radio-1"
            v-model="checked"
            name="radios"
            value="radio-1"
          />
          <label for="radio-1">One</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            input-id="radio-2"
            v-model="checked"
            name="radios"
            value="radio-2"
          />
          <label for="radio-2">Two</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            input-id="radio-3"
            v-model="checked"
            name="radios"
            value="radio-3"
          />
          <label for="radio-3">Three</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            input-id="radio-4"
            v-model="checked"
            name="radios"
            value="radio-4"
          />
          <label for="radio-4">Four</label>
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
    components: { RadioButton },
    setup() {
      const checked = ref("");
      return { args, checked };
    },
    template: html`
      <div class="mb-4 flex items-center">
        <RadioButton
          input-id="radio-with-error"
          v-bind="args"
          v-model="checked"
          name="radio"
          value="radio"
        />
        <label for="radio-with-error">Radio with label</label>
      </div>
      <span class="ris-body2-regular text-red-800">Error description</span>
    `,
  }),
};
