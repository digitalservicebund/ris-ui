import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import customPreset from "../src/components/customPreset";
import "../src/style.css";

setup((app) => {
  app.use(PrimeVue, {
    pt: customPreset,
    unstyled: true,
  });
});
