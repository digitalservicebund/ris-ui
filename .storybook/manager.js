import { addons } from "storybook/manager-api";
import { create as createTheme } from "storybook/theming/create";

const theme = createTheme({
  brandTitle: "Rechtsinformationen",
});

addons.setConfig({ theme });
