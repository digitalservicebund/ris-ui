import { SelectPassThroughOptions } from "primevue/select";
import { tw } from "@/lib/tags.ts";
import "./select.css";

export const base = tw`ris-body2-regular min-h-48 border-2 border-blue-800 bg-white px-16 py-4 outline-4 -outline-offset-4 outline-blue-800 placeholder:text-gray-600 hover:outline focus:outline disabled:border-blue-500 disabled:bg-white disabled:text-blue-500 disabled:outline-none [&+label]:my-4`;

const select: SelectPassThroughOptions = {
  root: ({ props }) => {
    return {
      class: {
        [base]: true,
        "w-full": !!props.fluid,
        "flex items-center justify-between": true,
      },
      tabindex: 0,
      onKeydown: (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          const dropdown = event.currentTarget as HTMLElement;
          dropdown.click();
        }
      },
    };
  },
  label: () => {
    return {
      tabindex: -1,
    };
  },
  list: () => {
    return {
      class: tw`shadow-md`,
    };
  },
  option: () => {
    return {
      class: tw`ris-body2-regular relative h-full min-h-48 w-full bg-white px-24 py-16 after:absolute after:bottom-0 after:left-8 after:right-8 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100`,
      tabindex: 0,
    };
  },
};

export default select;
