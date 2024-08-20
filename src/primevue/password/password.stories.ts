import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import Password from "primevue/password";

const meta: Meta<typeof Password> = {
  component: Password,

  tags: ["autodocs"],

  args: {
    disabled: false,
    placeholder: "Placeholder",
    value: "Text",
    invalid: false,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    value: "password",
  },

  render: (args) => ({
    components: { Password },
    setup() {
      return { args };
    },
    template: html`<div class="flex w-320 flex-col gap-2">
      <label for="password" class="ris-label2-regular">Passwort</label>
      <Password
        id="password"
        :feedback="false"
        v-bind="args"
        v-model="args.value"
      />
    </div>`,
  }),
};
