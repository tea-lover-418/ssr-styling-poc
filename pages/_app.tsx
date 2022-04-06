import "../shared/styles.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { globals } = pageProps;
  const { styling = undefined } = globals;

  const theme = {
    "--color-primary": styling?.primaryColor || "",
    "--color-secondary": styling?.secondaryColor || "",
  };

  return (
    <div style={theme}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
