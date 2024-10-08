import { InputMaskPassThroughOptions } from "primevue/inputmask";
import { tw } from "@/lib/tags.ts";
import { base, small } from "../inputText/inputText";

const fluid = tw`w-full`;

const inputMask: InputMaskPassThroughOptions = {
  pcInputText: {
    root: ({ props }) => {
      return {
        class: {
          [base]: true,
          [small]: true,
          [fluid]: !!props.fluid,
        },
      };
    },
  },
};

export default inputMask;
