import {
  DataTablePassThroughOptions,
  DataTableContext,
} from "primevue/datatable";
import { tw } from "@/lib/tags";
import checkbox from "../checkbox/checkbox";

const dataTable: DataTablePassThroughOptions = {
  root: {
    class: tw`relative`,
  },

  tableContainer: {
    class: tw`overflow-visible`,
  },
  table: {
    class: tw`w-full border-none text-left`,
  },

  thead: {
    class: tw`sticky top-0 bg-white shadow-[0_1px_0_var(--color-blue-300)]`,
  },

  tbody: {
    class: tw`divide-y divide-blue-300`,
  },

  bodyRow: ({ context }: { context: DataTableContext }) => ({
    class: [
      tw`focus:outline-4 focus:-outline-offset-5 focus:outline-blue-800 focus:not-focus-visible:outline-none focus-visible:outline-4 focus-visible:-outline-offset-5 focus-visible:outline-blue-800`,
      {
        "bg-blue-300": context.selected,
        "hover:bg-blue-100": !context.selected,
      },
    ],
  }),

  // height for td works like min-height: Table cells will grow when the content does not fit.
  column: {
    headerCell: {
      class: tw`ris-label2-bold h-56 px-16 py-12`,
    },

    bodyCell: {
      class: tw`ris-body1-regular h-56 px-16 py-12`,
    },

    pcHeaderCheckbox: {
      ...checkbox,
      root: {
        class: tw`relative block h-24 w-24`,
      },
    },

    pcRowCheckbox: {
      ...checkbox,
      root: {
        class: tw`relative block h-24 w-24`,
      },
    },
  },

  mask: {
    class: tw`text-primary-500 justify-content absolute inset-0 z-10 mt-56 flex justify-center py-96`,
  },

  loadingIcon: {
    class: tw`inline-block h-24 w-24 animate-spin border-solid border-r-transparent text-blue-900 motion-reduce:animate-[spin_1.5s_linear_infinite]`,
  },

  emptyMessageCell: {
    class: tw`py-96 text-center text-gray-900`,
  },
};

export default dataTable;
