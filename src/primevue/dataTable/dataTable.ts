import {
  DataTablePassThroughOptions,
  DataTableContext,
} from "primevue/datatable";
import { tw } from "@/lib/tags";

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
    style: {
      borderBottom: "1px solid var(--color-blue-300)",
    },
  },

  tbody: {
    class: tw`divide-y divide-blue-300`,
  },

  bodyRow: {
    class: tw`hover:bg-blue-100`,
    // The selected row is registered correctly, but this styling is not attached correctly:
    // https://github.com/primefaces/primevue/issues/7759
    style: ({ context }: { context: DataTableContext }) => ({
      backgroundColor: context.selected ? "var(--color-blue-300)" : undefined,
    }),
  },

  // height for td works like min-height: Table cells will grow when the content does not fit.
  column: {
    headerCell: {
      class: tw`ris-label2-bold h-56 px-16 py-12`,
    },

    bodyCell: {
      class: tw`ris-body1-regular h-56 px-16 py-12`,
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
