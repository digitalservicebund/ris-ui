import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import PresetCollection from "../src/components/PresetCollection";
import "../src/style.css";
import '../src/global.css';

setup((app) => {
  app.use(PrimeVue, {
    pt: PresetCollection,
    unstyled: true,
  });
});
