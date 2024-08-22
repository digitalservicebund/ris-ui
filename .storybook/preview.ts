import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import { RisUiTheme } from "../src/primevue";

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUiTheme,
    unstyled: true,
  });
});
