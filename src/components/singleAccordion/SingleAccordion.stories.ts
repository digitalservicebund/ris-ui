import { Meta, StoryObj } from "@storybook/vue3";
import SingleAccordion from ".";
import { html } from "@/lib/tags.ts";
import { ref } from "vue";

const meta: Meta<typeof SingleAccordion> = {
  component: SingleAccordion,

  tags: ["autodocs"],

  args: {
    headerCollapsed: "Show more",
    headerExpanded: "Show less",
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  argTypes: {
    headerCollapsed: { control: "text" },
    headerExpanded: { control: "text" },
    default: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { SingleAccordion },
    setup() {
      const active = ref(true);
      return { args, active };
    },
    template: html`<SingleAccordion v-bind="args" v-model="active"
      >{{args.default}}</SingleAccordion
    >`,
  }),
};
