import { tw } from "@/lib/tags.ts";
import { FileUploadPassThroughOptions } from "primevue/fileupload";

const fileUpload: FileUploadPassThroughOptions = {
  // @ts-expect-error types appear to be wrong here
  basicContent: {
    class: tw`flex flex-col items-center gap-10`,
  },

  input: {
    class: tw`hidden`,
  },
};

export default fileUpload;
