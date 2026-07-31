/// <reference types="vite/client" />

import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3-vite";
import { mswLoader } from "msw-storybook-addon/csf3";
import { setupWorker } from "msw/browser";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import { deDE } from "../src/config/locale";
import { RisUiTheme } from "../src/primevue";
// Note that the order of the CSS is important for the Storybook preview to
// render everything properly
import "../public/fonts.css";
import "./preview.css";
import "../src/tailwind/components-extra/drawer.css";

setup((app) => {
  app.use(PrimeVue, {
    pt: RisUiTheme,
    unstyled: true,
    locale: deDE,
  });

  app.use(ConfirmationService);

  app.use(ToastService);

  app.directive("tooltip", Tooltip);
});

const preview: Preview = {
  loaders: [
    mswLoader(async () => {
      const worker = setupWorker();
      await worker.start({
        serviceWorker: {
          // When deployed to GitHub pages, this will run in a subfolder
          url: import.meta.env.DEV ? "/mockServiceWorker.js" : "/ris-ui/mockServiceWorker.js",
        },
      });
      return worker;
    }),
  ],
  parameters: {
    options: {
      storySort: {
        order: ["primevue", "components", "tailwind"],
      },
    },
  },
};

export default preview;
