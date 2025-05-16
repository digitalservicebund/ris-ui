import { Meta, StoryObj } from "@storybook/vue3";
import RisPaginator from "./RisPaginator.vue";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof RisPaginator> = {
  component: RisPaginator,

  tags: ["autodocs"],

  args: {
    first: 0,
    rows: 10,
    totalRecords: 100,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RisPaginator },
    setup() {
      return { args }
    },
    template: html`
      <RisPaginator v-bind="args" />
    `,
  }),
};
