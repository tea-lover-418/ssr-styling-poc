/** Read from generic prop "color" and return appropriate themed color */
export const colorFromProps = (props: any) => {
  switch (props.color) {
    case "primary":
      return props.theme.colors.primary;
    case "secondary":
      return props.theme.colors.secondary;
  }

  return props.theme.colors.primary;
};
