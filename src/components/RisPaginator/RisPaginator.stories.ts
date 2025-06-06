import { Meta, StoryObj } from "@storybook/vue3-vite";
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

  argTypes: {
    first: {
      description: "Index of the first record to display",
      control: { type: "number" },
    },
    rows: {
      description: "Number of rows to display per page",
      control: { type: "number" },
    },
    totalRecords: {
      description: "Total number of records available",
      control: { type: "number" },
    },
    prevButtonLabel: {
      description: "Label for the previous button",
      control: { type: "text" },
    },
    nextButtonLabel: {
      description: "Label for the next button",
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RisPaginator },
    setup() {
      return { args };
    },
    template: html` <RisPaginator v-bind="args" /> `,
  }),
};
