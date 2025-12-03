import { tw } from "@/lib/tags";
import { RadioButtonPassThroughOptions } from "primevue/radiobutton";

const radioButton: RadioButtonPassThroughOptions = {
  root: {
    class: tw`[&+label]:ris-label1-regular relative inline-block h-32 w-32 [&+label]:ml-8`,
  },

  input: {
    class: tw`peer h-full w-full cursor-pointer appearance-none rounded-full border-2 border-blue-800 bg-white hover:outline hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-blue-800 active:outline-hidden disabled:cursor-not-allowed disabled:border-gray-600 aria-[invalid]:border-red-800 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-hidden aria-[invalid]:disabled:outline-hidden`,
  },

  box: {
    class: tw`pointer-events-none absolute inset-0 flex items-center justify-center text-transparent peer-checked:text-blue-800 peer-disabled:text-gray-600 peer-aria-[invalid]:text-red-800`,
  },

  icon: {
    class: tw`h-16 w-16 rounded-full bg-current`,
  },
};

export default radioButton;
