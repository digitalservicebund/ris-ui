import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3-vite";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

const meta: Meta<typeof Splitter> = {
  // @ts-expect-error Component type broken
  component: Splitter,

  tags: ["autodocs"],

  args: {
    layout: "horizontal",
  },
};

export default meta;

export const Horizontal: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() {
      return { args };
    },
    template: html`
      <Splitter class="h-320 w-full" v-bind="args">
        <SplitterPanel
          class="flex items-center justify-center"
          :size="75"
          :minSize="10"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </SplitterPanel>
        <SplitterPanel
          class="flex items-center justify-center"
          :size="25"
          :minSize="10"
        >
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};

export const Vertical: StoryObj<typeof meta> = {
  args: {
    layout: "vertical",
  },

  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() {
      return { args };
    },
    template: html`
      <Splitter class="h-screen min-h-[32rem] w-full" v-bind="args">
        <SplitterPanel
          class="flex items-center justify-center"
          :size="50"
          :minSize="20"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </SplitterPanel>
        <SplitterPanel
          class="flex items-center justify-center"
          :size="50"
          :minSize="20"
        >
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};

export const Nested: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Splitter, SplitterPanel },
    setup() {
      return { args };
    },
    template: html`
      <Splitter class="h-screen min-h-[32rem] w-full" v-bind="args">
        <!-- First panel (Single) -->
        <SplitterPanel
          class="flex items-center justify-center"
          :size="40"
          :minSize="20"
        >
          <p>Panel 1</p>
        </SplitterPanel>

        <!-- Second panel (Contains a Nested Splitter) -->
        <SplitterPanel class="flex flex-col" :size="60" :minSize="30">
          <Splitter layout="vertical" class="h-full w-full">
            <!-- Top Panel of Nested Splitter -->
            <SplitterPanel
              class="flex items-center justify-center"
              :size="50"
              :minSize="20"
            >
              <p>Nested Panel 1</p>
            </SplitterPanel>

            <!-- Bottom Panel of Nested Splitter -->
            <SplitterPanel
              class="flex items-center justify-center"
              :size="50"
              :minSize="20"
            >
              <p>Nested Panel 2</p>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    `,
  }),
};
