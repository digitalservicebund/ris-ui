import { tw } from "@/lib/tags";
import { InputGroupPassThroughOptions } from "primevue/inputgroup";

const inputGroup: InputGroupPassThroughOptions = {
  root: {
    class: tw`has-[input:read-only]:curser-not-allowed inline-flex items-center gap-4 border-2 border-blue-800 bg-white px-16 py-0 has-[:focus]:outline has-[:focus]:outline-4 has-[:focus]:-outline-offset-4 has-[:focus]:outline-blue-800 has-[:hover]:outline has-[:hover]:outline-4 has-[:hover]:-outline-offset-4 has-[:hover]:outline-blue-800 has-[[aria-invalid]]:border-red-800 has-[[aria-invalid]]:bg-red-200 has-[[aria-invalid]]:outline-red-800 has-[[data-size=large]]:px-24 has-[input:disabled]:border-blue-500 has-[input:disabled]:bg-white has-[input:disabled]:text-blue-500 has-[input:disabled]:outline-hidden has-[input:read-only]:border-blue-300 has-[input:read-only]:bg-blue-300`,
  },
};

export default inputGroup;
