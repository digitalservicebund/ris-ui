import { tw } from "@/lib/tags";
import { DialogPassThroughOptions } from "primevue/dialog";

const dialog: DialogPassThroughOptions = {
  root: () => {
    // Base
    const base = tw`ris-label2-regular max-h-[90dvh] w-[95dvw] max-w-[25rem] border-2 border-blue-800 bg-white px-56 py-44 shadow-lg`;

    return {
      class: base,
    };
  },

  header: {
    class: tw`mb-16 flex`,
  },

  title: {
    class: tw`ris-label1-bold flex-1`,
  },

  headerActions: {
    class: tw`flex-none`,
  },

  pcCloseButton: {
    root: {
      class: tw`flex h-24 w-24 items-center justify-center p-4 text-blue-800 outline-hidden hover:outline-2 hover:outline-gray-500 focus-visible:outline-4 focus-visible:outline-blue-800 active:outline-none`,
    },
  },

  content: {
    // When an SVG is the first child of the content, we're applying a flex
    // styling. This is a heuristic for an icon in the dialog content, used
    // (for example) by the confirm dialog. If the svg is not the first child,
    // we assume that it is used in the context of some other layout and don't
    // apply extra styling.
    class: tw`ris-dialog-content overflow-auto has-[svg:first-child]:flex has-[svg:first-child]:gap-8 [&>svg:first-child]:flex-none`,
  },

  footer: {
    class: tw`mt-40 flex items-center justify-end gap-12`,
  },

  mask: {
    class: tw`bg-black/40`,
  },
};

export default dialog;
