import { tw } from "@/lib/tags";
import { TextareaPassThroughOptions } from "primevue/textarea";
import "./textarea.css";

const textarea: TextareaPassThroughOptions = {
  root: ({ props }) => {
    // Base
    const base = tw`ris-body2-regular h-48 border-2 border-blue-800 bg-white px-16 py-10 outline-4 -outline-offset-4 outline-blue-800 placeholder:text-gray-900 read-only:cursor-not-allowed read-only:border-blue-300 read-only:bg-blue-300 hover:outline focus:outline disabled:border-blue-500 disabled:bg-white disabled:text-blue-500 disabled:outline-none aria-[invalid]:border-red-800 aria-[invalid]:bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:disabled:outline-none`;

    // Integration for primevue/fluid
    const fluid = tw`w-full`;

    return {
      class: {
        [base]: true,
        [fluid]: !!props.fluid,
      },
    };
  },
};

export default textarea;
