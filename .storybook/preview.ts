/// <reference types="vite/client" />

import { Preview, setup } from "@storybook/vue3";
import { initialize, mswLoader } from "msw-storybook-addon";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import "../public/fonts.css";
import { RisUiTheme } from "../src/primevue";
import { deDE } from "../src/config/locale";

initialize({
  serviceWorker: {
    // When deployed to GitHub pages, this will run in a subfolder
    url: import.meta.env.DEV
      ? "/mockServiceWorker.js"
      : "/ris-ui/mockServiceWorker.js",
  },
});

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUiTheme,
    unstyled: true,
    locale: deDE,
  });

  app.use(ConfirmationService);

  app.use(ToastService);
});

const preview: Preview = {
  loaders: [mswLoader],
};

export default preview;
