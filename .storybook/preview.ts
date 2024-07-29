import { setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import customPresets from "../src/components/customPresets";
import 'primeicons/primeicons.css';
import "../src/style.css";

const globalStyles = `
  .pi {
    font-size: 20px; 
  }
`;

const style = document.createElement('style');
style.innerHTML = globalStyles;
document.head.appendChild(style);

setup((app) => {
  app.use(PrimeVue, {
    pt: customPresets,
    unstyled: true,
  });
});