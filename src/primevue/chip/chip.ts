import { tw } from "@/lib/tags";
import { ChipPassThroughOptions } from "primevue";

const chip: ChipPassThroughOptions = {
  root: () => {
    // Base
    const base = tw`inline-flex items-center rounded-full bg-blue-300 py-4 px-12 my-4 mr-6`;

    return {
      class: {
        [base]: true,
      },
    };
  },

  removeIcon: {
    class: tw`ml-4`,
  }

};

export default chip;
