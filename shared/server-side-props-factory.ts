import { getGlobals } from "./get-globals";

export const serverSidePropsFactory = () => {
  return async () => {
    const globals = await getGlobals();

    return {
      props: {
        globals,
      },
    };
  };
};
