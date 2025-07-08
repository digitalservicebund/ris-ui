import { tw } from "@/lib/tags";
import type { TabPassThroughOptions } from "primevue/tab";
import type { TabPanelPassThroughOptions } from "primevue/tabpanel";
import type { TabListPassThroughOptions } from "primevue/tablist";

export const tab: TabPassThroughOptions = {
  root: ({ context }) => {
    const base = tw`h-64 px-24`;
    const active = tw`ris-body1-bold`;
    const inactive = tw`cursor-pointer hover:underline`;

    // CSS variables are applied directly via `style` property, not as Tailwind classes
    const activeStyle = `
      background-color: var(--p-tabview-nav-item-active-bg, transparent);
      color: var(--p-tabview-nav-item-active-text, black);
    `;
    const inactiveStyle = `
      background-color: var(--p-tabview-nav-item-inactive-bg, transparent);
      color: var(--p-tabview-nav-item-inactive-text, gray);
    `;

    return {
      class: {
        [base]: true,
        [active]: context.active,
        [inactive]: !context.active,
      },
      style: context.active ? activeStyle : inactiveStyle,
    };
  },
};

export const tabPanel: TabPanelPassThroughOptions = {
  root: {
    class: tw`p-24`,
  },
};

export const tabList: TabListPassThroughOptions = {
  tabList: {
    class: tw`relative flex gap-4`,
  },
};
