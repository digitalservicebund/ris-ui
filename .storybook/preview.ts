import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import customPresets from "../src/components/customPresets";
import 'primeicons/primeicons.css';
import "../src/style.css";

setup((app) => {
  app.use(PrimeVue, {
    pt: customPresets,
    unstyled: true,
  });
});