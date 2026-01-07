import { tw } from "@/lib/tags";
import { MenuPassThroughOptions } from "primevue/menu";

const menu: MenuPassThroughOptions = {
  root: {
    class: tw`ris-body2-regular border border-gray-600 bg-white shadow`,
  },

  list: {
    class: tw`focus-visible:outline-none`,
  },

  item: ({ context }) => {
    const base = tw`relative h-48 border-l-4 border-l-transparent pr-12 pl-16 after:absolute after:right-16 after:-bottom-1 after:left-12 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:border-l-blue-400 hover:bg-blue-100 active:border-l-blue-800 active:bg-blue-300`;

    const focused = tw`bg-blue-200 -outline-offset-4 outline-blue-800 not-hover:outline-4 hover:bg-blue-200`;

    return {
      class: {
        [base]: true,
        [focused]: context.focused,
      },
    };
  },
  itemContent: {
    class: tw`flex h-full items-center py-4`,
  },
  itemLink: {
    class: tw`flex items-center gap-8`,
  },
};

export default menu;
