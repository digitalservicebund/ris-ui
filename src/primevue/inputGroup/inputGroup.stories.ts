import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputText,
  Button as PrimevueButton,
} from "primevue";
import IcBaselineSearch from "~icons/ic/baseline-search";

const meta: Meta<typeof InputText> = {
  // @ts-expect-error Component type broken
  component: InputGroup,

  tags: ["autodocs"],

  args: {
    disabled: false,
    placeholder: "Placeholder",
    readonly: false,
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

export const WithButton: StoryObj<typeof meta> = {
  render: (args) => ({
    components: {
      IcBaselineSearch,
      InputGroup,
      InputGroupAddon,
      InputText,
      PrimevueButton,
    },
    setup() {
      return { args };
    },
    template: html`<InputGroup>
      <InputText v-bind="args" type="search" />
      <InputGroupAddon>
        <PrimevueButton
          aria-label="Suchen"
          :size="args.size === 'large' ? 'large' : undefined"
          :disabled="args.disabled || args.readonly"
        >
          <template #icon>
            <IcBaselineSearch />
          </template>
        </PrimevueButton>
      </InputGroupAddon>
    </InputGroup>`,
  }),
};

export const Left: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { InputGroup, InputGroupAddon, InputText },
    setup() {
      return { args };
    },
    template: html`<InputGroup>
      <InputGroupAddon
        class="flex items-center border-y-2 border-l-2 border-blue-800 bg-gray-100 px-16 py-4"
      >
        Left addon
      </InputGroupAddon>
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
      <InputGroupAddon
        class="flex items-center border-y-2 border-r-2 border-blue-800 bg-gray-100 px-16 py-4"
      >
        Right addon
      </InputGroupAddon>
    </InputGroup>`,
  }),
};
