import { tw } from "@/lib/tags";
import { InputGroupPassThroughOptions } from "primevue/inputgroup";

const inputGroup: InputGroupPassThroughOptions = {
  root: {
    class: tw`flex`,
  },
};

export default inputGroup;
