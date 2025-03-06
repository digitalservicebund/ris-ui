import { Meta, StoryObj } from "@storybook/vue3";
import ProgressSpinner from "primevue/progressspinner";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof ProgressSpinner> = {
  // @ts-expect-error Component type broken
  component: ProgressSpinner,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ProgressSpinner },
    setup() {
      return { args };
    },
    template: html`<ProgressSpinner />`,
  }),
};
