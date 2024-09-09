import { tw } from "@/lib/tags";
import { MessagePassThroughOptions } from "primevue/message";

const message: MessagePassThroughOptions = {
  root: ({ props, instance }) => {
    // Base
    const base = tw`ris-body1-regular border-l-4 px-20 py-14`;

    // Severity
    const severity = props.severity ?? "info";

    const success = tw`border-l-green-800 bg-green-200`;

    const info = tw`border-l-blue-800 bg-blue-200`;

    const warn = tw`border-l-yellow-800 bg-yellow-200`;

    const error = tw`border-l-red-800 bg-red-200`;

    // Default icon for severities
    const hasDefaultIcon = !!instance.$slots.icon;

    const iconNames: Record<string, string> = {
      success: "var(--ris-icon-success)",
      info: "var(--ris-icon-info)",
      warn: "var(--ris-icon-warn)",
      error: "var(--ris-icon-error)",
    };

    const iconName = iconNames[severity];

    const iconBg = tw`bg-[length:20px] bg-[16px_18px] bg-no-repeat pl-44`;

    return {
      class: {
        [base]: true,
        [success]: severity === "success",
        [info]: severity === "info",
        [warn]: severity === "warn",
        [error]: severity === "error",
        [iconBg]: !hasDefaultIcon,
      },
      style: {
        backgroundImage: !hasDefaultIcon ? iconName : undefined,
      },
    };
  },

  content: {
    class: tw`flex items-start gap-8`,
  },

  text: {
    class: tw`flex-1`,
  },

  closeButton: ({ props }) => {
    // Base
    const base = tw`mt-4 inline-flex h-20 w-20 flex-none items-center justify-center rounded-sm p-2 leading-none`;

    // Severity
    const severity = props.severity ?? "info";

    const success = tw`text-green-800 hover:bg-green-400 active:bg-green-500`;

    const info = tw`text-blue-800 hover:bg-blue-400 active:bg-blue-500`;

    const warn = tw`text-black hover:bg-yellow-400 active:bg-yellow-500`;

    const error = tw`text-red-800 hover:bg-red-400 active:bg-red-500`;

    return {
      class: {
        [base]: true,
        [success]: severity === "success",
        [info]: severity === "info",
        [warn]: severity === "warn",
        [error]: severity === "error",
      },
    };
  },
};

export default message;
