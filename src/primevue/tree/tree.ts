import { TreePassThroughOptions } from "primevue/tree";
import { tw } from "@/lib/tags.ts";
import "./tree.css";

const tree: TreePassThroughOptions = {
  node: {
    class: tw`mb-24 last:mb-0 focus-visible:outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800 [&>ul:first-of-type]:border-l-0`,
  },
  nodeContent: ({ context }) => {
    const base = tw`group ris-label2-bold flex w-full border-l-4 border-transparent py-10 pl-10 pr-20 text-blue-800`;
    const pointer = tw`cursor-pointer select-none`;
    const focusVisible = tw`focus-visible:outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800`;
    const selected = tw`border-l-blue-800 bg-blue-200 text-black`;
    const hover = tw`hover:bg-blue-200`;
    const hoverSelected = tw`hover:bg-blue-300`;

    return {
      class: {
        [base]: true,
        [pointer]: true,
        [selected]: context.selected,
        [hover]: !context.selected,
        [hoverSelected]: context.selected,
        [focusVisible]: true,
      },
    };
  },
  nodeToggleButton: ({ context }) => {
    const base = tw`inline-flex h-20 w-20 justify-center border-0 bg-transparent text-gray-900 outline-none hover:text-black group-hover:text-black`;
    const hidden = tw`hidden`;

    return {
      class: {
        [base]: true,
        [hidden]: context.leaf,
      },
    };
  },
  nodeChildren: () => {
    const base = tw`m-0 list-none border-l border-gray-600 p-0 pl-36 outline-none [&:not(ul)]:pl-0 [&>ul:first-of-type]:border-0`;
    const focusVisible = tw`focus-visible:outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800`;
    return {
      class: {
        [base]: true,
        [focusVisible]: true,
      },
    };
  },
  nodeLabel: ({ context }) => {
    const base = tw`group flex w-full flex-col items-start outline-none *:w-full *:outline-none group-hover:text-black [&>*:first-child]:group-hover:underline [&>*:last-child]:group-hover:no-underline`;
    const selected = tw`text-black [&>*:last-child:is(span)]:text-gray-900`;
    const hoverSelected = tw`[&>*:last-child]:group-hover:text-black`;

    return {
      class: {
        [base]: true,
        [selected]: context.selected,
        [hoverSelected]: context.selected,
      },
    };
  },
};

export default tree;
