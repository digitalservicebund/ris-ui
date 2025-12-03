import { ButtonPassThroughOptions } from "primevue/button";
import { tw } from "@/lib/tags.ts";

const button: ButtonPassThroughOptions = {
  root: ({ props, instance }) => {
    // Base
    const base = tw`relative inline-flex max-w-full cursor-pointer items-center justify-center gap-8 text-center focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800 focus-visible:not-focus-visible:outline-none active:outline-none disabled:cursor-not-allowed disabled:outline-hidden`;

    // Rounded
    const rounded = tw`rounded-full`;

    // Severity
    const severity = props.severity ?? "primary";

    const primary = tw`bg-blue-800 text-white hover:bg-blue-700 active:bg-blue-500 active:text-blue-800 disabled:bg-gray-400 disabled:text-gray-600`;

    const secondary = tw`border-2 border-blue-800 bg-white text-blue-800 hover:bg-blue-200 focus-visible:bg-blue-200 active:bg-blue-400 disabled:border-blue-500 disabled:text-blue-500 disabled:hover:bg-white`;

    const danger = tw`border-2 border-red-800 bg-white text-red-800 hover:bg-red-100 focus-visible:bg-red-100 focus-visible:outline-red-800 active:border-red-800 active:bg-red-400 disabled:border-red-500 disabled:text-red-500 disabled:hover:bg-white`;

    const info = tw`border border-blue-500 bg-white font-normal text-blue-800 hover:bg-gray-200 focus-visible:bg-gray-200 active:border-white active:bg-white disabled:border-blue-500 disabled:text-blue-500 disabled:hover:bg-white`;

    // Text
    // This is the "Ghost" variant of the button
    const primaryText = tw`border-2 border-transparent bg-transparent text-blue-800 underline hover:border-gray-500 hover:bg-white focus-visible:border-gray-500 active:border-blue-600 active:bg-blue-400 disabled:bg-transparent disabled:text-gray-500`;

    // Sizes
    const size = props.size ?? "normal";
    let small = tw`ris-body2-bold h-40 py-4`;
    let normal = tw`ris-body2-bold h-48 py-4`;
    let large = tw`ris-body1-bold h-64 py-4`;

    // Icon only
    if (instance.hasIcon && !props.label) {
      small = tw`${small} w-40 px-4`;
      normal = tw`${normal} w-48 px-4`;
      large = tw`${large} w-64 px-4`;
    }

    // Label only or label + icon
    else {
      small = tw`${small} px-12`;
      normal = tw`${normal} px-16`;
      large = tw`${large} px-24`;
    }

    return {
      class: {
        [base]: true,
        [rounded]: props.rounded,
        [small]: size === "small",
        [normal]: size === "normal",
        [large]: size === "large",
        [primary]: !props.text && severity === "primary",
        [secondary]: !props.text && severity === "secondary",
        [danger]: !props.text && severity === "danger",
        [info]: !props.text && severity === "info",
        [primaryText]: props.text && severity === "primary",
      },
    };
  },

  label: ({ props }) => ({
    class: {
      hidden: !props.label,
    },
  }),

  icon: ({ props }) => ({
    class: {
      "order-last": props.iconPos == "right",
    },
  }),

  loadingIcon: ({ props }) => {
    // Size
    const size = props.size ?? "normal";
    const normal = tw`h-[1.34em] w-[1.34em]`;
    const large = tw`h-24 w-24`;

    return {
      class: {
        [tw`animate-spin`]: true,
        [normal]: size === "normal",
        [large]: size === "large",
      },
    };
  },
};

export default button;
