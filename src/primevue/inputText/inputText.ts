import { tw } from "@/lib/tags";
import { InputTextPassThroughOptions } from "primevue/inputtext";

// Base
export const base = tw`[&+small]:ris-label3-regular border-2 border-blue-800 bg-white placeholder:text-gray-800 read-only:cursor-not-allowed read-only:border-blue-300 read-only:bg-blue-300 hover:outline hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800 focus:outline focus:outline-4 focus:-outline-offset-4 focus:outline-blue-800 disabled:border-blue-500 disabled:bg-white disabled:text-blue-500 disabled:outline-hidden aria-[invalid]:border-red-800 aria-[invalid]:bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:disabled:outline-hidden [&+small]:mt-4 [&+small]:flex [&+small]:items-center [&+small]:gap-4 [&+small]:text-gray-900 [&[aria-invalid="true"]+small]:text-red-900`;

// Sizes
export const small = tw`ris-body2-regular h-48 px-16 py-4`;
export const large = tw`ris-body1-regular h-64 px-24 py-4`;
export const smallInGroup = tw`ris-body2-regular h-[44px] p-0`; // 2px group border
export const largeInGroup = tw`ris-body1-regular h-[60px] p-0`;

const inputText: InputTextPassThroughOptions = {
  root: ({ props, parent }) => {
    // Integration for primevue/password
    // This is styled here rather than in the password component because it
    // makes accessing the placeholder easier
    const password = tw`[&[type=password]]:w-full [&[type=password]:not(:placeholder-shown)]:text-[28px] [&[type=password]:not(:placeholder-shown)]:tracking-[4px]`;

    // Integration for primevue/inputGroup
    const isInputGroup = parent.instance.$name === "InputGroup";
    const inputGroup = tw`bg-transparent placeholder:text-gray-900 focus:outline-hidden`;

    // Integration for primevue/fluid
    const fluid = tw`w-full`;

    return {
      class: {
        [base]: !isInputGroup,
        [inputGroup]: isInputGroup,
        [fluid]: !!props.fluid,
        [password]: true,
        [small]: (!props.size || props.size === "small") && !isInputGroup,
        [smallInGroup]: (!props.size || props.size === "small") && isInputGroup,
        [large]: props.size === "large" && !isInputGroup,
        [largeInGroup]: props.size === "large" && isInputGroup,
      },
      "data-size": props.size ?? "small",
    };
  },
};

export default inputText;
