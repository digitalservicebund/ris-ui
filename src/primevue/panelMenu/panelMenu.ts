import { tw } from "@/lib/tags";
import { PanelMenuPassThroughOptions } from "primevue/panelmenu";

const pointer = tw`cursor-pointer`;
const selected = tw`ris-label2-bold border-l-blue-800 bg-blue-200 text-black hover:bg-blue-300 focus-visible:bg-blue-300`;
const notSelected = tw`hover:bg-blue-200 focus-visible:bg-blue-200`;

const focusVisible = tw`focus-visible:outline-none`;
const panelMenu: PanelMenuPassThroughOptions = {
  root: {
    class: tw`text-blue-800`,
  },

  header: ({ context }) => {
    const base = tw`group flex h-64 items-center border-l-4 border-transparent py-8 pr-20 pl-10`;
    return {
      class: {
        [base]: true,
        [focusVisible]: true,
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
    // Unlike header, itemContent does not get a focus-visible pseudo-class. Instead, the focused context property must be used.
    // See https://github.com/primefaces/primevue/issues/6836
    const base = tw`group flex h-48 items-center border-l-4 border-transparent py-8 pr-20 pl-10`;
    const activeAndFocused = tw`bg-blue-300`;
    const inactiveAndFocused = tw`bg-blue-200`;
    return {
      class: {
        [base]: true,
        [activeAndFocused]: context.active && context.focused,
        [inactiveAndFocused]: !context.active && context.focused,
        [focusVisible]: true,
        [pointer]: true,
        [selected]: context.active,
        [notSelected]: !context.active,
      },
    };
  },
};

export default panelMenu;
