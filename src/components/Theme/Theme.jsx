import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  colors: {
    decorColor: "#ff8604",
    formBorderColor: "#434040e6",
  },
  decorFont: "'Kalam', cursive",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
