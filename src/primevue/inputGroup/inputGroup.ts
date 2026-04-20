import type { InputGroupPassThroughOptions } from "primevue/inputgroup";
import { tw } from "@/lib/tags";

const inputGroup: InputGroupPassThroughOptions = {
  root: {
    class: tw`flex`,
  },
};

export default inputGroup;
