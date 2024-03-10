import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
    defaultTheme: "gb-light",
  }),
];

export default preview;
