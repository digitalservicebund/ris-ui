import type { ChipPassThroughOptions } from "primevue";
import { tw } from "@/lib/tags";

const chip: ChipPassThroughOptions = {
  root: {
    class: tw`mr-6 inline-flex items-center rounded-full bg-blue-300 px-12 py-4`,
  },

  removeIcon: {
    class: tw`ml-4`,
  },
};

export default chip;
