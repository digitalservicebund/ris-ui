import type { BreadcrumbPassThroughOptions } from "primevue/breadcrumb";
import { tw } from "@/lib/tags.ts";

const breadcrumb: BreadcrumbPassThroughOptions = {
  list: {
    class: tw`m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-4 p-0 leading-none`,
  },

  item: {
    class: tw`flex-no-wrap ris-label2-regular flex items-center break-all text-gray-900`,
  },

  itemLink: {
    class: tw`inline-flex cursor-pointer items-center text-blue-800 decoration-[0.1875rem] underline-offset-[0.1875rem] hover:underline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800`,
  },

  separator: {
    class: tw`flex items-center text-gray-800`,
  },
};

export default breadcrumb;
