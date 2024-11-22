import { tw } from "@/lib/tags";
import { PanelMenuPassThroughOptions } from "primevue/panelmenu";

const pointer = tw`cursor-pointer`;
const selected = tw`ris-label2-bold border-l-blue-800 bg-blue-200 text-black`;
const hover = tw`hover:bg-blue-200`;
const hoverSelected = tw`hover:bg-blue-300`;

const focusVisible = tw`focus-visible:outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800`;
const panelMenu: PanelMenuPassThroughOptions = {
  root: {
    class: tw`text-blue-800`,
  },

  header: ({ context }) => {
    const base = tw`group flex h-64 items-center border-l-4 border-transparent py-8 pl-10 pr-20`;
    return {
      class: {
        [base]: true,
        [focusVisible]: true,
        [pointer]: true,
        [selected]: context.active,
        [hover]: !context.active,
        [hoverSelected]: context.active,
      },
    };
  },
  content: {
    class: tw`ml-28 mt-8`,
  },
  rootList: {
    class: tw`focus-visible:outline-none`,
  },
  panel: {
    class: tw`focus-visible:outline-none`,
  },
  itemLink: {
    class: tw`focus-visible:bg-black`,
  },
  itemContent: ({ context }) => {
    const base = tw`group flex h-48 items-center border-l-4 border-transparent py-8 pl-10 pr-20`;
    const focused = tw`outline-none outline-4 outline-offset-4 outline-blue-800`;

    return {
      class: {
        [base]: true,
        [focused]: context.focused,
        [pointer]: true,
        [selected]: context.active,
        [hover]: !context.active,
        [hoverSelected]: context.active,
      },
    };
  },
};

export default panelMenu;
