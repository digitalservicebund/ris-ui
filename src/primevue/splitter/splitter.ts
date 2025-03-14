import { SplitterPassThroughOptions } from "primevue/splitter";
import { tw } from "@/lib/tags.ts";

const splitter: SplitterPassThroughOptions = {
  root: {
    class: tw`rounded-none border-0 bg-transparent`,
  },
  gutter: ({ props }) => ({
    class: tw`flex w-4 shrink-0 items-center justify-center bg-gray-400 transition-all duration-200 ${props.layout === "horizontal" ? " h-full cursor-col-resize" : "h-4 w-full cursor-row-resize"} `,
  }),
  gutterHandle: ({ props }) => ({
    class: tw`active:outline-hidden, z-20 rounded-full transition-all duration-200 focus:outline focus:outline-2 focus:outline-blue-800 ${props.layout === "horizontal" ? "h-full w-4" : "w-full h-4"} `,
  }),
};

export default splitter;
