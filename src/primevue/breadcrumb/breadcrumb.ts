import { BreadcrumbPassThroughOptions } from "primevue/breadcrumb";
import { tw } from "@/lib/tags.ts";

const breadcrumb: BreadcrumbPassThroughOptions = {
  list: {
    class: tw`m-0 flex list-none flex-wrap items-center p-0 leading-none`,
  },
  item: {
    class: tw`flex-no-wrap ris-label1-regular my-2 flex items-center break-all`,
  },
  itemLink: {
    class: tw`inline-flex cursor-pointer items-center text-blue-800 underline-offset-[3px] hover:underline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800`,
  },
  separator: {
    class: tw`mx-6 flex items-center text-gray-600`,
  },
};

export default breadcrumb;
