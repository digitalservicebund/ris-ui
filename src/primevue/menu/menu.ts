import { tw } from "@/lib/tags";
import { MenuPassThroughOptions } from "primevue/menu";

const menu: MenuPassThroughOptions = {
  root: {
    class: tw`ris-body2-regular bg-white shadow`,
  },
  list: {
    class: tw`focus-visible:outline-none`,
  },
  item: ({ context }) => {
    const base = tw`relative h-48 pl-16 pr-12 after:absolute after:-bottom-1 after:left-16 after:right-16 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100`;
    const focused = tw`bg-gray-200 hover:bg-gray-200`;
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
