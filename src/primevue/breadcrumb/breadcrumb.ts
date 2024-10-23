import { BreadcrumbPassThroughOptions } from "primevue/breadcrumb";
import { tw } from "@/lib/tags.ts";

const breadcrumb: BreadcrumbPassThroughOptions = {
  list: {
    class: tw`m-0 flex list-none flex-wrap items-center p-0 leading-none`,
  },
  item: {
    class: tw`flex-no-wrap ris-label1-regular my-2 flex items-center`,
  },
  itemLink: {
    class: tw`ris-link1-regular inline-flex cursor-pointer items-center leading-tight no-underline outline-4 outline-offset-4 outline-blue-800 hover:underline focus:outline`,
  },
  separator: {
    class: tw`mx-2 flex items-center text-gray-600`,
  },
};

export default breadcrumb;
