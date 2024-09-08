import { ProgressSpinnerPassThroughOptions } from "primevue/progressspinner";
import { tw } from "@/lib/tags.ts";

const progressSpinner: ProgressSpinnerPassThroughOptions = {
  root: {
    class: tw`relative mx-auto inline-block h-28 w-28 animate-spin`,
  },

  circle: {
    class: tw`fill-transparent stroke-current stroke-[4px] text-blue-800 [stroke-dasharray:200] [stroke-dashoffset:100]`,
  },
};

export default progressSpinner;
