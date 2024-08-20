import { ButtonPassThroughOptions } from "primevue/button";

const button: ButtonPassThroughOptions = {
  root: ({ props, context, instance }) => {
    // Define variables for different parts of the styling logic
    let iconStyling;
    let sizeStyling;
    let primarySeverityStyling;
    let secondarySeverityStyling;
    let ghostSeverityStyling;
    let iconOrdering;

    // Icon position adjustments for Large size
    if (instance.hasIcon && props.size === "large" && props.label) {
      if (props.iconPos === "left") {
        iconStyling = "pl-20 pr-24 gap-8";
      } else if (props.iconPos === "right") {
        iconStyling = "pl-24 pr-20 gap-8";
      }
    }

    // Icon position adjustments for Small size
    if (
      instance.hasIcon &&
      (!props.size || props.size === "small") &&
      props.label
    ) {
      if (props.iconPos === "left") {
        iconStyling = "pl-12 pr-16 gap-4";
      } else if (props.iconPos === "right") {
        iconStyling = "pl-16 pr-12 gap-4";
      }
    }

    // Adjustments for when there is an icon but no label
    if (instance.hasIcon && !props.label) {
      iconStyling = "p-0 gap-0";
    }

    // Size adjustments
    if (props.size === "large") {
      sizeStyling = props.label
        ? "py-20 px-24 text-[1.125rem] min-h-64"
        : "w-64 h-64";
    } else {
      sizeStyling = props.label ? "py-8 px-16 text-base min-h-48" : "w-48 h-48";
    }

    // Primary severity styles
    if (props.severity === "primary") {
      if (!context.disabled) {
        primarySeverityStyling =
          "bg-blue-800 border-transparent text-white hover:bg-blue-700 active:bg-blue-500 active:text-blue-800 focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4";
      } else {
        primarySeverityStyling =
          "bg-gray-400 cursor-not-allowed text-gray-600 border-transparent";
      }
    }

    // Secondary severity styles
    if (props.severity === "secondary") {
      if (!context.disabled) {
        secondarySeverityStyling =
          "bg-white text-blue-800 border-solid border-blue-800 hover:bg-gray-200 active:bg-white active:text-blue-800 active:border-transparent focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-2 focus:bg-gray-200";
      } else {
        secondarySeverityStyling =
          "bg-white cursor-not-allowed text-blue-800 text-opacity-50 border-blue-800 border-opacity-50";
      }
    }

    // Ghost severity styles
    if (props.severity === "ghost") {
      if (!context.disabled) {
        ghostSeverityStyling =
          "bg-transparent text-blue-800 border-transparent hover:bg-white hover:border-gray-500 hover:border-2 hover:border-solid active:bg-white active:border-transparent focus:outline-none focus:ring-blue-800 focus:ring-4 focus:ring-offset-4 focus:bg-white focus:border-gray-500 focus:border-2 focus:border-solid";
      } else {
        ghostSeverityStyling =
          "cursor-not-allowed text-gray-800 text-opacity-50 border-transparent";
      }
    }

    // Icon ordering
    if (instance.hasIcon) {
      if (props.iconPos === "left") {
        iconOrdering = "flex-row";
      } else if (props.iconPos === "right") {
        iconOrdering = "flex-row-reverse";
      }
    }

    return {
      class: [
        "inline-flex",
        "items-center",
        "justify-center",
        "font-bold",
        "text-center",
        "max-w-full",
        "leading-24",
        "rounded-none",
        "box-border",
        "border",
        "border-2",
        !context.disabled &&
          "focus:outline-none focus:ring-4 focus:ring-offset-4",
        !props.size && "py-8 px-16 text-base min-h-48",
        iconStyling,
        sizeStyling,
        primarySeverityStyling,
        secondarySeverityStyling,
        ghostSeverityStyling,
        iconOrdering,
      ],
    };
  },
  label: ({ props }) => ({
    class: [
      { underline: props.severity === "ghost" },
      { "sr-only": !props.label },
    ],
  }),
};

export default button;
