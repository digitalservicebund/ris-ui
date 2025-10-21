import { tw } from "@/lib/tags";
import { ChipPassThroughOptions } from "primevue";

const chip: ChipPassThroughOptions = {
  root: {
    class: tw`my-4 mr-6 inline-flex items-center rounded-full bg-blue-300 px-12 py-4`,
  },

  removeIcon: {
    class: tw`ml-4`,
  },
};

export default chip;
