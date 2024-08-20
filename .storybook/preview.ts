import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import preset from "../src/preset";

setup((app) => {
  app.use(PrimeVue, {
    pt: preset,
    unstyled: true,
  });
});
