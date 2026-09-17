import { addons } from "storybook/manager-api";
import { create as createTheme } from "storybook/theming/create";
import brandImage from "./logo.svg";

const theme = createTheme({
  brandImage,
  brandTitle: "Rechtsinformationen des Bundes | Styleguide",
});

addons.setConfig({ theme });
