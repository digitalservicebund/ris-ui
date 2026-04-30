import type { BreadcrumbPassThroughOptions } from "primevue/breadcrumb";
import { tw } from "@/lib/tags.ts";

const breadcrumb: BreadcrumbPassThroughOptions = {
  list: {
    class: tw`m-0 flex flex-wrap items-center gap-x-2 gap-y-4 p-0 md:flex-nowrap`,
  },

  item: {
    class: tw`ris-label2-regular [&>a]:ris-link2-regular flex flex-nowrap items-center text-gray-900 *:line-clamp-1 md:flex-none md:last:flex-auto [&>a]:not-hover:no-underline`,
  },

  separator: {
    class: tw`flex items-center text-gray-800`,
  },
};

export default breadcrumb;
