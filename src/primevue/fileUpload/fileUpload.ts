import { tw } from "@/lib/tags.ts";
import { FileUploadPassThroughOptions } from "primevue/fileupload";

const fileUpload: FileUploadPassThroughOptions = {
  root: () => {
    const base = tw`flex flex-col items-center gap-10`;

    return {
      class: {
        [base]: true,
      },
    };
  },

  input: () => ({
    class: "hidden",
  }),
};

export default fileUpload;
