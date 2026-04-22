import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button as PrimevueButton, Drawer } from "primevue";
import { ref } from "vue";
import { html } from "@/lib/tags.ts";

const meta: Meta<typeof Drawer> = {
  // @ts-expect-error Component type broken
  component: Drawer,

  tags: ["autodocs"],

  args: {
    header: "Drawer",
    position: "bottom",
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closeButtonProps: {
      label: "Close Button",
      iconPos: "right",
    },
  },

  render: (args) => ({
    components: { Drawer, PrimevueButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template: html`
      <PrimevueButton label="Show" @click="visible = true" />
      <Drawer v-model:visible="visible" v-bind="args">
        <div
          class="h-384 content-center border border-dashed border-blue-800 bg-blue-200 text-center"
        >
          <p>Content area</p>
        </div>
        <template #footer>
          <div class="h-40 content-center bg-blue-200 text-center">Footer</div>
        </template>
      </Drawer>
    `,
  }),
};

// Scrolling content
export const ScrollingContent: Story = {
  args: {
    closeButtonProps: {
      label: "Close Button",
      iconPos: "right",
    },
  },

  render: (args) => ({
    components: { Drawer, PrimevueButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template: html`
      <PrimevueButton label="Show" @click="visible = true" />
      <Drawer v-model:visible="visible" v-bind="args">
        <div
          class="h-[50rem] content-center border border-dashed border-blue-800 bg-blue-200 text-center"
        >
          <p>Content area</p>
        </div>
        <template #footer>
          <div class="h-40 content-center bg-blue-200 text-center">Footer</div>
        </template>
      </Drawer>
    `,
  }),
};

// No footer
export const NoFooter: Story = {
  args: {
    closeButtonProps: {
      label: "Close Button",
      iconPos: "right",
      size: "small",
      rounded: false,
      severity: "info",
    },
  },

  render: (args) => ({
    components: { Drawer, PrimevueButton },
    setup() {
      const visible = ref(false);

      return { args, visible };
    },
    template: html`
      <PrimevueButton label="Show" @click="visible = true" />
      <Drawer v-model:visible="visible" v-bind="args">
        <div
          class="h-384 content-center border border-dashed border-blue-800 bg-blue-200 text-center"
        >
          <p>Content area</p>
        </div>
      </Drawer>
    `,
  }),
};
