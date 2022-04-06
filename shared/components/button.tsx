export const Button = (props: any) => {
  const { children } = props;

  return (
    <button className="border-2 border-primary p-4 rounded-lg m-4">
      {children}
    </button>
  );
};
export const SecondaryButton = (props: any) => {
  const { children } = props;

  return (
    <button className="border-2 border-secondary p-4 rounded-lg m-4">
      {children}
    </button>
  );
};
