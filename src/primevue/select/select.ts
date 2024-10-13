import { SelectPassThroughOptions } from "primevue/select";
import { tw } from "@/lib/tags.ts";
import "./select.css";

const outlineStyles = tw`border-blue-800 outline-4 -outline-offset-4 outline-blue-800`;

const stateStyles = tw`hover:outline has-[span:focus]:outline has-[span[aria-expanded=true]]:outline`;

const invalidStyles = tw`border-red-800 bg-red-200 outline-red-800`;

const base = tw`ris-body2-regular flex min-h-48 items-center justify-between border-2 px-16 py-4 placeholder:text-gray-600 [&+label]:ml-8`;

const select: SelectPassThroughOptions = {
  root: ({ props }) => {
    console.log(props);
    return {
      class: {
        [base]: true,
        "w-full": !!props.fluid,
        [outlineStyles]: !props.disabled,
        [stateStyles]: !props.disabled,
        "border-blue-500 text-blue-500 outline-none cursor-not-allowed":
          props.disabled,
        [invalidStyles]: props.invalid,
      },
      "aria-invalid": props.invalid ? "true" : null,
    };
  },
  label: () => {
    return {
      class: tw`outline-none`,
    };
  },
  listContainer: {
    class: tw`overflow-auto shadow-md`,
  },
  option: () => {
    return {
      class: tw`ris-body2-regular relative h-full min-h-48 w-full bg-white px-24 py-16 after:absolute after:bottom-0 after:left-8 after:right-8 after:border-b after:border-gray-300 after:content-[''] last:after:border-b-0 hover:bg-gray-100 data-[p-focused=true]:bg-gray-100`,
    };
  },
};

export default select;
