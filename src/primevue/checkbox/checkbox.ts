import { tw } from "@/lib/tags";
import { CheckboxPassThroughOptions } from "primevue/checkbox";

const checkbox: CheckboxPassThroughOptions = {
  root: {
    class: tw`relative inline-block h-24 w-24 [&+label]:ris-label2-regular [&+label]:ml-8`,
  },

  input: {
    class: tw`peer h-full w-full cursor-pointer appearance-none border-2 border-blue-800 bg-white outline-4 -outline-offset-4 outline-blue-800 hover:outline focus:outline active:outline-none disabled:cursor-not-allowed disabled:border-gray-600 disabled:outline-none aria-[invalid]:border-red-800 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-none aria-[invalid]:disabled:outline-none`,
  },

  box: {
    class: tw`pointer-events-none absolute inset-0 flex items-center justify-center text-blue-800 peer-disabled:text-gray-600 peer-aria-[invalid]:text-red-800`,
  },
};

export default checkbox;
