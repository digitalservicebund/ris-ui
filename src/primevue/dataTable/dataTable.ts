import { DataTablePassThroughOptions } from "primevue/datatable";
import { tw } from "@/lib/tags";

const dataTable: DataTablePassThroughOptions = {
  table: {
    class: tw`w-full text-left`,
  },

  tbody: {
    class: tw`ris-body2-regular divide-y divide-blue-300`,
  },

  column: {
    headerCell: {
      class: tw`ris-body2-bold px-14 py-12`,
    },

    bodyCell: {
      class: tw`px-14 py-12`,
    },
  },
};

export default dataTable;
