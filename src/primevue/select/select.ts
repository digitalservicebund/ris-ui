import { tw } from "@/lib/tags.ts";
import { SelectPassThroughOptions } from "primevue/select";
import "./select.css";

const select: SelectPassThroughOptions = {
  root: ({ props, state }) => {
    // Base
    const base = tw`ris-body2-regular inline-flex h-48 items-center justify-between border-2 bg-white py-4 pl-16 pr-12 outline-4 -outline-offset-4`;

    // States
    const normal = tw`cursor-pointer border-blue-800 outline-blue-800`;

    const focused = tw`outline`;

    const hover = tw`hover:outline`;

    const disabled = tw`cursor-not-allowed border-blue-500 text-blue-500`;

    const invalid = tw`border-red-800 bg-red-200 outline-red-800`;

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

  listContainer: {
    class: tw`overflow-auto shadow-md`,
  },

  label: {
    class: tw`line-clamp-1 outline-none`,
  },

  overlay: {
    class: tw`bg-white`,
  },

  option: ({ context }) => {
    // Base
    const base = tw`ris-body2-regular relative h-full min-h-48 w-full cursor-pointer px-24 py-16 after:absolute after:-bottom-1 after:left-8 after:right-8 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100`;

    // States
    const focused = tw`bg-gray-100`;

    return {
      class: {
        [base]: true,
        [focused]: context.focused,
      },
    };
  },
};

export default select;
