import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import { RisUi } from "../src/primevue";

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUi,
    unstyled: true,
  });
});
