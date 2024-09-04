"use client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { store } from "../store/index";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#a855f7",
      },
      secondary: {
        main: "#ffffff",
        contrastText: "#a855f7",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
