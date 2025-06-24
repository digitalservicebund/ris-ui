import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import Tooltip from "primevue/tooltip";
import InputText from "primevue/inputtext";

const meta: Meta<typeof Tooltip> = {
  // @ts-expect-error Component type broken
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => ({
    components: { InputText },
    setup() {},
    template: html`
      <div class="card flex flex-wrap justify-items-start gap-16">
        <InputText
          v-tooltip="'Look at these fields'"
          type="text"
          placeholder="Default"
        />
        <InputText
          v-tooltip.right="'and input some data'"
          type="text"
          placeholder="Right"
        />
        <InputText
          v-tooltip.top="'whatever you feel like,'"
          type="text"
          placeholder="Top"
        />
        <InputText
          v-tooltip.bottom="'validate if you wish,'"
          type="text"
          placeholder="Bottom"
        />
        <InputText
          v-tooltip.left="'and donʼt forget aria-labels.'"
          type="text"
          placeholder="Left"
        />
      </div>
    `,
  }),
};
