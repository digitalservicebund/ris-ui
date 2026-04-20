import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Chip } from "primevue";
import { ref } from "vue";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof Chip> = {
  // @ts-expect-error Component type broken
  component: Chip,

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: html`<Chip label="Chip" />`,
  }),
};

export const Removable: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: html`<Chip label="Chip" removable />`,
  }),
};
