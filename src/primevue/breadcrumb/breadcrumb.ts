import { BreadcrumbPassThroughOptions } from "primevue/breadcrumb";
import { tw } from "@/lib/tags.ts";

const breadcrumb: BreadcrumbPassThroughOptions = {
  list: () => {
    const base = tw`m-0 flex list-none flex-wrap items-center p-0 leading-none`;
    return {
      class: {
        [base]: true,
      },
    };
  },
  item: () => {
    const base = tw`flex-no-wrap my-2 flex items-center`;
    return {
      class: {
        [base]: true,
      },
    };
  },
  itemLink: () => {
    const states = tw`outline-4 outline-offset-4 outline-blue-800 focus:outline`;
    return {
      class: {
        "underline ris-link1-bold cursor-pointer inline-flex items-center":
          true,
        [states]: true,
      },
    };
  },
  separator: () => {
    return {
      class: {
        "flex items-center text-gray-600 mx-2": true,
      },
    };
  },
};

export default breadcrumb;
