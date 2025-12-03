import { AutoCompletePassThroughOptions } from "primevue/autocomplete";
import { tw } from "@/lib/tags.ts";

const fluid = tw`w-full`;

const autocomplete: AutoCompletePassThroughOptions = {
  root: ({ props, state }) => {
    const base = tw`ris-body2-regular flex min-h-48 border-2 bg-white py-4 pr-4 pl-16 placeholder:text-gray-800`;

    const normal = tw`cursor-pointer border-blue-800`;

    const focused = tw`outline-4 -outline-offset-4 outline-blue-800`;

    const hover = tw`hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800`;

    const invalid = tw`aria-[invalid]:border-red-800 aria-[invalid]:bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:disabled:outline-hidden`;

    const disabled = tw`cursor-not-allowed border-blue-500 text-blue-500 disabled:outline-hidden`;

    return {
      class: {
        [base]: true,
        [normal]: !props.disabled,
        [focused]: state.focused && !props.disabled,
        [hover]: !props.disabled,
        [fluid]: !!props.fluid,
        [invalid]: props.invalid,
        [disabled]: props.disabled,
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

  inputMultiple: {
    class: tw`flex w-full flex-wrap items-center gap-4`,
  },

  inputChip: {
    class: tw`flex items-center`,
  },

  input: {
    class: tw`w-full focus-visible:outline-hidden`,
  },

  dropdown: {
    class: tw`absolute inset-y-0 right-16`,
  },

  option: {
    class: tw`cursor-pointer border-l-4 border-transparent hover:border-blue-600 hover:bg-blue-200 data-[p-focused=true]:border-blue-600 data-[p-focused=true]:bg-blue-200`,
  },

  optionGroup: {
    class: tw`hover:bg-blue-100 data-[p-focused=true]:bg-blue-200`,
  },

  overlay: {
    class: tw`mt-12 w-full overflow-auto bg-white px-8 py-12 shadow-md`,
  },
};

export default autocomplete;
