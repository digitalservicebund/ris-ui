import { tw } from "@/lib/tags.ts";
import { MultiSelectPassThroughOptions } from "primevue/multiselect";

const multiSelect: MultiSelectPassThroughOptions = {
  root: ({ props, state }) => {
    // Base
    const base = tw`ris-body2-regular [&+small]:ris-label3-regular relative inline-flex min-h-48 items-center justify-start border-2 bg-white py-4 pr-12 pl-12 [&+small]:mt-2 [&+small]:flex [&+small]:items-center [&+small]:gap-4 [&+small]:text-gray-900 [&[aria-invalid="true"]+small]:text-red-900`;

    // States
    const normal = tw`cursor-pointer border-blue-800`;

    const focused = tw`has-[:focus]:outline-4 has-[:focus]:-outline-offset-4 has-[:focus]:outline-blue-800`;

    const hover = tw`hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800`;

    const disabled = tw`cursor-not-allowed border-blue-500 text-blue-500 disabled:outline-hidden`;

    const invalid = tw`border-red-800 bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-hidden aria-[invalid]:disabled:outline-hidden`;

    // Integration for primevue/fluid
    const fluid = tw`w-full`;

    return {
      class: {
        [base]: true,
        [normal]: !props.disabled,
        [focused]: state.focused && !props.disabled,
        [hover]: !props.disabled,
        [fluid]: !!props.fluid,
        [disabled]: props.disabled,
        [invalid]: props.invalid,
      },

      "aria-invalid": props.invalid ? "true" : null,
    };
  },

  dropdown: {
    class: tw`pl-12`,
  },

  dropdownIcon: {
    class: tw`absolute top-16 right-8`,
  },

  listContainer: {
    class: tw`overflow-auto shadow-md`,
  },

  labelContainer: {
    class: tw`flex flex-row`,
  },

  overlay: {
    class: tw`bg-white`,
  },

  optionLabel: {
    class: tw`pl-12`,
  },

  header: {
    class: tw`hidden`,
  },

  option: ({ context }) => {
    // Base
    const base = tw`ris-body2-regular relative flex h-full min-h-48 w-full cursor-pointer border-l-4 border-transparent py-16 pr-24 pl-20 after:absolute after:right-8 after:-bottom-1 after:left-8 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100`;

    // States
    const focused = tw`border-l-4 border-solid border-l-blue-800 bg-gray-100`;

    return {
      class: {
        [base]: true,
        [focused]: context.focused,
      },
    };
  },
};

export default multiSelect;
