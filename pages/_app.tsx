import "../shared/styles.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { globals } = pageProps;
  const { styling = undefined } = globals;

  const theme = {
    colors: {
      main: styling?.primaryColor,
      secondary: styling?.secondaryColor,
    },
  };

  return <Component {...pageProps} />;
}

export default MyApp;
