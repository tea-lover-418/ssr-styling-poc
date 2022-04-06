interface Globals {
  styling: {
    primaryColor: string;
    secondaryColor: string;
  };
}

let globals: Globals | undefined = undefined;

export const getGlobals = async () => {
  if (globals) {
    return globals;
  }

  return getGlobalsFresh();
};

export const getGlobalsFresh = async () => {
  const res = await fetch("http://localhost:3001");
  const body = await res.json();

  if (!body) {
    throw new Error("NO STYLING");
  }

  globals = {
    styling: {
      ...body,
    },
  };

  return globals;
};
