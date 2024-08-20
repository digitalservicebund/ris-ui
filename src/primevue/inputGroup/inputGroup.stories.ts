import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";

const meta: Meta<typeof InputText> = {
  component: InputGroup,

  tags: ["autodocs"],

  args: {
    disabled: false,
    placeholder: "Placeholder",
    readOnly: false,
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

export const Left: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: html`<InputGroup>
      <InputGroupAddon>€</InputGroupAddon>
      <InputText v-bind="args" />
    </InputGroup>`,
  }),
};

export const Right: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: html`<InputGroup>
      <InputText v-bind="args" />
      <InputGroupAddon>€</InputGroupAddon>
    </InputGroup>`,
  }),
};