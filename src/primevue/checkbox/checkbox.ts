import { tw } from "@/lib/tags";
import { CheckboxPassThroughOptions } from "primevue/checkbox";

const checkbox: CheckboxPassThroughOptions = {
  root: ({ props }) => {
    // Base
    const base = tw`[&+label]:ris-label1-regular relative inline-block h-24 min-h-24 w-24 min-w-24 [&+label]:ml-8`;

    return {
      class: {
        [base]: true,
        [tw`h-32 min-h-32 w-32 min-w-32`]: props.size === "large",
      },
    };
  },

  input: {
    class: tw`peer h-full w-full cursor-pointer appearance-none border-2 border-blue-800 bg-white outline-hidden hover:outline hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800 focus:outline focus:outline-4 focus:-outline-offset-4 focus:outline-blue-800 active:outline-hidden disabled:cursor-not-allowed disabled:border-gray-600 disabled:outline-hidden aria-[invalid]:border-red-800 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-none aria-[invalid]:disabled:outline-none`,
  },

  box: {
    class: tw`pointer-events-none absolute inset-0 flex items-center justify-center text-blue-800 peer-disabled:text-gray-600 peer-aria-[invalid]:text-red-800`,
  },

  icon: {
    class: tw`h-12 w-12`,
  },
};

export default checkbox;
