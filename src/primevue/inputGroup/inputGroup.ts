import { tw } from "@/lib/tags";
import { InputGroupPassThroughOptions } from "primevue/inputgroup";

const inputGroup: InputGroupPassThroughOptions = {
  root: {
    class: tw`has-[input:read-only]:curser-not-allowed inline-flex items-center gap-4 border-2 border-blue-800 bg-white px-16 py-0 outline-4 -outline-offset-4 outline-blue-800 has-[[aria-invalid]]:border-red-800 has-[input:disabled]:border-blue-500 has-[input:read-only]:border-blue-300 has-[[aria-invalid]]:bg-red-200 has-[input:disabled]:bg-white has-[input:read-only]:bg-blue-300 has-[[data-size=large]]:px-24 has-[input:disabled]:text-blue-500 has-[input:disabled]:outline-none has-[:focus]:outline has-[:hover]:outline has-[[aria-invalid]]:outline-red-800`,
  },
};

export default inputGroup;
