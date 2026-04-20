import { tw } from "@/lib/tags";
import type { InputGroupPassThroughOptions } from "primevue/inputgroup";

const inputGroup: InputGroupPassThroughOptions = {
  root: {
    class: tw`flex`,
  },
};

export default inputGroup;
