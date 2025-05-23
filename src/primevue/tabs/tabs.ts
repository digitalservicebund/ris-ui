import { tw } from "@/lib/tags";
import type { TabPassThroughOptions } from "primevue/tab";
import type { TabPanelPassThroughOptions } from "primevue/tabpanel";
import type { TabListPassThroughOptions } from "primevue/tablist";

export const tab: TabPassThroughOptions = {
  root: ({ context, ...other }) => {
    console.log(context, other);
    const base = tw`ris-body2-bold h-64 border-b-4 border-b-transparent py-4 pr-24 pl-20 outline-0 -outline-offset-4 outline-blue-800 focus-visible:outline-4`;
    const active = tw`z-10 bg-[var(--p-tabs-tab-active-background,white)] text-black shadow-[-1px_-1px_0_0_var(--p-tabs-tab-border-color,var(--color-gray-600)),1px_-1px_0_0_var(--p-tabs-tab-border-color,var(--color-gray-600))]`;
    const inactive = tw`cursor-pointer text-blue-800 hover:border-b-blue-800`;
    return {
      class: {
        [base]: true,
        [active]: context.active,
        [inactive]: !context.active,
      },
    };
  },
};
export const tabPanel: TabPanelPassThroughOptions = {
  root: {
    class: tw`min-h-96 bg-[var(--p-tabs-tabpanel-background)] py-24 outline-blue-800 focus-visible:outline-solid`,
  },
};
export const tabList: TabListPassThroughOptions = {
  tabList: {
    class: tw`relative flex before:absolute before:bottom-0 before:left-[50%] before:h-px before:w-[var(--tab-list-separator-width,100%)] before:-translate-x-1/2 before:bg-[var(--p-tabs-tablist-border-color,var(--color-gray-600))]`,
  },
};
