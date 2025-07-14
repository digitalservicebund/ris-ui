import { SplitterPassThroughOptions } from "primevue/splitter";
import { tw } from "@/lib/tags.ts";

const splitter: SplitterPassThroughOptions = {
  root: ({ props }) => ({
    class: {
      [tw`flex flex-nowrap rounded-none border-0 bg-transparent`]: true,
      [tw`flex-col`]: props.layout === "vertical",
    },
  }),

  gutter: ({ props }) => ({
    class: {
      [tw`flex shrink-0 items-center justify-center bg-gray-400 hover:bg-blue-700`]: true,
      [tw`h-full w-[3px] cursor-col-resize`]: props.layout === "horizontal",
      [tw`h-[3px] w-full cursor-row-resize`]: props.layout === "vertical",
    },
  }),

  gutterHandle: ({ props }) => ({
    class: {
      [tw`z-20 rounded bg-transparent outline-offset-2 outline-blue-800 focus:outline-2`]: true,
      [tw`h-11/12 w-[3px] cursor-col-resize`]: props.layout === "horizontal",
      [tw`h-[3px] w-11/12 cursor-row-resize`]: props.layout === "vertical",
    },
  }),
};

export default splitter;
