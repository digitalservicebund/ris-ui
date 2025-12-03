import { tw } from "@/lib/tags.ts";
import { SelectPassThroughOptions } from "primevue/select";

const select: SelectPassThroughOptions = {
  root: ({ props, state }) => {
    // Base
    const base = tw`group ris-body2-regular [&+small]:ris-label3-regular relative inline-flex h-48 items-center justify-between border-2 bg-white py-4 pr-6 pl-16 [&+small]:mt-2 [&+small]:flex [&+small]:items-center [&+small]:gap-4 [&+small]:text-gray-900 [&[aria-invalid="true"]+small]:text-red-900`;

    // States
    const normal = tw`cursor-pointer border-blue-800`;

    const focused = tw`outline-4 -outline-offset-4 outline-blue-800`;

    const hover = tw`hover:outline-4 hover:-outline-offset-4 hover:outline-blue-800`;

    const disabled = tw`cursor-not-allowed border-blue-500 text-blue-500 disabled:outline-hidden`;

    const invalid = tw`border-red-800 bg-red-200 aria-[invalid]:outline-red-800 aria-[invalid]:active:outline-hidden aria-[invalid]:disabled:outline-hidden`;

    // Integration for primevue/fluid
    const fluid = tw`w-full`;

    return {
      class: {
        [base]: true,
        [normal]: !props.disabled,
        [focused]: (state.focused || state.overlayVisible) && !props.disabled,
        [hover]: !props.disabled,
        [fluid]: !!props.fluid,
        [disabled]: props.disabled,
        [invalid]: props.invalid,
      },

      "aria-invalid": props.invalid ? "true" : null,
    };
  },

  dropdown: ({ state, props }) => {
    const base = tw`ml-8 p-10`;

    const normal = tw`text-blue-800 group-hover:bg-blue-200`;

    const focused = tw`bg-blue-800 text-white`;

    const disabled = tw`text-blue-500`;

    return {
      class: {
        [base]: true,
        [normal]: !(state.focused || state.overlayVisible || props.disabled),
        [focused]: (state.focused || state.overlayVisible) && !props.disabled,
        [disabled]: props.disabled,
      },
    };
  },

  listContainer: {
    class: tw`overflow-auto shadow-md`,
  },

  label: {
    class: tw`line-clamp-1 grow outline-none`,
  },

  overlay: {
    class: tw`bg-white`,
  },

  option: ({ context }) => {
    // Base
    const base = tw`ris-body2-regular relative h-full min-h-48 w-full cursor-pointer px-16 py-12 after:absolute after:right-8 after:-bottom-1 after:left-8 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100`;

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
