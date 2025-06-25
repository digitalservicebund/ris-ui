import { TooltipDirectivePassThroughOptions } from "primevue/tooltip";
import { tw } from "@/lib/tags.ts";

const tooltip: TooltipDirectivePassThroughOptions = {
  arrow: ({ context }) => {
    // build a triangle by defining a zero-pixel element with two transparent
    // borders on the sides and one solid border in the middle
    const base = tw`absolute h-0 w-0 border-[7px] border-solid`;
    const top = tw`-mr-[7px] border-b-0 border-t-gray-900 border-r-transparent border-l-transparent`;
    const right = tw`-mt-[7px] border-l-0 border-t-transparent border-r-gray-900 border-b-transparent`;
    const bottom = tw`-ml-[7px] border-t-0 border-r-transparent border-b-gray-900 border-l-transparent`;
    const left = tw`-mt-[7px] border-r-0 border-t-transparent border-b-transparent border-l-gray-900`;

    const noPlacementDefined =
      !context.top && !context.right && !context.bottom && !context.left;

    return {
      class: {
        [base]: true,
        [top]: context.top,
        [right]: context.right || noPlacementDefined,
        [bottom]: context.bottom,
        [left]: context.left,
      },
    };
  },
  text: {
    class: tw`ris-label3-regular m-[7px] rounded-sm bg-gray-900 px-8 py-4 text-center whitespace-pre-line text-white`,
  },
  root: {
    class: tw`absolute`,
  },
};

export default tooltip;
