import { DataTablePassThroughOptions } from "primevue/datatable";
import { tw } from "@/lib/tags";

const dataTable: DataTablePassThroughOptions = {
  root: ({ props }) => ({
    class: {
      [tw`relative`]: true,
      [tw`flex h-full flex-col`]:
        props.scrollable && props.scrollHeight === "flex",
    },
  }),

  tableContainer: ({ props }) => ({
    class: {
      [tw`relative`]: props.scrollable,
      [tw`flex h-full grow flex-col`]:
        props.scrollable && props.scrollHeight === "flex",
    },
  }),

  table: {
    class: tw`w-full border-collapse`,
  },

  thead: ({ props }) => ({
    class: {
      [tw`sticky top-0 z-40 bg-white`]: props.scrollable,
    },
  }),

  bodyRow: {
    class: tw`border-t border-blue-300 hover:bg-blue-200`,
  },

  rowExpansionCell: {
    class: tw`p-0`,
  },

  column: {
    headerCell: {
      class: tw`ris-body2-bold py-8 pr-32 pl-8 text-center`,
    },

    columnHeaderContent: {
      class: tw`flex items-center gap-2`,
    },

    bodyCell: ({
      props,
      context,
    }: {
      props: { expander?: boolean };
      context: { type?: string; column?: { props?: { expander?: boolean } } };
    }) => {
      const isExpander =
        props?.expander ||
        context?.type === "expansion" ||
        context?.column?.props?.expander;

      return isExpander
        ? { class: tw`w-6 py-8 pl-8 text-blue-800` }
        : { class: tw`ris-body2-regular py-8 pr-32 pl-8 hover:bg-blue-200` };
    },
  },
};

export default dataTable;
