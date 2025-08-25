import { AutoCompletePassThroughOptions } from "primevue/autocomplete";
import { tw } from "@/lib/tags.ts";

const fluid = tw`w-full`;

const autocomplete: AutoCompletePassThroughOptions = {
  root: ({ props }) => {
    const base = tw`flex border-2 border-blue-800 bg-white placeholder:text-gray-800 focus-within:outline-4 focus-within:-outline-offset-4 focus-within:outline-blue-800 hover:outline hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800 disabled:border-blue-500 disabled:bg-white disabled:text-blue-500 disabled:outline-hidden`;
    const small = tw`ris-body2-regular h-48 py-4 pr-4 pl-16`;
    const invalid = tw`aria-[invalid]:border-red-800 aria-[invalid]:bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:disabled:outline-hidden`;

    return {
      class: {
        [base]: true,
        [small]: true,
        [fluid]: !!props.fluid,
        [invalid]: props.invalid,
      },

      "aria-invalid": props.invalid ? "true" : null,
    };
  },
  pcInputText: {
    root: ({ props }) => {
      const focus = tw`focus-visible:outline-hidden`;
      return {
        class: {
          [focus]: true,
          [fluid]: !!props.fluid,
        },
      };
    },
  },
  dropdown: { class: tw`absolute inset-y-0 right-16` },
  option: {
    class: tw`cursor-pointer border-l-4 border-transparent hover:bg-blue-100 data-[p-focused=true]:border-blue-800 data-[p-focused=true]:bg-blue-200`,
  },
  optionGroup: {
    class: tw`hover:bg-blue-100 data-[p-focused=true]:bg-blue-200`,
  },
  overlay: {
    class: tw`mt-12 w-full overflow-auto bg-white px-8 py-12 shadow-md`,
  },
};

export default autocomplete;
