import { ButtonPassThroughOptions } from "primevue/button";
import { tw } from "@/lib/tags.ts";

const button: ButtonPassThroughOptions = {
  root: ({ props, instance }) => {
    // Base
    const base = tw`relative inline-flex max-w-full items-center justify-center gap-8 rounded-none text-center outline-4 outline-offset-4 outline-blue-800 focus:outline active:outline-none disabled:cursor-not-allowed disabled:outline-none`;

    // Severity
    const severity = props.severity ?? "primary";

    const primary = tw`bg-blue-800 text-white hover:bg-blue-700 active:bg-blue-500 active:text-blue-800 disabled:bg-gray-400 disabled:text-gray-600`;

    const secondary = tw`border-2 border-blue-800 bg-white text-blue-800 hover:bg-gray-200 focus:bg-gray-200 active:border-white active:bg-white disabled:border-blue-500 disabled:text-blue-500 disabled:hover:bg-white`;

    // Text
    // This is the "Ghost" variant of the button
    const primaryText = tw`border-2 border-transparent bg-transparent text-blue-800 underline hover:border-gray-500 hover:bg-white focus:border-gray-500 active:border-white active:bg-white disabled:bg-transparent disabled:text-gray-500`;

    // Sizes
    const size = props.size ?? "small";
    let small = tw`ris-body2-bold h-48 py-4`;
    let large = tw`ris-body1-bold h-64 py-4`;

    // Icon position
    const iconPos = props.iconPos ?? "left";

    // Icon + label
    if (instance.hasIcon && props.label) {
      if (iconPos === "left") {
        small = tw`${small} pl-8 pr-16`;
        large = tw`${large} pl-20 pr-24`;
      } else if (iconPos === "right") {
        small = tw`${small} pl-16 pr-8`;
        large = tw`${large} pl-24 pr-20`;
      }
    }

    // Icon only
    else if (instance.hasIcon && !props.label) {
      small = tw`${small} w-48 px-4`;
      large = tw`${large} w-64 px-4`;
    }

    // Label only
    else {
      small = tw`${small} px-16`;
      large = tw`${large} px-24`;
    }

    return {
      class: {
        [base]: true,
        [small]: size === "small",
        [large]: size === "large",
        [primary]: !props.text && severity === "primary",
        [secondary]: !props.text && severity === "secondary",
        [primaryText]: props.text && severity === "primary",
      },
    };
  },

  label: ({ props }) => ({
    class: {
      hidden: !props.label,
      [tw`-order-1`]: props.iconPos === "right",
    },
  }),

  loadingIcon: ({ props }) => ({
    class: {
      [tw`animate-spin`]: true,
      [tw`h-24 w-24`]: props.size === "large",
      [tw`h-[1.34em] w-[1.34em]`]: !props.size || props.size === "small",
    },
  }),
};

export default button;
