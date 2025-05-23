import { ToastPassThroughOptions } from "primevue/toast";
import { tw } from "@/lib/tags.ts";

const toast: ToastPassThroughOptions = {
  root: {
    class: tw`max-w-lg`,
  },
  message: ({ props }) => {
    // Base
    const base = tw`mb-8 flex w-full flex-row items-center gap-8 border-l-4 p-16`;

    // Severity
    const severity = props.message?.severity;

    const success = tw`border-l-green-900 bg-green-200`;
    const error = tw`border-l-red-900 bg-red-200`;
    const warn = tw`border-l-yellow-900 bg-yellow-200`;
    const info = tw`border-l-blue-900 bg-blue-200`;

    return {
      class: {
        [base]: true,
        [success]: severity === "success",
        [error]: severity === "error",
        [warn]: severity === "warn",
        [info]: severity === "info",
      },
    };
  },

  messageContent: {
    class: tw`flex w-full flex-row items-start justify-between gap-10`,
  },

  messageIcon: ({ props }) => {
    // Base
    const base = tw`mt-2 h-20 w-20 flex-none shrink-0`;

    // Severity
    const severity = props.message?.severity ?? "info";

    const successIcon = tw`text-green-800`;
    const errorIcon = tw`text-red-800`;
    const warnIcon = tw`text-black`;
    const infoIcon = tw`text-blue-800`;

    return {
      class: {
        [base]: true,
        [successIcon]: severity === "success",
        [errorIcon]: severity === "error",
        [warnIcon]: severity === "warn",
        [infoIcon]: severity === "info",
      },
    };
  },

  messageText: {
    class: tw`flex-grow text-black`,
  },

  summary: {
    class: tw`ris-label2-bold`,
  },

  detail: {
    class: tw`ris-label2-regular`,
  },

  closeButton: ({ props }) => {
    // Base
    const base = tw`rounded-sm p-2`;

    // Severity
    const severity = props.message?.severity ?? "info";

    const successHover = tw`hover:bg-green-400`;
    const errorHover = tw`hover:bg-red-400`;
    const warnHover = tw`hover:bg-yellow-400`;
    const infoHover = tw`hover:bg-blue-400`;

    return {
      class: {
        [base]: true,
        [successHover]: severity === "success",
        [errorHover]: severity === "error",
        [warnHover]: severity === "warn",
        [infoHover]: severity === "info",
      },
    };
  },

  closeIcon: {
    class: tw`text-black`,
  },
};

export default toast;
