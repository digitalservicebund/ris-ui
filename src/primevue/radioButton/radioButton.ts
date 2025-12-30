import { tw } from "@/lib/tags";
import { RadioButtonPassThroughOptions } from "primevue/radiobutton";

const radioButton: RadioButtonPassThroughOptions = {
  root: ({ props }) => {
    const isSmall = props.size === "small";

    return {
      class: [
        tw`relative inline-block [&+label]:ml-8`,
        isSmall
          ? tw`[&+label]:ris-label2-regular h-24 w-24`
          : tw`[&+label]:ris-label1-regular h-32 w-32`,
      ],
    };
  },

  input: {
    class: tw`peer h-full w-full cursor-pointer appearance-none rounded-full border-2 border-blue-800 bg-white hover:outline hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-blue-800 active:outline-hidden disabled:cursor-not-allowed disabled:border-gray-600 aria-[invalid]:border-red-800 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-hidden aria-[invalid]:disabled:outline-hidden`,
  },

  box: {
    class: tw`pointer-events-none absolute inset-0 flex items-center justify-center text-transparent peer-checked:text-blue-800 peer-disabled:text-gray-600 peer-aria-[invalid]:text-red-800`,
  },

  icon: ({ props }) => {
    const isSmall = props.size === "small";

    return {
      class: [
        tw`rounded-full bg-current`,
        isSmall ? tw`h-12 w-12` : tw`h-16 w-16`,
      ],
    };
  },
};

export default radioButton;
