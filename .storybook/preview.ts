import { Preview, setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import { RisUiTheme } from "../src/primevue";
import ToastService from "primevue/toastservice";
import "../public/fonts.css";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUiTheme,
    unstyled: true,
  });

  app.use(ToastService);
});

const preview: Preview = {
  loaders: [mswLoader],
};

export default preview;
