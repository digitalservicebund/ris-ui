import { tw } from "@/lib/tags.ts";
import { usePrimeVue } from "primevue/config";
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

  hooks: {
    onBeforeMount() {
      const primevue = usePrimeVue();

      if (primevue.config.locale) {
        primevue.config.locale.choose = "Auswählen ...";
        primevue.config.locale.noFileChosenMessage = "Keine Datei ausgewählt.";
      }
    },
  },
};

export default fileUpload;
