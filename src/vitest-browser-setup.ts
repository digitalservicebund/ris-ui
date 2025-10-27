// This file is for global initializations in preparation for running vitest
// browser tests.

import { deDE } from "@/config/locale";
import { RisUiTheme } from "@/primevue";
import PrimeVue from "primevue/config";
import { config } from "vitest-browser-vue";
import "./vitest-browser.css";

config.global.plugins = [
  [
    PrimeVue,
    {
      pt: RisUiTheme,
      unstyled: true,
      locale: deDE,
    },
  ],
];
