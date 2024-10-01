import { AutoCompletePassThroughOptions } from "primevue/autocomplete";
import { tw } from "@/lib/tags.ts";
import { base, small } from "../inputText/inputText";

const fluid = tw`w-full`;

const autocomplete: AutoCompletePassThroughOptions = {
  root: ({ props }) => {
    const base = tw`relative`;

    return {
      class: {
        [base]: true,
        [fluid]: !!props.fluid,
      },
    };
  },
  pcInput: {
    root: ({ props }) => {
      return {
        class: {
          [base]: true,
          [small]: true,
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
    class: tw`max-h-56 !min-w-288 overflow-auto bg-white px-8 py-12 shadow-md`,
  },
};

export default autocomplete;
