import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import preset from "../src/components/preset";
import "../src/global.css";

setup((app) => {
  app.use(PrimeVue, {
    pt: preset,
    unstyled: true,
  });
});
