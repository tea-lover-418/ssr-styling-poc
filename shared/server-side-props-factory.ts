import { NextPageContext } from "next";
import { getGlobals } from "./get-globals";

export const serverSidePropsFactory = (
  scopes?: string[],
  additionalProps: () => Promise<any> = async () => {}
) => {
  return async (ctx: NextPageContext) => {
    const globals = await getGlobals();
    const pageProps = await additionalProps();

    return {
      props: {
        globals,
        ...pageProps,
      },
    };
  };
};
