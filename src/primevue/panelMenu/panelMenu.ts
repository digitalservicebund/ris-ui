import { tw } from "@/lib/tags";
import { PanelMenuPassThroughOptions } from "primevue/panelmenu";

const pointer = tw`cursor-pointer`;

const selected = tw`ris-label1-bold border-l-blue-800 bg-blue-200 text-blue-900 hover:bg-blue-300`;

const notSelected = tw`ris-label1-regular hover:border-l-blue-600 hover:bg-blue-200`;

const focused = tw`-outline-offset-4 outline-blue-800 focus-visible:outline-4`;

const panelMenu: PanelMenuPassThroughOptions = {
  root: {
    class: tw`text-blue-800`,
  },

  header: ({ context }) => {
    const base = tw`group flex h-64 items-center border-l-4 border-transparent py-8 pr-20 pl-10`;

    return {
      class: {
        [base]: true,
        [focused]: true,
        [pointer]: true,
        [selected]: context.active,
        [notSelected]: !context.active,
      },
    };
  },

  content: {
    class: tw`mt-8 ml-28`,
  },

  rootList: {
    class: tw`focus-visible:outline-none`,
  },

  panel: {
    class: tw`focus-visible:outline-none`,
  },

  itemContent: ({ context }) => {
    const base = tw`group flex h-48 items-center border-l-4 border-transparent py-8 pr-20 pl-10`;

    // Unlike header, itemContent does not get a focus-visible pseudo-class. Instead, the focused context property must be used.
    // See https://github.com/primefaces/primevue/issues/6836
    const itemFocused = tw`${focused} not-[:hover]:outline-4`;

    return {
      class: {
        [base]: true,
        [itemFocused]: context.focused,
        [pointer]: true,
        [selected]: context.active,
        [notSelected]: !context.active,
      },
    };
  },
};

export default panelMenu;
