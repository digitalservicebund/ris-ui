import { html } from "@/lib/tags.ts";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import RisSingleAccordion from "./RisSingleAccordion.vue";

const meta: Meta<typeof RisSingleAccordion> = {
  component: RisSingleAccordion,

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

  parameters: {
    msw: { onUnhandledRequest: "bypass" }, // ignore MSW requests for icons
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RisSingleAccordion },
    setup() {
      const active = ref(true);
      return { args, active };
    },
    template: html`<RisSingleAccordion v-bind="args" v-model="active"
      >{{args.default}}</RisSingleAccordion
    >`,
  }),
};
