import { addons } from '@storybook/manager-api';
import customTheme from './storybookTheme';

addons.setConfig({
    theme: customTheme,
});