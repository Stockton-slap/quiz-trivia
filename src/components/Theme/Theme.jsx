import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  colors: {
    decorColor: "#ff8604",
    errorColor: "#fb0000",
    inputBgc: "#eeecec",
    mainTextColor: "#4e4e4e;",
  },
  decorFont: "'Kalam', cursive",
  transition: "all 200ms ease-in-out 0s",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
