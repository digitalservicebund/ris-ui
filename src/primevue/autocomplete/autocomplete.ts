import { AutoCompletePassThroughOptions } from "primevue/autocomplete";
import { tw } from "@/lib/tags.ts";

const fluid = tw`w-full`;

const autocomplete: AutoCompletePassThroughOptions = {
  root: ({ props }) => {
    const base = tw`flex border-2 border-blue-800 bg-white outline-4 -outline-offset-4 outline-blue-800 placeholder:text-gray-800 focus-within:outline hover:outline disabled:border-blue-500 disabled:bg-white disabled:text-blue-500 disabled:outline-none`;
    const small = tw`ris-body2-regular h-48 py-4 pl-16 pr-4`;

    return {
      class: {
        [base]: true,
        [small]: true,
        [fluid]: !!props.fluid,
      },
    };
  },
  pcInput: {
    root: ({ props }) => {
      const focus = tw`focus-visible:outline-none`;
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
    class: tw`hover:bg-blue-100 data-[p-focus=true]:bg-blue-200`,
  },
  optionGroup: {
    class: tw`hover:bg-blue-100 data-[p-focus=true]:bg-blue-200`,
  },
  overlay: {
    class: tw`max-h-56 min-w-288 overflow-auto bg-white px-8 py-12 shadow-md`,
  },
};

export default autocomplete;
