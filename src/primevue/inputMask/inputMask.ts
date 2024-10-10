import { InputMaskPassThroughOptions } from "primevue/inputmask";
import { base, small } from "../inputText/inputText";

const inputMask: InputMaskPassThroughOptions = {
  pcInputText: {
    root: ({ props }) => {
      return {
        class: {
          [base]: true,
          [small]: true,
          "w-full": !!props.fluid,
        },
      };
    },
  },
};

export default inputMask;
