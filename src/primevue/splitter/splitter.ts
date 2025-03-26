import { SplitterPassThroughOptions } from "primevue/splitter";
import { tw } from "@/lib/tags.ts";

const splitter: SplitterPassThroughOptions = {
  root: {
    class: tw`rounded-none border-0 bg-transparent`,
  },

  gutter: ({ props }) => ({
    class: {
      [tw`flex shrink-0 items-center justify-center bg-gray-400`]: true,
      [tw`h-full w-[3px] cursor-col-resize`]: props.layout === "horizontal",
      [tw`h-[3px] w-full cursor-row-resize`]: props.layout === "vertical",
    },
  }),

  gutterHandle: ({ props }) => ({
    class: {
      [tw`z-20 h-full w-full hover:bg-blue-700 focus:bg-blue-800 focus:outline-none`]:
        true,
      [tw`h-full w-[3px] cursor-col-resize`]: props.layout === "horizontal",
      [tw`h-[3px] w-full cursor-row-resize`]: props.layout === "vertical",
    },
  }),
};

export default splitter;
