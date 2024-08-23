import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import { RisUiTheme } from "../src/primevue";
import "../public/fonts.css";

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUiTheme,
    unstyled: true,
  });
});
