import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const { globals } = pageProps;
  const { styling } = globals || {};

  const theme = {
    colors: {
      primary: styling?.primaryColor,
      secondary: styling?.secondaryColor,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
