import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: "gb-light",
      dark: "gb-dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
