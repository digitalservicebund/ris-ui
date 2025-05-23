import { html } from "@/lib/tags";
import { Meta, StoryObj } from "@storybook/vue3";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

import "./tabs.stories.style.css";

const meta: Meta<typeof Tabs> = {
  // @ts-expect-error Component type broken
  component: Tabs,

  tags: ["autodocs"],

  args: {},
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: html` <Tabs value="0" class="team-a-tabs">
      <TabList>
        <Tab value="0">Lorem ipsum</Tab>
        <Tab value="1">Duis aute</Tab>
        <Tab value="2">Nam liber</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </TabPanel>
        <TabPanel value="1">
          <p class="m-0">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum Et harumd und lookum like Greek to me, dereud
            facilis est er expedit distinct.
          </p>
        </TabPanel>
        <TabPanel value="2">
          <p class="m-0">
            Nam liber te conscient to factor tum poen legum odioque civiuda. Et
            tam neque pecun modut est neque nonor et imper ned libidig met,
            consectetur adipiscing elit, sed ut labore et dolore magna aliquam
            makes one wonder who would ever read this stuff? Bis nostrud
            exercitation ullam mmodo consequet. Duis aute in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </TabPanel>
      </TabPanels>
    </Tabs>`,
  }),
};

Default.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};

export const CustomStyle: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanels, TabPanel },
    setup() {
      return { args };
    },
    template: html`
      <Tabs value="0" class="custom-tabs">
        <TabList>
          <Tab value="0">Custom stlye</Tab>
          <Tab value="1">Duis aute</Tab>
          <Tab value="2">Nam liber</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <p class="m-0">
              Use supported PrimeVue design tokens to customize the appearance.
              See <pre class="inline">tabs.stores.style.css</pre> for sample usage.
            </p>
          </TabPanel>
          <TabPanel value="1">
            <p class="m-0">
              Content
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p class="m-0">
              Content
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>`,
  }),
};

CustomStyle.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};
