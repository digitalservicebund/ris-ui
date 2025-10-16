import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import { Chip } from "primevue";

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
    template: html`<Chip label="Chip" removable/>`,
  }),
};
